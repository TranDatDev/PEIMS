import Sun from "../assets/sun-regular.svg";
import Moon from "../assets/moon-regular.svg";
import Bulb__On from "../assets/lightbulb-regular.svg";
import Bulb__Off from "../assets/lightbulb-solid.svg";
import React from "react";

const DarkModeButton = ({ isDarkMode, toggleDarkMode }) => {
   return (
      <div
         type="checkbox"
         onClick={toggleDarkMode}
         checked={isDarkMode}
         className="dark-mode-button"
      >
         {isDarkMode ? (
            <img src={Bulb__Off} alt="Đèn tắt" className="dark-mode" />
         ) : (
            <img src={Bulb__On} alt="Đèn sáng" className="light-mode" />
         )}
      </div>
   );
};

export default DarkModeButton;
