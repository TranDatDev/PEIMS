import "./LandingFooter.scss";
import { Link } from "react-router-dom";
import DarkLogo from "../../../assets/DarkPeims.svg";
import LightLogo from "../../../assets/LightPeims.svg";
const LandingFooter = () => {
    return (
        <>
            <section className="footer__container is__desktop">
                <div className="footer__part--left">
                    <article className="footer__web__name">
                        <h1 className="footer__short__name">PEIMS</h1>
                        <p className="footer__full__name">
                            Personal Expenditure Integrity Management System
                        </p>
                    </article>
                    <div className="footer__web__address footer__desktop">
                        <p>
                            207 Giai Phong Street, Dong Tam Ward, Hai Ba Trung
                            District, Ha Noi.
                        </p>
                    </div>
                </div>
                <div className="footer__part--center footer__desktop">
                    <div className="footer__nav--first">
                        <nav>
                            <p>Links</p>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/products">Products</Link>
                                </li>
                                <li>
                                    <Link to="/pricing">Pricing</Link>
                                </li>
                                <li>
                                    {" "}
                                    <Link to="/about">About us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__nav--second footer__desktop">
                        <nav>
                            <p>Help</p>
                            <ul>
                                <li>
                                    <Link to="/">Payment</Link>
                                </li>
                                <li>
                                    <Link to="/">Return</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="footer__part--right">
                    <div className="footer__newsletter footer__desktop">
                        <h1>Newsletter</h1>
                        <div className="footer__sending">
                            <input
                                type="text"
                                placeholder="Enter Your Email Address"
                            />
                            <div className="footer__subscribe">
                                <h5>SUBSCRIBE</h5>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <img
                            src={LightLogo}
                            alt=""
                            className="footer__logo is__dark"
                        />
                        <img
                            src={DarkLogo}
                            alt=""
                            className="footer__logo is__light"
                        />
                        <small>Terms of service</small>
                        <h2>Copyright © 2023 PEIMS</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingFooter;
