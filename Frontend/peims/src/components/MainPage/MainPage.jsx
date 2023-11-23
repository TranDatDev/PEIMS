import React, { useState, useEffect } from "react";
import axios from "axios";

const MainPage = () => {
  const [id, setId] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Lấy ID của người dùng từ URL
    const id = window.location.pathname.split("/")[2];
    setId(id);
  }, []);

  useEffect(() => {
    // Lấy tên người dùng từ API
    axios.post("http://localhost:8000/main/", { id: id })
      .then((response) => {
        if (response.status === 200) {
          setUsername(response.data.username);
        }
      });
  }, [id]);

  return (
    <div>
      <h1>Chào mừng, {username}!</h1>
    </div>
  );
};

export default MainPage;