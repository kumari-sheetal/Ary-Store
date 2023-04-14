import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
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
      <div className="container mt-5">
        <h1>Categories</h1>
        <h1 className="text-center">{category?.name}</h1>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
