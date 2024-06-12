import {  useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import PreloadStyles from "../../Loading/PreLoader";
import { Menu, Dropdown, Button, ConfigProvider } from 'antd';
import { DownOutlined } from '@ant-design/icons'; // Import Ant Design components
import "../index.css";

const { Item } = Menu;

export default function SmallHeader() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isContactUsPage = location.pathname === "/ContactUs";
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isTransitioning, setTransitioning] = useState(false);
    const [isHeaderVisible, setHeaderVisible] = useState(true);
    const headerRef = useRef(null);

    const HomeStyle = {
        backgroundImage: 'linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0))',
        backgroundColor: 'rgba(18, 18, 18, 0)',
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
    };

    const ContactUsStyle = {
        backgroundColor: 'rgba(18, 18, 18, 1)',
        backgroundImage: 'linear-gradient(to bottom, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0))',
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)'
    };

    const [bgColor, setBgColor] = useState(isContactUsPage ? ContactUsStyle : HomeStyle);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            setPrevScrollPos(currentScrollPos);
            setTransitioning(true);

            if (isScrollingDown) {
                setHeaderVisible(false);
            } else {
                setHeaderVisible(true);
            }

            setTimeout(() => {
                setTransitioning(false);
            }, 300); // Match this duration with CSS transition time
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        setBgColor(isContactUsPage ? ContactUsStyle : HomeStyle);
    }, [location.pathname]);

    // Dropdown menu
    const menu = (
        <Menu>
            <Item key="0">
                <Link to="/" className="d-flex  align-center gap-1">
                    <svg className={`menuItemImg   ${isHomePage ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff"><path className="svg-c1" d="M14.73 16.013c1.226 0 2.223.997 2.223 2.223v4.922h-4.446v-4.922c0-1.226.997-2.223 2.223-2.223zm11.575-1.156l-8.641-8.641A4.12 4.12 0 0 0 14.73 5a4.12 4.12 0 0 0-2.934 1.215l-8.642 8.641c-.1.1-.155.232-.155.373s.055.274.155.373a.53.53 0 0 0 .747 0l1.979-1.979v8.153a2.44 2.44 0 0 0 2.436 2.436h12.826a2.44 2.44 0 0 0 2.436-2.436v-8.153l1.979 1.979a.54.54 0 0 0 .747 0c.1-.1.155-.232.155-.373s-.055-.274-.155-.373z" fill="#fff"></path></svg>
                    <p>خانه</p>
                </Link>
            </Item>
            <Menu.Divider style={{background:'rgb(55, 56, 62)'}}/>
            <Item key="1">
                <Link to="/" className="d-flex  align-center gap-1">
                    <img className="menuItemImg " src={require("../../../images/baby-menu.svg").default} alt="" />
                    <p>کودکان</p>
                </Link>
            </Item>
            <Menu.Divider style={{background:'rgb(55, 56, 62)'}}/>
            <Item key="2">
                <Link to="/" className="d-flex  align-center gap-1">
                <img className="menuItemImg " src={require("../../../images/wheel-cinema-menu.svg").default} alt="" />
                    <p>پردیس نماوا</p>
                </Link>
            </Item>
            <Menu.Divider style={{background:'rgb(55, 56, 62)'}}/>
            <Item key="3">
                <Link to="/" className="d-flex align-center gap-1">
                <img className="menuItemImg" src={require("../../../images/bookmark-menu.svg").default} alt='' />
                <p>نماوا مگ </p>
                </Link>
            </Item>
        </Menu>
    );

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgBase: 'rgb(34, 35, 39)',
                    colorText: '#fff',

                },
            }}
        >
        <div className="d-lg-none d-block">
            <PreloadStyles href='./index.css' as='style'/>
            <div
                className={classNames("header col-12 z-3 top-0 right-0", { 'sticky': isHeaderVisible }, { 'transitioning': isTransitioning })}
                style={{
                    backgroundImage: bgColor.backgroundImage,
                    backgroundColor: bgColor.backgroundColor,
                    boxShadow: bgColor.boxShadow,
                    height: isHeaderVisible ? '80px' : '0',
                    position: isHeaderVisible ? 'fixed' : 'fixed',
                    top: isHeaderVisible ? '0' : 'auto'
                }}
                ref={headerRef}
            >
                <div className="container">
                    <div className="d-flex justify-btw align-center">
                        <div className="d-flex flex-row  justify-center align-center gap-2 gap-xs-1 logo">
                            <Link to={`/`}>
                                <img src={require("../../../images/namava-logo-white.svg").default} alt="" />
                            </Link>
                            <Dropdown overlay={menu} trigger={['click']} placement="bottom" >
                                <Button className="d-flex gap-1 align-center" style={{height:'2rem' ,border:'none', background:'transparent'}}>
                                <p className="font-12 white-color font-weight-normal" >خانه</p>
                                <DownOutlined />
                                </Button>
                            </Dropdown>
                        </div>
                        <div className="d-flex justify-center align-center gap-2 gap-xs-1">
                            <Link className="d-inline-block menuSubscription font-12 font-weight-normal" to='/'>خرید اشتراک</Link>
                            <Link className="signInImg" to='/'>
                                <img className="w-100" src={require("../../../images/sign-in-mobile.svg").default} alt="" />
                            </Link>
                            <Link className="d-md-inline-block d-xs-none signIn border-radius-5 font-md-12 font-weight-normal" to='/'>ورود/ثبت نام</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark-cover position-absolute z-1 top-0 right-0 d-none"></div>
        </div>
        </ConfigProvider>
    );
}
