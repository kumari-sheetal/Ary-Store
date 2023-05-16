import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/Cart";
import axios from "axios";
import toast from "react-hot-toast";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import DarkMode from "./Darkmode/DarkMode";

const Homepage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  console.log(products, "products...");

  useEffect(() => console.log(products, "mount"), []);
  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8081/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get Total Count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8081/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
    console.log(total, "data");
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more function
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8081/api/v1/product/product-list/${page}`
      );
      setProducts([...products, ...data?.products]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8081/api/v1/product/get-product`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  //useeffect
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filter product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8081/api/v1/product/product-filters",
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = (product) => {
    const productExist = cart.some((item) => item._id === product._id);

    if (!productExist) {
      toast.success("item already in the cart");
    }
    if (productExist) {
      toast.error("item already in the cart");
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };
  return (
    <Layout title={"AllProducts - Best offers "}>
      <div className="row mt-5">
        <div className="col-md-2">
          <h4 className="text-center mt-5">Filter by Category</h4>
          <div className="d-flex flex-column ">
            {categories?.map((c) => (
              <Checkbox
                className="abc"
                style={{ margin: 0, marginLeft: "1cm" }}
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/*--------  Price filter---------*/}
          <div className="row mt-3">
            <div className="col-md-7">
              <h4 className="text-center " style={{ marginLeft: "33px" }}>
                Price Filter
              </h4>
              <div className="d-flex flex-column">
                <Radio.Group
                  style={{ margin: 0, marginLeft: "1cm" }}
                  onChange={(e) => setRadio(e.target.value)}
                >
                  {Prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>
              {/* <div className="col-md-70"> */}
              {/* <div className="row mt-3 "> */}
              <button
                className="btn btn-outline-dark ms-4 mt-3 "
                onClick={() => window.location.reload()}
              >
                Reset Filters
              </button>
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="col-md-10  ">
          <h1 className="product mt-5 ">All Products</h1>

          <div className="d-flex flex-wrap flex-row ">
            {/* <div
            className="d-flex "
            // style={{
            //   flexDirection: "row",
            //   flexWrap: "wrap",
            //   justifyContent: "space-evenly",
            // }}
          > */}
            {products?.map((p) => (
              <div className="card m-3 " style={{ width: "18rem" }} key={p._id}>
                <img
                  src={`http://localhost:8081/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  style={{
                    maxHeight: "250px",
                    maxWidth: "350px",
                    minWidth: "200px",
                    minHeight: "250px",
                  }}
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 30)}</p>
                  <p className="card-text">₹{p.price}</p>

                  <button
                    className="btn btn-outline-primary ms-2"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-outline-dark ms-2 "
                    onClick={() => onClick(p)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-dark"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
