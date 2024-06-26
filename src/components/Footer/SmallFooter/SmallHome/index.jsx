import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SmallFooterHome() {
    const location = useLocation();

    // Determine if current route is '/'
    const isHomePage = location.pathname === '/';

    return (
        <Link to="/" className="d-flex flex-column gap-1 justify-center align-center col-2 h-100">
            <svg width="24" height="25" viewBox="0 0 24 25" fill={isHomePage ? '#fff' : '#AAAAAA'} xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.7844 13.31C12.765 13.31 13.5627 14.1077 13.5627 15.0883V19.0261H10.0061V15.0883C10.0061 14.1077 10.8038 13.31 11.7844 13.31ZM21.0445 12.3854L14.1313 5.47236C13.5044 4.84531 12.6708 4.5 11.7844 4.5C10.8978 4.5 10.0642 4.84531 9.43758 5.47236L2.52415 12.3854C2.44432 12.4652 2.40039 12.5712 2.40039 12.684C2.40039 12.797 2.44432 12.903 2.52415 12.9826C2.68889 13.1472 2.9569 13.1472 3.12143 12.9826L4.70479 11.3995V17.9222C4.70479 18.9968 5.57916 19.8709 6.65375 19.8709H16.9149C17.9897 19.8709 18.8641 18.9968 18.8641 17.9222V11.3995L20.4472 12.9826C20.6067 13.1423 20.8848 13.1423 21.0445 12.9826C21.1243 12.903 21.1683 12.797 21.1683 12.684C21.1683 12.5712 21.1243 12.4652 21.0445 12.3854Z" fill={isHomePage ? '#fff' : '#AAAAAA'} />
            </svg>
            <p className="font-10" style={{ color: isHomePage ? '#fff' : '#AAAAAA' }}>خانه</p>
        </Link>
    );
}
