import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useCart } from "../../context/Cart";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";
import { Form } from "react-bootstrap";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  // const [loading, setLoading] = useState(false);
  const [isCODChecked, setIsCODChecked] = useState(false);

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        // total = total + quantity * item.price;
        total = total + item.price * item.quantity;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8081/api/v1/product/braintree/token"
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //  //handlePayment
  //  const handlePayment = async () => {
  //   try {
  //     // setLoading(true);
  //     if (isCODChecked) {
  //       // setLoading(false);
  //       localStorage.removeItem("cart");
  //       setCart([]);
  //       navigate("/dashboard/user/orders");
  //       toast.success("Payment Completed Successfully ");
  //     } else {
  //       const { nonce } = await instance.requestPaymentMethod();
  //       const { data } = await axios.post(
  //         "http://localhost:8081/api/v1/product/braintree/payment",
  //         {
  //           nonce,
  //           cart,
  //         }
  //       );
  //       // setLoading(false);
  //       localStorage.removeItem("cart");
  //       setCart([]);
  //       navigate("/dashboard/user/orders");
  //       toast.success("Payment Completed Successfully ");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     // setLoading(false);
  //   }
  // };

  //handlePayment
  const handlePayment = async () => {
    try {
      if (isCODChecked) {
        // Update the payment status in the database
        const { data } = await axios.post(
          "http://localhost:8081/api/v1/auth/order-details",
          {
            cart,

            paymentStatus: "COD",
          }
        );
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/dashboard/user/orders");
        toast.success("Payment Completed Successfully ");
      } else {
        const { nonce } = await instance.requestPaymentMethod();
        const { data } = await axios.post(
          "http://localhost:8081/api/v1/product/braintree/payment",
          {
            nonce,
            cart,
          }
        );
        // setLoading(false);
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/dashboard/user/orders");
        toast.success("Payment Completed Successfully ");
      }
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="col-md-4 text-center mt-5">
        <br></br>
        <h2>Card Summary</h2>
        <p>Total | Checkout | Payment</p>
        <hr />
        <h4>Total:{totalPrice()}</h4>
        {auth?.user?.address ? (
          <>
            <div className="mb-3">
              <h4>Current Address -{auth?.user?.address} </h4>
              {/* <h5>{auth?.user?.address}</h5> */}
              <button
                className="btn btn-outline-warning"
                onClick={() => navigate("/dashboard/user/profile")}
              >
                Update Address
              </button>
            </div>
          </>
        ) : (
          <div className="mb-3">
            {auth?.token ? (
              <button
                className="btn btn-outline-warning"
                onClick={() => navigate("/dashboard/user/profile")}
              >
                Update Address
              </button>
            ) : (
              <button
                className="btn btn-outline-warning"
                onClick={() =>
                  navigate("/login", {
                    state: "/cart",
                  })
                }
              >
                Please login to Checkout
              </button>
            )}
          </div>
        )}
        <div className="pricecard-container ">
          <h1>continue shopping</h1>
          {auth?.token && (
            <div className="mt-2">
              {!clientToken || !cart?.length ? (
                ""
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />
                  <Form>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="COD"
                        onChange={(e) => setIsCODChecked(e.target.checked)}
                      />
                    </Form.Group>
                  </Form>
                  <button
                    className="btn btn-outline-warning"
                    onClick={handlePayment}
                    // disabled={!loading || !instance || !auth?.user?.address}
                  >
                    Make Payment
                    {/* {loading ? "Processing ...." : "Make Payment"} */}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;

// import React, { useState, useEffect } from "react";
// import Layout from "../../components/Layout/Layout";
// import { useCart } from "../../context/Cart";
// import { useAuth } from "../../context/auth";
// import { useNavigate } from "react-router-dom";
// import DropIn from "braintree-web-drop-in-react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Form } from "react-bootstrap";

// const PaymentPage = () => {
//   const navigate = useNavigate();
//   const [cart, setCart] = useCart();
//   const [auth, setAuth] = useAuth();
//   const [clientToken, setClientToken] = useState("");
//   const [instance, setInstance] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [isCODChecked, setIsCODChecked] = useState(false);

//   //get payment gateway token
//   const getToken = async () => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:8081/api/v1/product/braintree/token"
//       );
//       setClientToken(data?.clientToken);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getToken();
//   }, [auth?.token]);

//   //handlePayment
//   const handlePayment = async () => {
//     try {
//       setLoading(true);
//       const { nonce } = await instance.requestPaymentMethod();
//       const { data } = await axios.post(
//         "http://localhost:8081/api/v1/product/braintree/payment",
//         {
//           nonce,
//           cart,
//         }
//       );
//       console.log(nonce, "nonnnn");
//       console.log(cart, "caertrt");
//       setLoading(false);
//       localStorage.removeItem("cart");
//       setCart([]);
//       navigate("/dashboard/user/orders");
//       toast.success("Payment Completed Successfully ");
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <Layout>
//       <div className="pricecard-container ">
//         <h1>continue shopping</h1>
//         {auth?.token && (
//           <div className="mt-2">
//             {!clientToken || !cart?.length ? (
//               ""
//             ) : (
//               <>
//                 <DropIn
//                   options={{
//                     authorization: clientToken,
//                     paypal: {
//                       flow: "vault",
//                     },
//                   }}
//                   onInstance={(instance) => setInstance(instance)}
//                 />
//                 <Form>
//                   <Form.Group className="mb-3" id="formGridCheckbox">
//                     <Form.Check type="checkbox" label="COD" />
//                   </Form.Group>
//                 </Form>
//                 <button
//                   className="btn btn-outline-warning"
//                   onClick={handlePayment}
//                   // disabled={!loading || !instance || !auth?.user?.address}
//                 >
//                   {loading ? "Processing ...." : "Make Payment"}
//                 </button>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default PaymentPage;
