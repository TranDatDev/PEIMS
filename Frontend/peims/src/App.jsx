import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Finances from "./components/CustomerApp/Finances.jsx";
// import Analyses from "./components/CustomerApp/Analyses.jsx";
// import Budgets from "./components/CustomerApp/Budgets.jsx";
// import Categories from "./components/CustomerApp/Categories.jsx";
// import PersonalAccount from "./components/CustomerApp/PersonalAccount.jsx";
// import Report from "./components/CustomerApp/Report.jsx";
// import { mainListItems } from "./components/CustomerApp/ListItem.jsx";
import classnames from "classnames";
import { useState } from "react";
import LandingHeader from "./components/LandingPage/LandingHeader/LandingHeader";
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
                    <LandingPage />
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? "Light mode" : "Dark mode"}
                    </button>
                    {/* <div className="app__sidebar">
                        <div className="app__sidebar__container">
                            {mainListItems}
                        </div>
                    </div>
                    <div className="app__dashboard">
                        <Routes>
                            <Route
                                path="/customer/personal-account"
                                element={<PersonalAccount />}
                            />
                            <Route
                                path="/customer/categories"
                                element={<Categories />}
                            />
                            <Route
                                path="/customer/finances"
                                element={<Finances />}
                            />
                            <Route
                                path="/customer/budgets"
                                element={<Budgets />}
                            />
                            <Route
                                path="/customer/analyses"
                                element={<Analyses />}
                            />
                            <Route
                                path="/customer/report"
                                element={<Report />}
                            />
                        </Routes>
                    </div> */}
                </div>
            </Router>
        </>
    );
}
export default App;
