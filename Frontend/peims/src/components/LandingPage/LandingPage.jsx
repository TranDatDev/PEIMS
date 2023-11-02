import { Route, Routes } from "react-router-dom";
import LandingHeader from "./LandingHeader/LandingHeader";
import HomePage from "./LandingContent/HomePage";
import UltisPage from "./LandingContent/UtilsPage";
import InfoPage from "./LandingContent/InfoPage";
const LandingPage = () => {
    return (
        <>
            <LandingHeader />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/ultis" element={<UltisPage />} />
            </Routes>
        </>
    );
};

export default LandingPage;
