import { Link } from "react-router-dom";
import "./LandingHeader.scss";
import home from "../../../assets/home.png";
import utils from "../../../assets/utils.png";
import DarkLogo from "../../../assets/DarkPeims.svg";
import LightLogo from "../../../assets/LightPeims.svg";
const LandingHeader = () => {
    return (
        <>
            <div className="landing__header__container">
                <header>
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
                        <Link to="/info">
                            <img src={utils} alt="b" />
                        </Link>
                        <Link to="/ultis">
                            <img src="" alt="c" />
                        </Link>
                        <div className="landing__login--btn">
                            <p>Đăng nhập</p>
                        </div>
                    </nav>
                    <nav className="landing__nav--desktop is__desktop">
                        <ul>
                            <li>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/info">Thông tin</Link>
                            </li>
                            <li>
                                <Link to="/ultis">Chức năng</Link>
                            </li>
                        </ul>
                        <div className="landing__login--btn">
                            <p>Đăng nhập</p>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
};

export default LandingHeader;
