import React from 'react';
import './MainHeader.scss';
import DarkLogo from '../../../assets/DarkPeims.svg';
import LightLogo from '../../../assets/LightPeims.svg';
import DarkModeButton from '../../DarkModeButton';
import Bell from '../../../assets/Bell.svg';
import Question from '../../../assets/Question.svg';
import HuyenAvt from '../../../assets/HuyenAvt.jpg';
import { Avatar } from '@mui/material';
const MainHeader = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <>
            <header className="main__header">
                <section className="main__header__container">
                    <div className="main__header__left">
                        <section className="main__logo__title">
                            <img src={DarkLogo} alt="" className="main__logo" />
                            <p className="main__logo__title is__desktop">PEIMS</p>
                        </section>
                        <div className="main__dropbox">
                            <h3>
                                Workspaces <span>🞃</span>
                            </h3>
                            <h3>
                                Recent <span>🞃</span>
                            </h3>
                            <h3>
                                Starred <span>🞃</span>
                            </h3>
                        </div>
                    </div>
                    <div className="main__header__right">
                        <DarkModeButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                        <img src={Bell} alt="Bell" />
                        <img src={Question} alt="Bell" />
                        <Avatar alt="Huyền" src={HuyenAvt} sx={{ width: 24, height: 24 }} />
                    </div>
                </section>
            </header>
        </>
    );
};

export default MainHeader;
