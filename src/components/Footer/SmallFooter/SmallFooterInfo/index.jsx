import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu ,Dropdown, ConfigProvider } from 'antd';

export default function SmallFooterInfo({isFixed}) {
    
    

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

    const menu = (<Menu>
        {footerLinks.map((link, index) => (
          <Menu.Item key={index}>
            <Link to={link.to}>{link.label}</Link>
          </Menu.Item>
        ))}
      </Menu>);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgBase: '#222327',  // Setting background color to black
                    colorText: '#ccc',
                },
            }}
        >
                    
                    <Dropdown overlay={menu} placement="top" className="col-2 h-100">
                        <Link className="d-flex flex-column gap-1 justify-center align-center" onClick={(e) => e.preventDefault()}>
                            <img
                                src={require("../../../../images/ThreeDotsMoreFooter.svg").default}
                                alt="Dots"
                            />
                            <p className="lighter-white-font font-10 font-weight-normal">بیشتر</p>
                        </Link>
                    </Dropdown>

                    
                
        </ConfigProvider>
    );
}
                                            