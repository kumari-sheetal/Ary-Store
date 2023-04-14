import { useSearch } from "../context/Search";
import Layout from "./../components/Layout/Layout";
import React from "react";
import { useNavigate } from "react-router-dom";

const Searchproduct = () => {
  const navigate = useNavigate();
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search Results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap">
            {values?.results.map((p) => (
              <div className="card m-1 " style={{ width: "18rem" }} key={p._id}>
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
        </div>
      </div>
    </Layout>
  );
};

export default Searchproduct;