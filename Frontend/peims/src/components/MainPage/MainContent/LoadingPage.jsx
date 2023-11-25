import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './LoadingPage.scss';
const LoadingPage = () => {
    return (
        <section className="loading__container">
            <CircularProgress size={50} />
        </section>
    );
};

export default LoadingPage;
