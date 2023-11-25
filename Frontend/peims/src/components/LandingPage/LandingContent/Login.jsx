import { useState } from "react";
import "./Login.scss";
import LoginLight from "../../../assets/LoginLight.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const handleClick = async () => {
      try {
         const response = await axios.post("http://localhost:8000/login/", {
            customer_username: username,
            customer_password: password,
         });

         // Xử lý thành công đăng nhập ở đây
         console.log(response.data.user_id);
         Swal.fire({
            title: "Thank you for using PEIMS!",
            text: response.data.message,
            icon: "success",
         }).then((result) => {
            if (result.isConfirmed) {
               navigate("/main/" + response.data.user_id);
            }
         });
      } catch (error) {
         console.error("Login failed:", error.response.data.error);
         Swal.fire({
            title: "Login failed!",
            text: "Please check again",
            icon: "error",
         });
      }
   };
   return (
      <section className="login__container">
         <div className="login__instance--1">
            <div className="login__title">
               <h1>Login</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="login__inputplace">
               <div className="login__username">
                  <h2 className="login__username__title">
                     Username or email <span>*</span>
                  </h2>
                  <div className="login__username__box">
                     <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="mail@gmail.com"
                        className="login__input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>
               </div>
               <div className="login__password">
                  <h2 className="login__password__title">
                     Password <span>*</span>
                  </h2>
                  <p className="login__password__box">
                     <div className="login__username__box">
                        <input
                           type="password"
                           id="password"
                           name="password"
                           placeholder="Enter your password"
                           className="login__input"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>
                  </p>
                  <h3>forget your password?</h3>
               </div>
            </div>
            <div className="login__submit">
               <div className="login__button">
                  <h3>
                     <button onClick={handleClick}>Login</button>
                  </h3>
               </div>
               <div className="login__extend__register">
                  <p>
                     Don't you have an account?{" "}
                     <span className="login__register__now">
                        <Link to="/register">Register now</Link>
                     </span>
                  </p>
               </div>
            </div>
         </div>
         <div className="login__instance--2">
            <img src={LoginLight} alt="" />
         </div>
      </section>
   );
};

export default Login;
