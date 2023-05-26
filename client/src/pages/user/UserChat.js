import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageForm from "../../components/MessageForm";
import MessageList from "../../components/MessageList";

const UserChat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/v1/product/message"
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async (message) => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/product/messages",
        {
          sender: "user",
          message,
        }
      );
      setMessages([...messages, response.data]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <h1>User Chat</h1>
      <MessageList messages={messages} />
      <MessageForm onSubmit={sendMessage} />
    </div>
  );
};

export default UserChat;
