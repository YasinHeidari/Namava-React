import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Space, ConfigProvider } from 'antd';
import './index.css';  // Ensure you have this CSS file for custom styling

export default function FooterInfo({isFixed}) {
    const [visibleLinks, setVisibleLinks] = useState([]);
    const [dropdownItems, setDropdownItems] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const footerLinks = [
        { label: "اپلیکیشن‌ها", to: "/" },
        { label: "فرصت‌های شغلی", to: "/" },
        { label: "تبلیغات در نماوا", to: "/" },
        { label: "خرید اشتراک", to: "/" },
        { label: "کارت هدیه", to: "/" },
        { label: "سوالات متداول", to: "/" },
        { label: "تماس با ما", to: "/ContactUs" },
        { label: "درباره نماوا", to: "/AboutUs" },
        { label: "نماوا مگ", to: "/" },
        { label: "قوانین", to: "/" },
        { label: "شرایط مصرف اینترنت", to: "/" },
        { label: "ارسال فیلمنامه", to: "/" },
        { label: "دانلود‌ها", to: "/" },
    ];

    const updateLinks = () => {
        const maxVisibleItems = window.innerWidth < 768 ? 4 : 8;
        setVisibleLinks(footerLinks.slice(0, maxVisibleItems));
        setDropdownItems(footerLinks.slice(maxVisibleItems));
    };

    useEffect(() => {
        updateLinks();
        window.addEventListener('resize', updateLinks);
        return () => window.removeEventListener('resize', updateLinks);
    }, []);

    const handleDropdownVisibleChange = (visible) => {
        setIsDropdownOpen(visible);
    };

    const items = dropdownItems.map((item, index) => ({
        key: index,
        label: <Link to={item.to} className="dropdown-item-link">{item.label}</Link>,
    }));

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgBase: '#222327',  // Setting background color to black
                    colorText: '#ccc',
                },
            }}
        >
                <div className={`footerLinksContainer ${isFixed ? 'FixedFooter' : ''}`}>
                    <div className="container">
                        <ul className="footerLinks d-flex justify-evenly align-center">
                            {visibleLinks.map((item, index) => (
                                <li key={index} className="footerLink text-center font-12">
                                    <Link className="footerLinkChild" to={item.to}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            {dropdownItems.length > 0 && (
                                <li className="footerLink text-center font-12">
                                    <Dropdown
                                        menu={{ items }}
                                        trigger={['click']}
                                        onOpenChange={handleDropdownVisibleChange}
                                    >
                                        <Link onClick={(e) => e.preventDefault()} className="d-flex gap-1 justify-center footerLinkChild">
                                            <Space>
                                                سایر لینک‌ها
                                            </Space>
                                            <img
                                                src={require("../../../images/footerArrowDown.svg").default}
                                                alt="Arrow Down"
                                                className={`footerArrowDown ${isDropdownOpen ? 'rotate' : ''}`}
                                            />
                                        </Link>
                                    </Dropdown>
                               </li>
                            )}
                        </ul>
                    </div>
                </div>
        </ConfigProvider>
    );
}