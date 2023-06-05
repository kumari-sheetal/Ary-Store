import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [auth] = useAuth("");
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/auth/orders")
      .then((res) => setOrderCount(res.data.length))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/api/v1/product/get-products")
      .then((res) => setProductCount(res.data.totalcount))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/api/v1/auth/user-activity")
      .then((res) => setActivityData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const orderData = [{ name: "Total Orders", value: orderCount }];
  const productData = [{ name: "Total Products", value: productCount }];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <Layout title="Dashboard">
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>

          <div className="col-md-9 mt-5">
            <h1 className="mb-4">Dashboard</h1>
            <div className="dashboard-card">
              <CircularProgressbar
                value={orderCount}
                text={`${orderCount}%`}
                maxValue={100}
                styles={{
                  root: { width: "70px" },
                  path: { stroke: "#FFBB28" },
                  text: { fill: "#FFBB28", fontSize: "22px" },
                }}
              />
              <div
                className="name"
                style={{ fontSize: "40px", marginLeft: "20px" }}
              >
                Orders
              </div>
            </div>
            <div className="col-md-5">
              <div
                className="card  shadow-sm p-1"
                style={{ backgroundColor: "rgb(58, 54, 48)" }}
              >
                <div className="card-body">
                  <div className="text-center">
                    {auth?.user?.gender === "female" ? (
                      <img
                        src="/images/female.jpeg"
                        alt="Profile"
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <img
                        src="/images/men.png"
                        alt="Profile"
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                    <h4 className="mt-3">Admin Name: {auth?.user?.name}</h4>
                    <h4>Admin Email: {auth?.user?.email}</h4>
                    <h4>Admin Contact: {auth?.user?.phone}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h4 className="mb">Total Orders</h4>
              <div className="box">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={orderData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      fill="#8884d8"
                      label
                    >
                      {orderData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from "react";
// import Layout from "../../components/Layout/Layout";
// import UserMenu from "../../components/Layout/UserMenu";
// import { useAuth } from "../../context/auth";
// import axios from "axios";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
//   ResponsiveContainer,
// } from "recharts";

// const Dashboard = () => {
//   const [auth] = useAuth("");
//   const [orderCount, setOrderCount] = useState(0);
//   const [productCount, setProductCount] = useState(0);
//   const [activityData, setActivityData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8081/api/v1/auth/orders")
//       .then((res) => setOrderCount(res.data.length))
//       .catch((err) => console.log(err));

//     axios
//       .get("http://localhost:8081/api/v1/product/get-products")
//       .then((res) => setProductCount(res.data.totalcount))
//       .catch((err) => console.log(err));

//     axios
//       .get("http://localhost:8081/api/v1/auth/user-activity")
//       .then((res) => setActivityData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const orderData = [{ name: "Total Orders", value: orderCount }];
//   const productData = [{ name: "Total Products", value: productCount }];
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

//   return (
//     <Layout title="Dashboard">
//       <div className="container-fluid mt-5">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu />
//           </div>

//           <div className="col-md-9 mt-5">
//             <h1 className="mb-4">Dashboard</h1>
//             <div className="dashboard-card ">
//               <CircularProgressbar
//                 value={orderCount}
//                 text={`${orderCount}%`}
//                 maxValue={100}
//                 styles={{
//                   root: { width: "70px" },
//                   path: { stroke: "#FFBB28" },
//                   text: { fill: "#FFBB28", fontSize: "22px" },
//                 }}
//               />
//               <div
//                 className="name"
//                 style={{ fontSize: "40px", marginLeft: "20px" }}
//               >
//                 Orders
//               </div>
//             </div>

//             <div className="col-md-5">
//               {/* <div className="card bg-light shadow-sm p-1"> */}
//               <h4 className="mb">Total Orders</h4>
//               <div className="box">
//                 <ResponsiveContainer width="100%" height={300}>
//                   <PieChart>
//                     <Pie
//                       data={orderData}
//                       dataKey="value"
//                       nameKey="name"
//                       cx="50%"
//                       cy="50%"
//                       outerRadius={80}
//                       fill="#8884d8"
//                       label
//                     >
//                       {orderData.map((entry, index) => (
//                         <Cell
//                           key={`cell-${index}`}
//                           fill={COLORS[index % COLORS.length]}
//                         />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                     <Legend />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </Layout>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import Layout from "../../components/Layout/Layout";
// import UserMenu from "../../components/Layout/UserMenu";
// import { useAuth } from "../../context/auth";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   AreaChart,
//   Area,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const Dashboard = () => {
//   const [auth] = useAuth("");
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8081/api/v1/auth/orders", {
//         headers: { Authorization: `Bearer ${auth.token}` },
//       })
//       .then((response) => {
//         setOrders(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [auth.token]);

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   return (
//     <Layout title={"Dashboard"}>
//       <div className="container-fluid m-3 p-3 mt-5">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu />
//           </div>
//           <div className="col-md-9">
//             <h1>Dashboard</h1>
//             <div className="col-md-8">
//               <ResponsiveContainer width="100%" height={300}>
//                 <AreaChart data={orders}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="orderDate" />
//                   <YAxis />
//                   <Tooltip />
//                   <Area
//                     type="monotone"
//                     dataKey="totalOrders"
//                     stroke="#8884d8"
//                     fill="#8884d8"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//               <PieChart width={800} height={400}>
//                 <Pie
//                   data={orders}
//                   dataKey="totalOrders"
//                   nameKey="orderDate"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={100}
//                   fill="#8884d8"
//                   label
//                 >
//                   {orders.map((entry, index) => (
//                     <Cell
//                       key={`cell-${index}`}
//                       fill={COLORS[index % COLORS.length]}
//                     />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;
