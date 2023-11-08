import "./HomePage.scss";
import HomeGetStarted from "../../sub-components/HomeGetStarted";
import MasterFinances from "../../../assets/master_finances.png";
import DesignFinances from "../../../assets/design_finances.png";
const HomePage = () => {
    return (
        <>
            <section className="home__container">
                <div className="home__instance--1">
                    <div className="home__slogan--1">
                        <p>SPEND NULL GET FULL</p>
                    </div>
                    <div className="home__slogan--2">
                        <p>
                            To see the{" "}
                            <span className="is__primary__color">future</span>,
                            just look at the{" "}
                            <span className="is__secondary__color">
                                history
                            </span>
                        </p>
                    </div>
                    <div className="home__slogan--3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam quia at praesentium porro inventore, doloribus
                        reiciendis voluptates nemo provident maiores est nam ab
                        reprehenderit repellendus nisi impedit esse optio
                        quibusdam.
                    </div>
                    <HomeGetStarted />
                </div>
                <div className="home__instance--2">
                    <article className="home__article home__article__righty">
                        <h1>Design Your</h1>
                        <h1 className="is__primary__color is__underlined">
                            Finances
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat debitis nisi sunt nostrum dolorum odit
                            ad minus iusto, a, magnam nesciunt placeat fugit
                            numquam, provident eaque quos minima eum ea?
                        </p>
                        <HomeGetStarted />
                    </article>
                    <div className="home__finances--img is__desktop">
                        <img src={DesignFinances} alt="" />
                    </div>
                </div>
                <div className="home__instance--3">
                    <article className="home__article home__article__lefty">
                        <h1>Master Your</h1>
                        <h1 className="is__secondary__color is__underlined">
                            Finances
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat debitis nisi sunt nostrum dolorum odit
                            ad minus iusto, a, magnam nesciunt placeat fugit
                            numquam, provident eaque quos minima eum ea?
                        </p>
                        <HomeGetStarted />
                    </article>
                    <div className="home__finances--img is__desktop">
                        <img src={MasterFinances} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
