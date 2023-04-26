import React, { useState } from "react";
import toast from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Auth/AuthStyle/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8081/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ary Store"}>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h4 className="title">RESET PASSWORD</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your favorite colour "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;

// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import Layout from "../../components/Layout/Layout";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");

//   const [message, setMessage] = useState("");

//   const setVal = (e) => {
//     setEmail(e.target.value);
//   };

//   const sendLink = async (e) => {
//     e.preventDefault();

//     if (email === "") {
//       toast.error("email is required!", {
//         position: "top-center",
//       });
//     } else if (!email.includes("@")) {
//       toast.warning("includes @ in your email!", {
//         position: "top-center",
//       });
//     } else {
//       const res = await fetch("/sendlink", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (data.status == 201) {
//         setEmail("");
//         setMessage(true);
//       } else {
//         toast.error("Invalid User", {
//           position: "top-center",
//         });
//       }
//     }
//   };
//   return (
//     <Layout title={"Forgot Password - Ary Store"}>
//       <div className="register">
//         <div className="register_heading"></div>

//         {message ? (
//           <p style={{ color: "green", fontWeight: "bold" }}>
//             pasword reset link send Succsfully in Your Email
//           </p>
//         ) : (
//           ""
//         )}
//         <form>
//           <h4 className="title">RESET PASSWORD</h4>
//           <div className="mb-3">
//             {/* <label htmlFor="email">Email</label> */}
//             <input
//               type="email"
//               value={email}
//               onChange={setVal}
//               name="email"
//               id="email"
//               placeholder="Enter Your Email Address"
//               className="form-control"
//             />
//           </div>

//           <button className="btn btn-primary" onClick={sendLink}>
//             Send
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default ForgotPassword;
