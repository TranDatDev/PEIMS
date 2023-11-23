import PositionedMenu from '../LandingHeader/PositionedMenu';
import { Avatar, Badge, Stack } from '@mui/material';
import HuyenAvt from '../../../assets/HuyenAvt.jpg';
import KimAnhAvt from '../../../assets/KimAnhAvt.png';
import DatAvt from '../../../assets/DatAvt.jpg';
import { styled } from '@mui/material/styles';
import './AboutPage.scss';
import ReactLogo from '../../../assets/React.png';
import ReactRouterLogo from '../../../assets/ReactRouter.svg';
import MUI from '../../../assets/Mui.png';
import FramerMotion from '../../../assets/FramerMotion.svg';
import AxiosLogo from '../../../assets/AxiosLogo.png';
import ViteLogo from '../../../assets/ViteLogo.png';
import SQLite from '../../../assets/SQLite.png';
import Django from '../../../assets/Django.png';
import DjangoREST from '../../../assets/DjangoREST.png';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: -3,
            left: -3,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '3px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
const RedStyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#ff0000',
        color: '#ff0000',
        boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: -3,
            left: -3,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 0.6s infinite ease-in-out',
            border: '3px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const AboutPage = () => {
    return (
        <>
            <section className="about__container">
                <div className="about__member">
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar
                            alt="Huyền"
                            src={HuyenAvt}
                            sx={{ width: 100, height: 100, border: 3, borderColor: 'gray' }}
                        />
                    </StyledBadge>
                    <div className="about__member__details">
                        <p>Full Name: Lê Ngọc Huyền</p>
                        <p>Identification: 11218409</p>
                        <p>Position: Project Manager, Data Analyst, Data Engineer</p>
                    </div>
                </div>
                <div className="about__member" id="member2">
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar
                            alt="Kim Anh"
                            src={KimAnhAvt}
                            sx={{ width: 100, height: 100, border: 3, borderColor: 'gray' }}
                        />
                    </StyledBadge>
                    <div className="about__member__details">
                        <p>Full Name: Trần Hoàng Kim Anh</p>
                        <p>Identification: 11218387</p>
                        <p>Position: Illustrator, Designer UI/UX/CX </p>
                    </div>
                </div>
                <div className="about__member">
                    <RedStyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar
                            alt="Thành Đạt"
                            src={DatAvt}
                            sx={{ width: 100, height: 100, border: 3, borderColor: 'gray' }}
                        />
                    </RedStyledBadge>
                    <div className="about__member__details">
                        <p>Full Name: Trần Thành Đạt</p>
                        <p>Identification: 11211287</p>
                        <p>Position: Fullstack Developer </p>
                    </div>
                </div>
                <div className="about__frontend about__tech">
                    <h1>Front End</h1>
                    <div className="about__holder__front">
                        <div className="about__element">
                            <img src={ReactLogo} alt="" />
                            <h4>ReactJS</h4>
                        </div>
                        <div className="about__element">
                            <img src={ReactRouterLogo} alt="" />
                            <h4>React-Router-DOM</h4>
                        </div>
                        <div className="about__element">
                            <img src={MUI} alt="" />
                            <h4>Material UI</h4>
                        </div>
                        <div className="about__element">
                            <img src={FramerMotion} alt="" />
                            <h4>Framer Motion</h4>
                        </div>
                        <div className="about__element">
                            <img src={AxiosLogo} alt="" className="axios" />
                            <h4>Axios</h4>
                        </div>
                        <div className="about__element">
                            <img src={ViteLogo} alt="" />
                            <h4>ViteJS</h4>
                        </div>
                    </div>
                </div>
                <div className="about__backend about__tech">
                    <h1>Back End</h1>
                    <div className="about__holder__back">
                        <div className="about__element">
                            <img src={Django} alt="" />
                            <h4>Django</h4>
                        </div>
                        <div className="about__element">
                            <img src={DjangoREST} alt="" />
                            <h4>Django REST Framework</h4>
                        </div>
                    </div>
                </div>
                <div className="about__dbms about__tech">
                    <h1>DBMS</h1>
                    <div className="about__holder__dbms">
                        <div className="about__element">
                            <img src={SQLite} alt="" />
                            <h4>SQLite</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
