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
  const [loading, setLoading] = useState(false);
  const [isCODChecked, setIsCODChecked] = useState(false);

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

  //handlePayment
  const handlePayment = async () => {
    try {
      setLoading(true);
      if (isCODChecked) {
        setLoading(false);
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
        setLoading(false);
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/dashboard/user/orders");
        toast.success("Payment Completed Successfully ");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
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
                  {loading ? "Processing ...." : "Make Payment"}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PaymentPage;
