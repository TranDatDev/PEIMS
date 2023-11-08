import { Link } from "react-router-dom";
import "./LandingHeader.scss";
import home from "../../../assets/home.png";
import utils from "../../../assets/utils.png";
import DarkLogo from "../../../assets/DarkPeims.svg";
import LightLogo from "../../../assets/LightPeims.svg";
import DarkModeButton from "../../DarkModeButton";
// eslint-disable-next-line react/prop-types

const LandingHeader = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <>
            <header>
                <div className="landing__header__container">
                    <section className="landing__logo__title">
                        <img
                            src={LightLogo}
                            alt=""
                            className="landing__logo is__light"
                        />
                        <img
                            src={DarkLogo}
                            alt=""
                            className="landing__logo is__dark"
                        />
                        <p className="landing__logo__title is__desktop">
                            PEIMS
                        </p>
                    </section>
                    <nav className="landing__nav--mobile is__mobile">
                        <Link to="/">
                            <img src={home} alt="a" />
                        </Link>
                        <Link to="/products">
                            <img src={utils} alt="b" />
                        </Link>
                        <Link to="/pricing">
                            <img src="" alt="c" />
                        </Link>
                        <Link to="/about">
                            <img src="" alt="c" />
                        </Link>
                        {/* <div className="landing__login--btn">
                            <p>Đăng nhập</p>
                        </div> */}
                    </nav>
                    <nav className="landing__nav--desktop is__desktop">
                        <ul>
                            <li className="landing__link">
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/products">Sản Phẩm</Link>
                            </li>
                            <li>
                                <Link to="/pricing">Bảng Giá</Link>
                            </li>
                            <li>
                                <Link to="/about">Thông Tin</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="landing__login is__desktop">
                        <DarkModeButton
                            isDarkMode={isDarkMode}
                            toggleDarkMode={toggleDarkMode}
                        />
                        <button className="landing__login--btn">
                            <Link to="/login">Đăng Nhập</Link>
                        </button>
                        <button className="landing__register--btn">
                            <Link to="/register">Đăng Ký</Link>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default LandingHeader;
