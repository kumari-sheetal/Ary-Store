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
              <Link to={`/category/${c.slug}`} className="btn btn-outline-dark">
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
