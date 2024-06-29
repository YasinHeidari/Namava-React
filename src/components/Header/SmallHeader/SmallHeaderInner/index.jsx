import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

export default function SmallHeaderInner() {
    const location = useLocation();
    const navigate = useNavigate();
    const isMovieOrShowPage = /^\/(movie\/\d+|show\/\d+|SearchMovie)$/.test(location.pathname);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isTransitioning, setTransitioning] = useState(false);
    const [isHeaderVisible, setHeaderVisible] = useState(true);
    const headerRef = useRef(null);

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

    // Render null early if it's not a movie or show page
    if (!isMovieOrShowPage) {
        return null;
    }

    return (
        <div className="d-lg-none d-block">
            <div
                className={classNames("header col-12 z-3 top-0 right-0", { 'sticky': isHeaderVisible }, { 'transitioning': isTransitioning })}
                style={{
                    backgroundImage: 'linearGradient(to bottom, rgba(18, 18, 18, 1), rgba(18, 18, 18, 0))',
                    backgroundColor: 'rgba(18, 18, 18, 0)',
                    boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
                    height: isHeaderVisible ? '80px' : '0',
                    position: 'fixed',
                    top: isHeaderVisible ? '0' : 'auto'
                }}
                ref={headerRef}
            >
                <div className="container">
                    <div className="d-flex justify-btw align-center">
                        <div onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="10 0 20 40" fill="#fff"><g style={{transform: 'rotate(180deg)', transformOrigin: '20px center'}}><path d="M14.77 18.793c0-.493.196-.967.545-1.315l6.2-6.2a1.86 1.86 0 0 1 2.626 2.633l-4.88 4.882 4.88 4.88a1.86 1.86 0 0 1-2.63 2.63l-6.2-6.2c-.347-.348-.54-.82-.54-1.31z"></path></g></svg>
                        </div>
                        <div className="d-flex justify-center align-center gap-2 gap-xs-1">
                            <Link className="d-inline-block menuSubscription font-12 font-weight-normal" to='/'>خرید اشتراک</Link>
                            <Link className="signInImg" to='/'>
                                <img className="w-100" src={require("../../../../images/sign-in-mobile.svg").default} alt="" />
                            </Link>
                            <Link className="d-md-inline-block d-xs-none signIn border-radius-5 font-md-12 font-weight-normal" to='/'>ورود/ثبت نام</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark-cover position-absolute z-1 top-0 right-0 d-none"></div>
        </div>
    );
}

