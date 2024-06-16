import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SmallFooterSearch() {
    const location = useLocation();

    // Determine if current route is '/SearchMovie'
    const isSearchPage = location.pathname === '/SearchMovie';

    return (
        <Link to={`/SearchMovie`} className="d-flex flex-column gap-1 justify-center align-center col-2 h-100">
            <svg width="24" height="25" viewBox="0 0 24 25" fill={isSearchPage ? '#fff' : '#AAAAAA'} xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.2674 16.436C14.553 19.1499 10.1365 19.1499 7.42259 16.436C4.70867 13.7221 4.70867 9.30536 7.42259 6.59118C8.7352 5.2783 10.4834 4.55547 12.3449 4.55547C14.2063 4.55547 15.9545 5.2783 17.2674 6.59118C19.9813 9.30536 19.9813 13.7221 17.2674 16.436ZM18.014 5.84458C16.5023 4.33266 14.4891 3.5 12.3449 3.5C10.2009 3.5 8.18767 4.33266 6.676 5.84458C3.68092 8.83966 3.53203 13.6262 6.31485 16.7972L3.15424 19.9575C2.94859 20.1632 2.94859 20.4984 3.15424 20.7041C3.25403 20.8039 3.38656 20.8588 3.52754 20.8588C3.66851 20.8588 3.80104 20.8039 3.90083 20.7041L7.06144 17.5437C8.52057 18.8236 10.3918 19.5272 12.3449 19.5272C14.4891 19.5272 16.5023 18.6945 18.014 17.1826C21.14 14.0566 21.14 8.97061 18.014 5.84458Z" fill={isSearchPage ? '#fff' : '#AAAAAA'} />
            </svg>
            <p className="font-10" style={{ color: isSearchPage ? '#fff' : '#AAAAAA' }}>جستجو</p>
        </Link>
    );
}
