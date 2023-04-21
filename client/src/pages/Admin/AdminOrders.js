import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";

const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8081/api/v1/auth/all-orders"
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8081/api/v1/auth/order-status/${orderId}`,
        {
          status: value,
        }
      );
      getOrders();
      console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Dashboard-All Orders"}>
      <div className="container-fluid m-3 p-3 mt-5">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-6">
            <h1>All Orders list</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          <Select
                            bordered={false}
                            onChange={(value) => handleChange(o._id, value)}
                            defaultValue={o?.status}
                          >
                            {status.map((s, i) => (
                              <Option key={i} value={s}>
                                {s}
                              </Option>
                            ))}
                          </Select>
                        </td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="conatiner">
                    {o?.products?.map((p, i) => (
                      <div
                        className="row  mb-2  card flex-row"
                        style={{ marginLeft: "0px", marginRight: "0px" }}
                      >
                        <div className="col-md-4 ">
                          <div
                            // className="card m-1 "
                            className="card "
                            style={{ width: "14rem" }}
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
                          </div>
                        </div>
                        <div className="col-md-4">
                          <p>Name:{p.name}</p>
                          <p>Description:{p.description.substring(0, 30)}</p>
                          <p>Price: {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;
