import MainHeader from './MainHeader/MainHeader';
import MainContent from './MainContent/MainContent';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ErrorPage from './MainContent/ErrorPage';
import CircularProgress from '@mui/material/CircularProgress';
import LoadingPage from './MainContent/LoadingPage';
const MainPage = ({ isDarkMode, toggleDarkMode }) => {
    const [id, setId] = useState(null);
    const [status, setStatus] = useState(null);
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        // Lấy ID của người dùng từ URL
        const id = window.location.pathname.split('/')[2];
        setId(id);
    }, []);

    useEffect(() => {
        // Lấy tên người dùng từ API
        axios
            .post('http://localhost:8000/main/', { id: id })
            .then((response) => {
                if (response.status === 200) {
                    setStatus('success');
                } else {
                    setStatus('error');
                    setTimeout(() => {
                        setShowError(true);
                    }, 1000);
                }
            })
            .catch((error) => {
                setStatus('error');
                setTimeout(() => {
                    setShowError(true);
                }, 1000);
            });
    }, [id]);
    return (
        <>
            {status === 'success' ? (
                <>
                    <MainHeader isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    <MainContent />
                </>
            ) : status === 'error' && showError ? (
                <ErrorPage />
            ) : (
                <LoadingPage />
            )}
        </>
    );
};

export default MainPage;
