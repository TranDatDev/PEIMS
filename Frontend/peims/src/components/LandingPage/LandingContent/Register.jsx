import React from "react";
import "./Register.scss";
import RegisterLight from "../../../assets/RegisterLight.png";
import { Link } from "react-router-dom";
const Register = () => {
   return (
      <section className="register__container">
         <div className="register__instance--1">
            <div className="register__title">
               <h1>Register</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="register__inputplace">
               <div className="register__username">
                  <h2 className="register__username__title">
                     Username <span>*</span>
                  </h2>
                  <div className="register__username__box">
                     <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="mail@gmail.com"
                        className="register__input"
                     />
                  </div>
               </div>
               <div className="register__mail">
                  <h2 className="register__mail__title">
                     Email Address <span>*</span>
                  </h2>
                  <div className="register__username__box">
                     <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="mail@gmail.com"
                        className="register__input"
                     />
                  </div>
               </div>
               <div className="register__password">
                  <h2 className="register__password__title">
                     Password <span>*</span>
                  </h2>
                  <p className="register__password__box">
                     <div className="register__username__box">
                        <input
                           type="text"
                           id="username"
                           name="username"
                           placeholder="mail@gmail.com"
                           className="register__input"
                        />
                     </div>
                  </p>
               </div>
            </div>
            <div className="register__submit">
               <div className="register__button">
                  <h3>Register</h3>
               </div>
               <div className="register__extend__register">
                  <p>
                     Already have an account?{" "}
                     <span className="register__register__now">
                        <Link to="/login">Log in</Link>
                     </span>
                  </p>
               </div>
            </div>
         </div>
         <div className="register__instance--2">
            <img src={RegisterLight} alt="" />
         </div>
      </section>
   );
};

export default Register;
