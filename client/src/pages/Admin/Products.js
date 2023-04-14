import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8081/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Somethong went wrong");
    }
  };
  //useeffect
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title={"All products"}>
      <div className="container-fluid m-3 p-3 ">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <h1>All Product list</h1>
          <div className="col-md-12">
            <div className="row row-cols-8">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-box  col"
                >
                  <div
                    className="card m-2 p-3"
                    style={{ width: "12rem" }}
                    key={p._id}
                  >
                    <img
                      src={`http://localhost:8081/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      style={{ width: "158px", height: "158px" }}
                      alt={p.name}
                    />
                    <div className="card-body " style={{ height: 100 }}>
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
