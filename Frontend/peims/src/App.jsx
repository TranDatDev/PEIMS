import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import classnames from "classnames";
import { useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
function App() {
   const [isDarkMode, setIsDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
   };
   return (
      <>
         <Router>
            <div
               className={classnames(
                  "app__container",
                  isDarkMode ? "dark-mode" : "light-mode"
               )}
            >
               <LandingPage
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
               />
            </div>
         </Router>
      </>
   );
}
export default App;
