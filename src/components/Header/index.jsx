import { Fragment ,useEffect , useState, useRef } from "react";
import { Link ,useLocation } from "react-router-dom";
import classNames from "classnames";
import "./index.css";

export default function Header({isContactUsComponent}) {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isSticky, setSticky] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isTransitioning, setTransitioning] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            setPrevScrollPos(currentScrollPos);
            setTransitioning(true);
            isScrollingDown ? setSticky(true) : setSticky(false);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        const handleTransitionEnd = () => {
            setTransitioning(false);
        };

        const header = headerRef.current;
        header.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            header.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, []);

    return(
        <Fragment>
            <div className={classNames("header", { 'sticky': isSticky }, { 'transitioning': isTransitioning })} style={{ backgroundColor: isContactUsComponent ? '#000' : 'rgba(0, 0, 0, .4)' }} ref={headerRef}>
                <div className="container">
                    <div className="d-flex justify-btw align-center">
                        <div className="d-flex flex-lg-row flex-xs-row-reverse flex-sm-row-reverse justify-center align-center gap-2 gap-xs-1 logo">
                            <Link to={`/`}>
                                <img src={require("../../images/namava-logo-white.svg").default} alt="" />
                            </Link>
                            <button className="hamburgerMenu d-xs-block sideMenuOpen" >
                                <img src={require("../../images/hamburger-menu.svg").default} alt="" />
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
                                <img src={require("../../images/search.svg").default} alt=""/>
                            </Link>
                            <Link className="d-inline-block menuSubscription font-12 font-weight-normal" to='/'>خرید اشتراک</Link>
                            <Link className="signInImg" to='/'>
                                <img className="w-100" src={require("../../images/sign-in-mobile.svg").default} alt=""/>
                            </Link>
                            <Link className="d-md-inline-block d-xs-none signIn border-radius-5 font-md-12 font-weight-normal" to='/'>ورود/ثبت نام</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark-cover position-absolute z-1 top-0 right-0 d-none"></div>
            <div className="sideMenu d-lg-none d-sm-flex d-xs-flex flex-column justify-evenly align-center gap-lg-1 gap-md-3 position-absolute top-0  bottom-0 z-3">
                <div className="sideMenuLogo d-flex flex-row-reverse justify-start gap-2 align-center w-100">
                    <Link to="/">
                        <img src={require("../../images/namava-logo-white.svg").default} alt="" />
                    </Link>
                    <button className="hamburgerMenu d-xs-block sideMenuClose" >
                        <img src={require("../../images/hamburger-menu.svg").default} alt="" />
                    </button>
                </div>
                <Link to={`/`}  className="d-flex flex-row-reverse justify-start gap-2 align-center w-100">
                    <p className={`font-12  ${isHomePage ? 'active' : ''}`}>خانه</p>
                    <svg className={`menuItemImg d-lg-none d-sm-block d-xs-block  ${isHomePage ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff"><path className="svg-c1" d="M14.73 16.013c1.226 0 2.223.997 2.223 2.223v4.922h-4.446v-4.922c0-1.226.997-2.223 2.223-2.223zm11.575-1.156l-8.641-8.641A4.12 4.12 0 0 0 14.73 5a4.12 4.12 0 0 0-2.934 1.215l-8.642 8.641c-.1.1-.155.232-.155.373s.055.274.155.373a.53.53 0 0 0 .747 0l1.979-1.979v8.153a2.44 2.44 0 0 0 2.436 2.436h12.826a2.44 2.44 0 0 0 2.436-2.436v-8.153l1.979 1.979a.54.54 0 0 0 .747 0c.1-.1.155-.232.155-.373s-.055-.274-.155-.373z" fill="#fff"></path></svg>
                </Link>
                <Link to='/' className="d-flex flex-row-reverse justify-start gap-2 align-center w-100">
                    <p className="font-12">کودکان</p>
                    <img className="menuItemImg d-lg-none d-sm-block d-xs-block" src={require("../../images/baby-menu.svg").default} alt=""/>
                </Link>
                <Link to='/' className="d-flex flex-row-reverse justify-start gap-2 align-center w-100">
                    <p className="font-12">پردیس نماوا</p>
                    <img className="menuItemImg d-lg-none d-sm-block d-xs-block" src={require("../../images/wheel-cinema-menu.svg").default} alt=""/>
                </Link>
                <Link to='/' className="d-flex flex-row-reverse justify-start gap-2 align-center w-100">
                    <p className="font-12">نماوا مگ</p>
                    <img className="menuItemImg d-lg-none d-sm-block d-xs-block" src={require("../../images/bookmark-menu.svg").default} alt=''/>
                </Link>
            </div>
        </Fragment>
    )
}
