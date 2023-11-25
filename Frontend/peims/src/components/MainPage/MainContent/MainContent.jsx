import './MainContent.scss';
import HuyenAvt from '../../../assets/HuyenAvt.jpg';
import { Avatar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Scan from '../../../assets/Scan.png';
import Print from '../../../assets/Print.png';
import Star from '../../../assets/Star.png';
import Share from '../../../assets/Share.png';
import DeleteCustomer from './DeleteCustomer';
import LeftMenu from './LeftMenu';
import { Link } from 'react-router-dom';
const MainContent = () => {
    const [id, setId] = useState(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Lấy ID của người dùng từ URL
        const id = window.location.pathname.split('/')[2];
        setId(id);
    }, []);

    useEffect(() => {
        // Lấy tên người dùng từ API
        axios.post('http://localhost:8000/main/', { id: id }).then((response) => {
            if (response.status === 200) {
                setUsername(response.data.username);
            }
        });
    }, [id]);
    return (
        <>
            <section className="main__content__container">
                <div className="main__selector">
                    <div className="main__selector__workspace">
                        <div className="main__avatar">
                            <Avatar
                                alt="Huyền"
                                src={HuyenAvt}
                                sx={{ width: 40, height: 40 }}
                                variant="rounded"
                            />
                        </div>
                        <div className="main__workspace">
                            <h5>{username}</h5>
                            <div className="main__workspace__plan">
                                <h6>Free plan</h6>
                                <span>Upgrade now</span>
                            </div>
                        </div>
                    </div>
                    <div className='main__delete__customer'>
                        <DeleteCustomer />
                    </div>
                    <div className='main__logout'>
                        <Link to="/">
                            Logout
                        </Link>
                    </div>
                </div>
                <div className="main__display">
                    <div className="main__display__ultil">
                        <LeftMenu />
                        <div className="main__display__usages">
                            <img src={Scan} alt="" />
                            <img src={Print} alt="" />
                            <img src={Star} alt="" />
                            <div className="main__share">
                                <img src={Share} alt="" />
                                <h5>Share</h5>
                            </div>
                            <h4>...</h4>
                        </div>
                    </div>
                    <div className="main__info">
                        <div className="fixed__add">
                            <div>
                                <h1>+</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainContent;
