import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, ConfigProvider } from 'antd';

export default function SmallFooterInfo({ isFixed }) {
    const [clicked, setClicked] = useState(false);

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

    const menu = (
        <Menu>
            {footerLinks.map((link, index) => (
                <Menu.Item key={index}>
                    <Link to={link.to}>{link.label}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );

    const handleClick = () => {
        setClicked(!clicked); // Toggle clicked state
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgBase: '#222327', // Setting background color to black
                    colorText: '#ccc',
                },
            }}
        >
            <Dropdown overlay={menu} placement="top" className="col-2 h-100">
                <Link
                    className="d-flex flex-column gap-1 justify-center align-center"
                    onClick={handleClick}
                >
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.5" cy="12.5" r="1.5" transform="rotate(90 16.5 12.5)" fill={clicked ? '#fff' : '#AAAAAA'}></circle><circle cx="12" cy="12.5" r="1.5" transform="rotate(90 12 12.5)" fill={clicked ? '#fff' : '#AAAAAA'}></circle><circle cx="7.5" cy="12.5" r="1.5" transform="rotate(90 7.5 12.5)" fill={clicked ? '#fff' : '#AAAAAA'}></circle></svg>
                        <p className="lighter-white-font font-10 font-weight-normal" style={{ color: clicked ? '#fff' : '#aaa' }}>بیشتر</p>
                </Link>
            </Dropdown>
        </ConfigProvider>
    );
}
                                            