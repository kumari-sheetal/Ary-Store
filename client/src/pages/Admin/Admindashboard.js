// import React, { PureComponent } from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import { useAuth } from "../../context/auth";
// import Layout from "../../components/Layout/Layout";
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

// const Admindashboard = () => {
//   const [auth] = useAuth("");
//   const data = [
//     { name: "Group A", value: 400 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 200 },
//     { name: "Group E", value: 278 },
//     { name: "Group F", value: 189 },
//   ];
//   return (
//     <Layout title={"Dashboard"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <PieChart width={400} height={400}>
//             <Pie
//               dataKey="value"
//               isAnimationActive={false}
//               data={data}
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//               fill="#8884d8"
//               label
//             />

//             <Tooltip />
//           </PieChart>

//           {/* <div className="col-md-8 mt-5">
//             <div className="card m-5 p-3  ">
//               <h4>Admin Name: {auth?.user?.name}</h4>
//               <h4>Admin Email: {auth?.user?.email}</h4>
//               <h4>Admin Contact:{auth?.user?.phone}</h4>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Admindashboard;

//------------------------charts==========
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
import Layout from "../../components/Layout/Layout";
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
} from "recharts";

const Admindashboard = () => {
  const [auth] = useAuth("");
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/product/get-products")
      .then((res) => setProductCount(res.data.totalcount))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/api/v1/category/get-category")
      .then((res) => setCategoryCount(res.data.category.length))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/api/v1/auth/all-orders")
      .then((res) => setOrderCount(res.data.length))
      .catch((err) => console.log(err));
  }, []);

  const data = [
    { name: "Total Products", value: productCount },
    { name: "Total Categories", value: categoryCount },
    { name: "Total Orders", value: orderCount },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <Layout title={"Dashboard"}>
      <div className="container-fluid m-3 p-3 mt-5">
        <div className="row">
          <div className="col-md-3 mt-5">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-5">
            <h1>Admin Dashboard</h1>
            <div className="row">
              <div className="col-md-6">
                <div class="box">
                  <BarChart width={600} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </div>
              </div>

              <div className="col-md-6">
                <div class="box">
                  <PieChart width={600} height={300}>
                    <Pie
                      data={data}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>
              </div>
              <div className="col-md-80 ">
                <div className="card m-5 .ml-0 p-3 ">
                  <h4>User Name: {auth?.user?.name}</h4>
                  <h4>User Email: {auth?.user?.email}</h4>
                  <h4>User Contact:{auth?.user?.phone}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admindashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import { useAuth } from "../../context/auth";
// import Layout from "../../components/Layout/Layout";
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
// } from "recharts";

// const Admindashboard = () => {
//   const [productCount, setProductCount] = useState(0);
//   const [categoryCount, setCategoryCount] = useState(0);
//   const [orderCount, setOrderCount] = useState(0);
//   const [orderData, setOrderData] = useState([]);

//   const { authTokens } = useAuth();

//   useEffect(() => {
//     axios
//       .get("http://localhost:8081/api/v1/product/get-product")
//       .then((res) => setProductCount(res.data.totalcount))
//       .catch((err) => console.log(err));

//     axios
//       .get("http://localhost:8081/api/v1/category/get-category")
//       .then((res) => setCategoryCount(res.data.category.length))
//       .catch((err) => console.log(err));

//     axios
//       .get("http://localhost:8081/api/v1/auth/all-orders")
//       .then((res) => setOrderCount(res.data.length))
//       .catch((err) => console.log(err));

//     axios
//       .get("http://localhost:8081/api/v1/auth/orders", {
//         headers: { Authorization: `Bearer ${authTokens}` },
//       })
//       .then((res) => setOrderData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const data = [
//     { name: "Total Products", value: productCount },
//     { name: "Total Categories", value: categoryCount },
//     { name: "Total Orders", value: orderCount },
//   ];

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

//   const orderStatusData = [
//     {
//       name: "Pending",
//       value: orderData.filter((o) => o.paymentStatus === "pending").length,
//     },
//     {
//       name: "Paid",
//       value: orderData.filter((o) => o.paymentStatus === "paid").length,
//     },
//   ];

//   const orderStatusColors = ["#FFBB28", "#0088FE"];

//   return (
//     <Layout title={"Dashboard"}>
//       <div className="container-fluid m-3 p-3 mt-5">
//         <div className="row">
//           <div className="col-md-3 mt-5">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9 mt-5">
//             <h1>Admin Dashboard</h1>
//             <div className="row">
//               <div className="col-md-6">
//                 <BarChart width={600} height={300} data={data}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="value" fill="#8884d8" />
//                 </BarChart>
//               </div>
//               <div className="col-md-6">
//                 <PieChart width={600} height={300}>
//                   <Pie
//                     data={data}
//                     dataKey="value"
//                     nameKey="name"
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={80}
//                     fill="#8884d8"
//                     label
//                   >
//                     {data.map((entry, index) => (
//                       <Cell
//                         key={`cell-${index}`}
//                         fill={COLORS[index % COLORS.length]}
//                       />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend />
//                 </PieChart>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Admindashboard;
