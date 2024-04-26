import { Fragment ,useEffect , useState } from "react";
import { Link ,useLocation } from "react-router-dom";
import "./header.css";

export default function Header({isContactPage}){
    const location = useLocation();
    const [scrolling, setScrolling] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerOpacity, setHeaderOpacity] = useState(1);

    const isHomePage = location.pathname === "/";
    const headerClass = isContactPage ? 'header black-bgc' : 'header';

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentPosition = window.scrollY;
        setScrolling(currentPosition > scrollPosition && currentPosition > 0);
        setScrollPosition(currentPosition);
        // Set header opacity based on scroll direction
        if (currentPosition > scrollPosition && currentPosition > 0) {
            // Scrolling down
            setHeaderOpacity(0);
        } else {
            // Scrolling up or at top
            setHeaderOpacity(1);
        }
    };

    return(
        <Fragment>
             <div className={`${headerClass} position-absolute top-0 right-0 left-0 z-3`} style={{ opacity: headerOpacity }}>
                <div className="container">
                    <div className="d-flex justify-btw align-center">
                        <div className="d-flex flex-lg-row flex-xs-row-reverse flex-sm-row-reverse justify-center align-center gap-2 gap-xs-1 logo">
                                <Link to={`/`}>
                                    <img src={require("../../images/namava-logo-white.svg").default} alt="" />
                                </Link>
                                <button className="hamburgerMenu d-xs-block sideMenuOpen" >{/*btn*/}
                                    <img src={require("../../images/hamburger-menu.svg").default} alt="" />
                                </button>
                            <div className="menu d-lg-flex justify-evenly align-center gap-2 d-xs-none d-sm-none">
                                <Link to={"/"}>{/*each link has to be same and the direction should be at the shit heade */}
                                    <p className={`font-12 font-weight-normal ${isHomePage ? 'active' : ''}`}>خانه</p>
                                </Link>
                                <Link to={`/MovieList`}>
                                    <p className="font-12 font-weight-normal">فیلم ها</p>
                                </Link>
                                <Link to={`/`}>
                                    <p className="font-12 font-weight-normal">سریال ها</p>
                                </Link>
                                <Link to={`/`}>
                                    <p className="font-12 font-weight-normal">دسته بندی </p>
                                </Link>
                                <Link to={`/`}>
                                    <p className="font-12 font-weight-normal">تازه ها</p>
                                </Link>
                                <Link to={`/`}>
                                    <p className="font-12 font-weight-normal">کودکان</p>
                                </Link>
                                <Link to={`/`}>
                                    <p className="font-12 font-weight-normal">پردیس نماوا</p>
                                </Link>
                                <Link to={`/`}>
                                    <p className="font-12 font-weight-normal">نماوا مگ</p>
                                </Link>
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
                            <Link className="d-md-inline-block d-xs-none signIn border-radius-5 font-md-12" to='/'>ورود/ثبت نام</Link>
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
                        <button className="hamburgerMenu d-xs-block sideMenuClose" >{/*btn*/}
                            <img src={require("../../images/hamburger-menu.svg").default} alt="" />
                        </button>
                    </div>
                    <Link to={`/`}  className="d-flex flex-row-reverse justify-start gap-2 align-center w-100">
                        <p className="font-12 active">خانه</p>
                        <svg className="menuItemImg d-lg-none d-sm-block d-xs-block active" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff"><path className="svg-c1" d="M14.73 16.013c1.226 0 2.223.997 2.223 2.223v4.922h-4.446v-4.922c0-1.226.997-2.223 2.223-2.223zm11.575-1.156l-8.641-8.641A4.12 4.12 0 0 0 14.73 5a4.12 4.12 0 0 0-2.934 1.215l-8.642 8.641c-.1.1-.155.232-.155.373s.055.274.155.373a.53.53 0 0 0 .747 0l1.979-1.979v8.153a2.44 2.44 0 0 0 2.436 2.436h12.826a2.44 2.44 0 0 0 2.436-2.436v-8.153l1.979 1.979a.54.54 0 0 0 .747 0c.1-.1.155-.232.155-.373s-.055-.274-.155-.373z" fill="#fff"></path></svg>
                    </Link>
                    <Link to='/' className="d-flex flex-row-reverse justify-start gap-2 align-center w-100">
                        <p className="font-12">فیلم ها</p>
                        <svg className="menuItemImg d-lg-none d-sm-block d-xs-block" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff"><g clipPath="url(#A)" fill="#fff"><path className="svg-c1" d="M16.032 11.86a3.43 3.43 0 0 0 0-6.86 3.43 3.43 0 0 0 0 6.86zm-7.402 0a3.43 3.43 0 0 0 0-6.86 3.43 3.43 0 0 0 0 6.86z"></path><g fillRule="evenodd"><path d="M18.3 24.45H6c-1.66 0-3-1.34-3-3v-5.47c0-1.66 1.34-3 3-3h12.3c1.66 0 3 1.34 3 3v5.47a3.01 3.01 0 0 1-3 3z"></path><path d="M19.678 19.58l4.97 2.87c.67.38 1.5-.1 1.5-.87v-5.74c0-.77-.83-1.25-1.5-.87l-4.97 2.87c-.67.39-.67 1.36 0 1.74z"></path></g></g><defs><clipPath id="A"><path fill="#fff" transform="translate(3 5)" d="M0 0h23.15v19.45H0z"></path></clipPath></defs></svg>
                    </Link>
                    <Link to='/' className="d-flex flex-row-reverse justify-start gap-2 align-center w-100">
                        <p className="font-12">سریال ها</p>
                        <svg className="menuItemImg d-lg-none d-sm-block d-xs-block" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff"><g><path  fillRule="evenodd" d="M24.19 9H5c-1.66 0-3 1.35-3 3v9.79c0 1.65 1.34 3 3 3h19.19c1.66 0 3-1.35 3-3V12c0-1.65-1.34-3-3-3zm-7.08 8.67l-2.87 1.66c-.67.38-1.5-.1-1.5-.87v-3.31c0-.77.83-1.25 1.5-.87l2.87 1.66a1 1 0 0 1 0 1.73z" fill="#fff"></path></g><path d="M6 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1H6zm2-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H8z" fill="#fff"></path><defs><clipPath id="A"><path fill="#fff" transform="translate(2 9)" d="M0 0h25.19v18.07H0z"></path></clipPath></defs></svg>
                    </Link>
                    <Link to='/' className="d-flex flex-row-reverse justify-start gap-2 align-center w-100">
                        <p className="font-12">دسته بندی </p>
                        <svg className="menuItemImg d-lg-none d-sm-block d-xs-block" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff"><path  d="M17.931 6h4.432a1.96 1.96 0 0 1 1.957 1.957v4.432a1.96 1.96 0 0 1-1.957 1.957h-4.432a1.96 1.96 0 0 1-1.957-1.957V7.957A1.96 1.96 0 0 1 17.931 6zM7.957 6h4.432a1.96 1.96 0 0 1 1.957 1.957v4.432a1.96 1.96 0 0 1-1.957 1.957H7.957A1.96 1.96 0 0 1 6 12.389V7.957A1.96 1.96 0 0 1 7.957 6zm9.974 9.985h4.432a1.96 1.96 0 0 1 1.957 1.957v4.432a1.96 1.96 0 0 1-1.957 1.957h-4.432a1.96 1.96 0 0 1-1.957-1.957v-4.432a1.96 1.96 0 0 1 1.957-1.957zm-9.974 0h4.432a1.96 1.96 0 0 1 1.957 1.957v4.432a1.96 1.96 0 0 1-1.957 1.957H7.957A1.96 1.96 0 0 1 6 22.374v-4.432a1.96 1.96 0 0 1 1.957-1.957z"></path></svg>
                    </Link>
                    <Link to='/' className="d-flex flex-row-reverse justify-start gap-2 align-center w-100">
                        <p className="font-12">تازه ها</p>
                        <img className="menuItemImg d-lg-none d-sm-block d-xs-block" src={require("../../images/popcorn.svg").default} alt=""/>
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