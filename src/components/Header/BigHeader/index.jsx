import { Fragment, useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export default function BigHeader() {
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

    return (
        <Fragment>
            <div
                className={classNames("header d-lg-block d-none col-12 z-3 top-0 right-0", { 'sticky': isHeaderVisible }, { 'transitioning': isTransitioning })}
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
                        <div className="d-flex flex-lg-row flex-xs-row-reverse flex-sm-row-reverse justify-center align-center gap-2 gap-xs-1 logo">
                            <Link to={`/`}>
                                <img src={require("../../../images/namava-logo-white.svg").default} alt="" />
                            </Link>
                            <button className="hamburgerMenu d-xs-block sideMenuOpen">
                                <img src={require("../../../images/hamburger-menu.svg").default} alt="" />
                            </button>
                            <div className="menu d-lg-flex justify-evenly align-center gap-2 d-xs-none d-sm-none">
                                <Link to={"/"}><p className={`font-12 font-weight-normal ${isHomePage ? 'active' : ''}`}>خانه</p></Link>
                                <Link to={"/"} className="font-12 font-weight-normal">کودکان</Link>
                                <Link to={"/"} className="font-12 font-weight-normal">پردیس نماوا</Link>
                                <Link to={"/"} className="font-12 font-weight-normal">نماوا مگ</Link> 
                            </div>
                        </div>
                        <div className="d-flex justify-center align-center gap-2 gap-xs-1">
                            <Link className="d-inline-block search" to={`/SearchMovie`}>
                                <img src={require("../../../images/search.svg").default} alt="" />
                            </Link>
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
            
        </Fragment>
    );
}