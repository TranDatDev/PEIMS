// import CheckLight from "../../../assets/CheckLight.svg";
import "./PricingPage.scss";
import Check from "../../SmallElement/Check";
import Block from "../../SmallElement/Block";
const PricingPage = () => {
    return (
        <>
            <section className="pricing__container">
                <div className="pricing__pick">
                    <div className="pricing__title">
                        <h1>Explore Ultimate Plan</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nesciunt quisquam qui, facere a beatae quas.
                            Repellendus eveniet magnam in minima aperiam?
                        </p>
                    </div>
                    <div className="pricing__variety">
                        <div className="pricing__annually">
                            <div className="pricing__annually__box">
                                <div className="pricing__choose">
                                    <input type="radio" checked />
                                    <div className="pricing__desc--1">
                                        <h4>Annually</h4>
                                        <h5>Save 49%</h5>
                                    </div>
                                </div>
                                <div className="pricing__desc--2">
                                    <h4>
                                        <span>$ 180</span> - 12 Months
                                    </h4>
                                    <h5>$ 15/month</h5>
                                </div>
                            </div>
                            <div className="pricing__annually__checkbox">
                                <input type="checkbox" />
                                <p>
                                    Recurring payment - Subscription will be
                                    auto debited $ 30 on every 1 year until
                                    cancelled
                                </p>
                            </div>
                        </div>
                        <div className="pricing__monthly">
                            <div className="pricing__monthly__box">
                                <div className="pricing__choose">
                                    <input type="radio" disabled />
                                    <div className="pricing__desc--1">
                                        <h4>Monthly</h4>
                                    </div>
                                </div>
                                <div className="pricing__desc--2">
                                    <h4>$ 20/month</h4>
                                </div>
                            </div>
                            <div className="pricing__annually__checkbox">
                                <input type="checkbox" />
                                <p>
                                    Recurring payment - Subscription will be
                                    auto debited $ 30 on every 1 year until
                                    cancelled
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing__table">
                    <table className="pricing__table__display">
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Free</th>
                                <th className="border__to__right">Ultimate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Number of List</td>
                                <td>5 per table</td>
                                <td className="border__to__right">Unlimited</td>
                            </tr>
                            <tr>
                                <td>Number of Table</td>
                                <td>2 per account</td>
                                <td className="border__to__right">Unlimited</td>
                            </tr>
                            <tr>
                                <td>Statistic</td>
                                <td>Basic</td>
                                <td className="border__to__right">Pro</td>
                            </tr>
                            <tr>
                                <td>Analysis Tools</td>
                                <td>
                                    <div className="checked__props">
                                        {" "}
                                        <Block />
                                    </div>
                                </td>
                                <td className="border__to__right">
                                    <div className="checked__props">
                                        {" "}
                                        <Check />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Workspace Customizing</td>
                                <td>
                                    <div className="checked__props">
                                        {" "}
                                        <Block />
                                    </div>
                                </td>
                                <td className="border__to__right">
                                    <div className="checked__props">
                                        {" "}
                                        <Check />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Professional PDF Report Solution</td>
                                <td>
                                    <div className="checked__props">
                                        {" "}
                                        <Block />
                                    </div>
                                </td>
                                <td className="border__to__right">
                                    <div className="checked__props">
                                        {" "}
                                        <Check />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>CSV & Excel Supported</td>
                                <td>
                                    <div className="checked__props">
                                        {" "}
                                        <Block />
                                    </div>
                                </td>
                                <td className="border__to__right">
                                    <div className="checked__props">
                                        {" "}
                                        <Check />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>AI-driven Toggle</td>
                                <td>
                                    <div className="checked__props">
                                        {" "}
                                        <Block />
                                    </div>
                                </td>
                                <td className="border__to__right">
                                    <div className="checked__props">
                                        {" "}
                                        <Check />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Better Guideline and Support Warnings</td>
                                <td>
                                    <div className="checked__props">
                                        {" "}
                                        <Block />
                                    </div>
                                </td>
                                <td className="border__to__right">
                                    <div className="checked__props">
                                        {" "}
                                        <Check />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="pricing__subscribe__now">
                        <div className="pricing__subscribe--btn">
                            <h4>Subscribe Now</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPage;
