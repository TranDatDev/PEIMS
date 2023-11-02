import { Link } from "react-router-dom";
import "./LandingHeader.scss";
import home from "../../../assets/home.png";
import utils from "../../../assets/utils.png";
const LandingHeader = () => {
    return (
        <>
            <div className="landing__header__container">
                <header>
                    <section>
                        <img src="" alt="" />
                        <p className="landing__logo__title is__desktop">
                            aaaaa
                        </p>
                    </section>
                    <nav className="landing__nav--mobile is__mobile">
                        <Link to="">
                            <img src={home} alt="a" />
                        </Link>
                        <Link to="">
                            <img src={utils} alt="b" />
                        </Link>
                        <Link to="">
                            <img src="" alt="c" />
                        </Link>
                        <div className="landing__login--btn">
                            <p>Đăng nhập</p>
                        </div>
                    </nav>
                    <nav className="landing__nav--desktop is__desktop">
                        <ul>
                            <li>
                                <Link to="">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="">Thông tin</Link>
                            </li>
                            <li>
                                <Link to="">Chức năng</Link>
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
