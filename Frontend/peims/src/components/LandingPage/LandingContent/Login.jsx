import React from "react";
import "./Login.scss";
import LoginLight from "../../../assets/LoginLight.png";
import { Link, redirect } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
   const handleClick = () => {
      Swal.fire({
         title: "Cảm ơn bạn đã sử dụng PEIMS!",
         text: "Đăng nhập thành công!",
         icon: "success",
      });
      setTimeout(() => {
         // Redirect về trang login
         window.location.href = "/login";
      }, 1000);
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
                           type="text"
                           id="username"
                           name="username"
                           placeholder="mail@gmail.com"
                           className="login__input"
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
