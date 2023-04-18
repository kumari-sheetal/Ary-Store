import Layout from "./../components/Layout/Layout";
import React from "react";
import { useCart } from "../context/Cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //delete items
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="conatiner" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-12"></div>
          <h1 className="text-enter ">
            {/* {`Hello${auth?.token && auth?.user?.name}`} */}
          </h1>
          <h4 className="text-center">
            {cart?.length > 1
              ? `You have ${cart.length} items in your cart ${
                  auth?.token ? "" : "Please login to checkout"
                }`
              : "Your Cart is Empty"}
          </h4>
          {/* <h1>Your cart</h1> */}
          <div className="row">
            <div className="col-md-7">
              {cart?.map((p) => (
                <div className="row mb-2 p-3 card flex-row">
                  <div className="col-md-4">
                    <div
                      className="card m-1 "
                      style={{ width: "18rem" }}
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
                  <div className="col-md-8">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price: {p.price}</p>
                    <button
                      className="btn btn-dark"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4 text-center">
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
