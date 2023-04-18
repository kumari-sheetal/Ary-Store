import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductbycate();
  }, [params?.slug]);
  const getProductbycate = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8081/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container" style={{ marginTop: "100px" }}>
        <h4 className="text-center">Category-{category?.name}</h4>
        <h6 className="text-center ">{products?.length} Total Result</h6>

        <div className="row">
          <div className="col-md-16">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div
                  className="card m-1 "
                  style={{ width: "18rem" }}
                  key={p._id}
                >
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
                      className="btn btn-outline-primary ms-2"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button className="btn btn-outline-dark ms-2">
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="m-2 p-3">
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
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;