import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
import Layout from "../../components/Layout/Layout";

const Admindashboard = () => {
  const [auth] = useAuth("");
  return (
    <Layout title={"Dashboard"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-8">
            <div className="card m-5 p-3 ">
              <h4>Admin Name: {auth?.user?.name}</h4>
              <h4>Admin Email: {auth?.user?.email}</h4>
              <h4>Admin Contact:{auth?.user?.phone}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admindashboard;
