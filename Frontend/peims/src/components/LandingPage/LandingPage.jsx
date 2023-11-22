import { Route, Routes } from "react-router-dom";
import LandingHeader from "./LandingHeader/LandingHeader";
import HomePage from "./LandingContent/HomePage";
import ProductsPage from "./LandingContent/ProductsPage";
import PricingPage from "./LandingContent/PricingPage";
import AboutPage from "./LandingContent/AboutPage";
import LandingFooter from "./LandingFooter/LandingFooter";
import Login from "./LandingContent/Login";
import Register from "./LandingContent/Register";
// eslint-disable-next-line react/prop-types
const LandingPage = ({ isDarkMode, toggleDarkMode }) => {
   return (
      <>
         <LandingHeader
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
         />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Routes>
         <LandingFooter />
      </>
   );
};

export default LandingPage;
