import React, { useState, UseEffect } from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container-fluid m-3 p-3 mt-5">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <Link
                to={`/category/${c.slug}`}
                className="btn "
                style={{
                  width: "17cm",
                  height: "4cm",
                  textAlign: "center",
                  justifyContent: "center",
                  background: "light",
                  fontSize: "35px",
                  fontWeight: "bold",
                  boxShadow: "20px 20px 50px 10px pink inset",
                }}
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
