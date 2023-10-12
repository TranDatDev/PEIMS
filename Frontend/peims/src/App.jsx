import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Finances from "./components/CustomerApp/Finances.jsx";
import Analyses from "./components/CustomerApp/Analyses.jsx";
import Budgets from "./components/CustomerApp/Budgets.jsx";
import Categories from "./components/CustomerApp/Categories.jsx";
import PersonalAccount from "./components/CustomerApp/PersonalAccount.jsx";
import Report from "./components/CustomerApp/Report.jsx";
import CustomerSidebar from "./components/Sidebar.jsx";
import { mainListItems } from "./components/CustomerApp/ListItem.jsx";

function App() {
    return (
        <>
            <Router>
                <div>
                    <div>{mainListItems}</div>
                    <CustomerSidebar />
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
                        <Route path="/customer/budgets" element={<Budgets />} />
                        <Route
                            path="/customer/analyses"
                            element={<Analyses />}
                        />
                        <Route path="/customer/report" element={<Report />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
