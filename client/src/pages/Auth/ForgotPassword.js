import React,{useState} from 'react';
import toast from 'react-hot-toast';
import Layout from '/home/user/Desktop/ARY-store/client/src/components/Layout/Layout.js';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import"../Auth/AuthStyle/AuthStyles.css";



const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
  
    const navigate = useNavigate();
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password", {
          email,
          newPassword,
          answer,
        });
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
  )
}

export default ForgotPassword;
