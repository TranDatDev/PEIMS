import React from 'react';
import './ErrorPage.scss';
import LightLogo from '../../../assets/LightPeims.svg';
import Error from '../../../assets/Error.png';
const ErrorPage = () => {
    return (
        <section className="error__container">
            <h1>ERROR</h1>
            <div className="error__display">
                <div className="error__left">
                    <img src={LightLogo} alt="" />
                    <h5>We're sorry</h5>
                    <h5>
                        404. There's an <span>error</span>.
                    </h5>
                    <h5>The requested URL was not found on the database.</h5>
                </div>
                <div className="error__right">
                    <img src={Error} alt="" />
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
