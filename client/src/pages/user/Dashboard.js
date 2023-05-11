import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
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

const Dashboard = () => {
  const [auth] = useAuth("");
  const [orderCount, setOrderCount] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/v1/auth/orders")
      .then((res) => setOrderCount(res.data.length))
      .catch((err) => console.log(err));
  }, []);

  const data = [{ name: "Total Orders", value: orderCount }];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
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
              <div className="card m-5 p-3 ">
                <h4>User Name: {auth?.user?.name}</h4>
                <h4>User Email: {auth?.user?.email}</h4>
                <h4>User Contact:{auth?.user?.phone}</h4>
                <h4>User Address:{auth?.user?.address}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
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
