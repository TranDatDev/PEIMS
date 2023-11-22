import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import classnames from "classnames";
import { useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import MainPage from "./components/MainPage/MainPage";
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
               <Routes>
                  <Route
                     path="*"
                     element={
                        <LandingPage
                           isDarkMode={isDarkMode}
                           toggleDarkMode={toggleDarkMode}
                        />
                     }
                  />
                  <Route path="/main" element={<MainPage />} />
               </Routes>
            </div>
         </Router>
      </>
   );
}
export default App;
