import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useCart } from "../context/Cart";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const params = useParams();
  const [cart, setCart] = useCart();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  //use Effect
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //get single product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8081/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.products);
      getSimilarProduct(data?.products._id, data?.products.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8081/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  //cart func
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
    <Layout>
      <div className="row container mt-5">
        <div className="col-md-4 mt-5">
          <img
            src={`http://localhost:8081/api/v1/product/product-photo/${product._id}`}
            className="card m-2 p-3"
            style={{ width: "300px", height: "300px" }}
            alt={product.name}
          />
        </div>
        <div className="col mt-5  ">
          <h1>Product Deatils</h1>
          <h6>Name:{product.name}</h6>
          <h6>Description:{product.description}</h6>
          <h6>Price:{product.price}</h6>
          <h6>Category:{product?.category?.name}</h6>

          <button
            className="btn btn-outline-dark ms-2 "
            onClick={() => onClick(product)}

            // {
            //   setCart([...cart, product]);
            //   localStorage.setItem("cart", JSON.stringify([...cart, product]));
            //   toast.success("Item Added to Cart");
            // }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <hr />
      <div className="row m-3 ">
        <h2>Similar Products</h2>
        {relatedProducts.length < 1 && (
          <p className="text-left">No Similar Products</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
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
                <p className="card-text">
                  {p.description.substring(0, 30)}.....
                </p>
                <p className="card-text">₹{p.price}</p>

                <button
                  className="btn btn-outline-dark ms-2 "
                  onClick={() => onClick(p)}

                  // {
                  //   setCart([...cart, p]);
                  //   localStorage.setItem("cart", JSON.stringify([...cart, p]));
                  //   toast.success("Item Added to Cart");
                  // }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
