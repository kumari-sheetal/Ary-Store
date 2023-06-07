import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useAuth } from "../../context/auth";
import Layout from "../../components/Layout/Layout";
import "../user/Chat.css";
import AdminMenu from "../../components/Layout/AdminMenu";
const socket = io("http://localhost:8081");

const AdminChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [sender, setSender] = useState("Admin"); // Set the sender name for the admin
  const [receiver, setReceiver] = useState("User"); // Set the receiver name as needed
  const [auth] = useAuth("");

  useEffect(() => {
    // Fetch initial messages
    fetchMessages();

    // Listen for new messages
    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Clean up socket connection
      socket.off("newMessage");
    };
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/v1/msg/messages");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage) return;

    try {
      const response = await fetch("http://localhost:8081/api/v1/msg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sender, receiver, message: inputMessage }),
      });

      if (response.ok) {
        setInputMessage("");
        // Add the sent message to the client-side messages array
        const newMessage = { sender, receiver, message: inputMessage };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Layout title={"Chat-Room"}>
      <div className="container-fluid m-3 p-3 mt-5">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>{" "}
        </div>{" "}
      </div>
      <div className="box-chat">
        <h1 style={{ color: "white", textAlign: "center" }}>Chat App</h1>
        {/* <h4 className="mt-3 user-name">User Name: {auth?.user?.name}</h4>{" "} */}
        <div className="messages-container">
          {messages.map((message) => (
            <div
              key={message._id}
              className={`message ${
                message.sender === sender ? "sent" : "received"
              }`}
            >
              <p>
                <span className="sender-name">
                  {message.sender === sender ? "You" : message.sender}:{" "}
                  {message.message}
                </span>
              </p>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={inputMessage}
            placeholder="Write here your Message"
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button className="reset mt-2" type="submit">
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AdminChatApp;
