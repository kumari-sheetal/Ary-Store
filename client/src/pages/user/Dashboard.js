import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth("");
  return (
    <Layout title={"Dashboard"}>
      <div className="container-fluid m-3 p-3 mt-5">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Dashboard</h1>
            <div className="col-md-8">
              {/* <div className="card m-5 p-3 ">
                <h4>User Name: {auth?.user?.name}</h4>
                <h4>User Email: {auth?.user?.email}</h4>
                <h4>User Contact:{auth?.user?.phone}</h4>
                <h4>User Address:{auth?.user?.address}</h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
