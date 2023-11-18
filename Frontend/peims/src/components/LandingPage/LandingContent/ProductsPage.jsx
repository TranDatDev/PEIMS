import HomeGetStarted from "../../sub-components/HomeGetStarted";
import "./ProductsPage.scss";
import Check from "../../SmallElement/Check";
import OrganizeLight from "../../../assets/OrganizeLight.png";
import OrganizeDark from "../../../assets/OrganizeDark.png";
import TransparentLight from "../../../assets/TransparentLight.png";
import TransparentDark from "../../../assets/TransparentDark.png";
import PersonalLight from "../../../assets/PersonalLight.png";
import PersonalDark from "../../../assets/PersonalDark.png";
import KeepingLight from "../../../assets/KeepingLight.png";
import KeepingDark from "../../../assets/KeepingDark.png";
const ProductsPage = () => {
    return (
        <>
            <section className="product__container">
                <div className="product__instance--1">
                    <article>
                        <h1>
                            Step Into a Vast Magical <br /> World of Finances
                        </h1>
                        <h6>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras odio magna, volutpat sit amet purus sit
                            amet.
                        </h6>
                    </article>
                    <HomeGetStarted />
                </div>
                <div className="product__instance--2 product__instance__described">
                    <div className="product__showcase is__start">
                        <img
                            src={OrganizeLight}
                            alt="aaaaaaaaaaaaaaaaaaaaaaa"
                            className="prouduct__img is__desktop is__light"
                        />
                        <img
                            src={OrganizeDark}
                            alt="aaaaaaaaaaaaaaaaaaaaaaa"
                            className="prouduct__img is__desktop is__dark"
                        />
                    </div>
                    <div className="product__details">
                        <div className="product__detail--1">
                            <h6>We make it easy to</h6>
                            <h1>
                                Organize, store, and <br /> search transactions
                            </h1>
                        </div>
                        <div className="product__detail--2">
                            <div className="product__traits">
                                <div className="product__trait--1">
                                    <Check />
                                    <div className="product__trait__display">
                                        <h3 className="product__trait__title">
                                            Effortless Transaction Organization
                                        </h3>
                                        <h5 className="product__trait__typo">
                                            An user-friendly solution to help
                                            you efficiently categorize, store,
                                            and retrieve your financial
                                            transactions.
                                        </h5>
                                    </div>
                                </div>
                                <div className="product__trait--2">
                                    <Check />
                                    <div className="product__trait__display">
                                        <h3 className="product__trait__title">
                                            Seamlessly Find Financial Records
                                        </h3>
                                        <h5 className="product__trait__typo">
                                            A seamless experience for searching
                                            and retrieving transaction
                                            information, having quick access to
                                            your financial history
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__instance--3 product__instance__described">
                    <div className="product__showcase is__end">
                        <img
                            src={TransparentLight}
                            alt="aaaaaaaaaaaaaaaaaaaaaaa"
                            className="prouduct__img is__desktop is__light"
                        />
                        <img
                            src={TransparentDark}
                            alt="aaaaaaaaaaaaaaaaaaaaaaa"
                            className="prouduct__img is__desktop is__dark"
                        />
                    </div>
                    <div className="product__details">
                        <div className="product__detail--1">
                            <h6>We offer</h6>
                            <h1>
                                Transparent transaction <br /> categories
                                management
                            </h1>
                        </div>
                        <div className="product__detail--2">
                            <div className="product__traits">
                                <div className="product__trait--1">
                                    <Check />
                                    <div className="product__trait__display">
                                        <h3 className="product__trait__title">
                                            Enhanced Expense Clarity
                                        </h3>
                                        <h5 className="product__trait__typo">
                                            We provide a transparent system for
                                            managing transaction categories,
                                            making it easy for you to track your
                                            expenses with precision.
                                        </h5>
                                    </div>
                                </div>
                                <div className="product__trait--2">
                                    <Check />
                                    <div className="product__trait__display">
                                        <h3 className="product__trait__title">
                                            Streamlined Expense Organization
                                        </h3>
                                        <h5 className="product__trait__typo">
                                            Our transparent approach to
                                            transaction categories management
                                            simplifies the process of organizing
                                            your expenses, ensuring financial
                                            clarity.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__instance--4 product__instance__described">
                    <div className="product__showcase is__start">
                        <img
                            src={PersonalLight}
                            alt="aaaaaaaaaaaaaaaaaaaaaaa"
                            className="prouduct__img is__desktop is__light"
                        />
                        <img
                            src={PersonalDark}
                            alt="aaaaaaaaaaaaaaaaaaaaaaa"
                            className="prouduct__img is__desktop is__dark"
                        />
                    </div>
                    <div className="product__details">
                        <div className="product__detail--1">
                            <h6>We provide</h6>
                            <h1>
                                Personal financial <br /> management through
                                <br /> charts and tables
                            </h1>
                        </div>
                        <div className="product__detail--2">
                            <div className="product__traits">
                                <div className="product__trait--1">
                                    <Check />
                                    <div className="product__trait__display">
                                        <h3 className="product__trait__title">
                                            Effortless Transaction Organization
                                        </h3>
                                        <h5 className="product__trait__typo">
                                            An user-friendly solution to help
                                            you efficiently categorize, store,
                                            and retrieve your financial
                                            transactions.
                                        </h5>
                                    </div>
                                </div>
                                <div className="product__trait--2">
                                    <Check />
                                    <div className="product__trait__display">
                                        <h3 className="product__trait__title">
                                            Seamlessly Find Financial Records
                                        </h3>
                                        <h5 className="product__trait__typo">
                                            A seamless experience for searching
                                            and retrieving transaction
                                            information, having quick access to
                                            your financial history
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__instance--5 product__instance__described">
                    <div className="product__showcase is__end">
                        <img
                            src={KeepingLight}
                            alt="aaaaaaaaaaaaaaaaaaaaaaa"
                            className="prouduct__img is__desktop is__light"
                        />
                        <img
                            src={KeepingDark}
                            alt="aaaaaaaaaaaaaaaaaaaaaaa"
                            className="prouduct__img is__desktop is__dark"
                        />
                    </div>
                    <div className="product__details">
                        <div className="product__detail--1">
                            <h6>We prioritize</h6>
                            <h1>
                                Keeping data <br /> safe and secure
                            </h1>
                        </div>
                        <div className="product__detail--2">
                            <div className="product__traits">
                                <div className="product__trait--1">
                                    <Check />
                                    <div className="product__trait__display">
                                        <h3 className="product__trait__title">
                                            Data Security at the Forefront
                                        </h3>
                                        <h5 className="product__trait__typo">
                                            Our top priority is the safety of
                                            your data, achieved by our
                                            unwavering commitment to user and
                                            system security
                                        </h5>
                                    </div>
                                </div>
                                <div className="product__trait--2">
                                    <Check />
                                    <div className="product__trait__display">
                                        <h3 className="product__trait__title">
                                            Your Information's Safety Matters
                                        </h3>
                                        <h5 className="product__trait__typo">
                                            We prioritize user and system
                                            security to uphold the safety and
                                            security of your data.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;
