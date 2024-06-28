import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import PreloadStyles from "../../Loading/PreLoader";
import FooterInfo from "./FooterInfo";

export default function BigFooter() {
    const location = useLocation();
    const isSearchMoviePage = location.pathname === "/SearchMovie";
    const [isFixed, setIsFixed] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0 
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                setIsFixed(!entry.isIntersecting);
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const footerElement = footerRef.current;

        if (footerElement) {
            observer.observe(footerElement);
        }

        return () => {
            if (footerElement) {
                observer.unobserve(footerElement);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <div className={`footer d-lg-flex d-sm-none d-xs-none flex-column gap-3 justify-evenly ${isSearchMoviePage ? 'FixedFooter' : ''}`}>
            <PreloadStyles href='./index.css' as='style'/>
            <FooterInfo isFixed={isFixed}/>
            {!isSearchMoviePage && (
                <div>
                    <div className="footerInfo" ref={footerRef}>
                        <div className="container-xxl container">
                            <div className="d-flex flex-column gap-3">
                                <div className="footerDownload d-flex flex-row flex-xs-column justify-btw align-center border-radius-5 gap-1 gap-xs-2">
                                    <div className="footerLogo d-flex justify-start gap-2 align-center col-xl-7 col-lg-9 col-12">
                                        <div className="blueLogo border-radius-8 text-center">
                                            <img
                                                src={
                                                    require("../../../images/footerBlueLogo.svg")
                                                        .default
                                                }
                                                className="d-inline-block"
                                                alt=""
                                            />
                                        </div>
                                        <p>دانلود اپلیکیشن</p>
                                    </div>
                                    <div className="footerDownloadLinks d-flex flex-row  justify-evenly gap-xl-2 gap-1 align-center col-xl-5 col-lg-3 col-12">
                                        <div className="footerDownloadLink col-xl-4 col-sm-3 col-2 border-radius-6 d-flex justify-evenly gap-1 align-center">
                                            <img
                                                src={
                                                    require("../../../images/bazaar.svg")
                                                        .default
                                                }
                                                alt=""
                                            />
                                            <div className="footerDownloadLinkText d-xl-flex flex-column gap-1 d-none">
                                                <span className="font-8">
                                                    دریافت از
                                                </span>
                                                <p className="font-12">بازار</p>
                                            </div>
                                        </div>
                                        <div className="footerDownloadLink col-xl-4 col-sm-3 col-2 border-radius-6 d-flex justify-evenly gap-1 align-center">
                                            <img
                                                src={
                                                    require("../../../images/sibApp.svg")
                                                        .default
                                                }
                                                alt=""
                                            />
                                            <div className="footerDownloadLinkText d-xl-flex flex-column gap-1 d-none">
                                                <span className="font-8">
                                                    دریافت از
                                                </span>
                                                <p className="font-12">سیب اپ</p>
                                            </div>
                                        </div>
                                        <div className="footerDownloadLink col-xl-4 col-sm-3 col-2 border-radius-6 d-flex justify-evenly gap-1 align-center">
                                            <img
                                                src={
                                                    require("../../../images/googlePlay.svg")
                                                        .default
                                                }
                                                alt=""
                                            />
                                            <div className="footerDownloadLinkText d-xl-flex flex-column gap-1 d-none">
                                                <span className="font-8">
                                                    دریافت از
                                                </span>
                                                <p className="font-12">گوگل پلی</p>
                                            </div>
                                        </div>
                                        <Link
                                            to="/"
                                            className="footerMoreLink col-xl-3 col-3 active font-14 text-center"
                                        >
                                            بیشتر
                                        </Link>
                                    </div>
                                </div>
                                <div className="footerContent d-flex flex-row flex-xs-column  justify-btw align-center gap-xs-2">
                                    <div className="footerContentText col-12 col-xl-8 col-lg-9 col-md-10 d-flex flex-column gap-1">
                                        <p className="font-12 white-color">
                                            درباره نماوا
                                        </p>
                                        <p className="font-12">
                                            سرزمین شاتل در سایت نماوا امکان پخش آنلاین
                                            فیلم‌ها و سریال‌های محبوبتان را در اختیار
                                            شما کاربران گرامی قرار می‌دهد. مشاهده
                                            پیش‌نمایش فیلم و سریال‌ها، جستجوی سریع
                                            مجموعه انتخابی، دانلود درون‌برنامه‌ای، حساب
                                            چند کاربره، تنظیمات کودک، پخش زنده رویدادهای
                                            ورزشی و فرهنگی و آرشیوی کامل از پرطرفدارترین
                                            فیلم‌ها و سریال‌ها از جمله قابلیت‌های نماوا،
                                            به‌روزترین سایت تماشای فیلم و سریال است.
                                            نماوا این امکان را برای کاربران خود فراهم
                                            کرده است تا در سریع‌ترین زمان ممکن و تنها با
                                            چند کلیک، سریال‌ها و فیلم‌های مورد علاقه خود
                                            را به صورت آنلاین و آفلاین مشاهده کنند.
                                        </p>
                                    </div>
                                    <div className="footerContentNamads d-flex flex-lg-row-reverse flex-sm-column  flex-xs-row-reverse justify-xs-start align-lg-center align-end col-12 col-xl-3 col-lg-3 col-md-2 gap-2">
                                        <Link
                                            to="/"
                                            className="d-inline-block border-radius-5 text-center"
                                        >
                                            <img
                                                className="w-100 h-auto"
                                                src="https://www.namava.ir/images/enamad.png" alt=""
                                            />
                                        </Link>
                                        <Link
                                            to="/"
                                            className="d-inline-block border-radius-5 text-center"
                                        >
                                            <img
                                                className="w-100 h-auto"
                                                src="https://www.namava.ir/images/enamad.png" alt=""
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-xxl container" >
                        <div className="footerDescription d-flex flex-lg-row flex-column-reverse justify-lg-btw justify-center gap-1">
                            <div className="footerDescriptionText col-lg-9 col-12">
                                <p className="font-10">
                                    خدمات ارائه شده در نماوا، دارای مجوزهای لازم از
                                    مراجع مربوطه است و هر گونه بهره‌برداری و سوءاستفاده
                                    از محتوای نماوا، پیگرد قانونی دارد.
                                </p>
                            </div>
                            <div className="footerDescriptionMedias col-lg-3 col-12 d-flex gap-3 justify-lg-end justify-center">
                                <Link
                                    href="https://twitter.com/Namava_ir"
                                    target="_blank"
                                    className="footerDescriptionMedia"
                                >
                                    <svg
                                        width="24"
                                        height="20"
                                        viewBox="0 0 24 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.222 2.708 12.083C3.256 14.068 5.066 15.482 7.29 15.52C5.221 17.139 2.589 17.682 0 17.261C2.243 18.655 4.905 19.248 7.548 18.995C16.69 18.206 21.548 10.924 21.086 4.51105C22.005 3.83705 22.85 3.03405 23.588 2.12205L24 2.55705Z"
                                            fill="#727A8B"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/namava.ir/"
                                    target="_blank"
                                    className="footerDescriptionMedia"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 6.00023C0 2.68289 2.68288 0 6.00023 0H15.9998C19.3171 0 22 2.68288 22 6.00023V16.0001C22 19.3171 19.3171 22 15.9998 22H6.00023C2.68288 22 0 19.3171 0 16.0001V6.00023ZM6.00023 1.83341C3.57397 1.83341 1.83341 3.57397 1.83341 6.00023V16.0001C1.83341 18.426 3.57397 20.1666 6.00023 20.1666H15.9998C18.426 20.1666 20.1666 18.426 20.1666 16.0001V6.00023C20.1666 3.57397 18.426 1.83341 15.9998 1.83341H6.00023ZM11 6.4167C8.5157 6.4167 6.4167 8.5157 6.4167 11C6.4167 13.4843 8.5157 15.5833 11 15.5833C13.4843 15.5833 15.5833 13.4843 15.5833 11C15.5833 8.5157 13.4843 6.4167 11 6.4167ZM4.58329 11C4.58329 7.95254 7.95254 4.58329 11 4.58329C14.0475 4.58329 17.4167 7.95254 17.4167 11C17.4167 14.0475 14.0475 17.4167 11 17.4167C7.95254 17.4167 4.58329 14.0475 4.58329 11ZM16.5 4.58329C15.9661 4.58329 15.5333 5.01614 15.5333 5.54998C15.5333 6.08387 15.9661 6.51672 16.5 6.51672C17.0339 6.51672 17.4667 6.08387 17.4667 5.54998C17.4667 5.01614 17.0339 4.58329 16.5 4.58329Z"
                                            fill="#727A8B"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/namava"
                                    target="_blank"
                                    className="footerDescriptionMedia"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.354862 2.25683C0.353798 2.09235 0.384243 1.92869 0.444847 1.77483C0.505451 1.62098 0.594719 1.47992 0.708154 1.35894C0.821589 1.23797 0.957156 1.13877 1.10733 1.06637C1.2575 0.993968 1.41967 0.949829 1.58535 0.936461C1.75103 0.923093 1.91722 0.940766 2.07548 0.988428C2.23373 1.03609 2.38125 1.11281 2.50967 1.21453C2.63808 1.31625 2.74476 1.44064 2.82341 1.58047C2.90205 1.7203 2.95115 1.87274 2.96768 2.02928C2.98421 2.18582 2.96765 2.34382 2.91885 2.4943C2.87005 2.64479 2.7902 2.78356 2.68414 2.9022C2.57807 3.02085 2.44848 3.11669 2.30452 3.18432C2.16055 3.25194 2.00537 3.28947 1.84875 3.29466C1.61779 3.30818 1.38923 3.24908 1.18834 3.12453C0.987445 2.99998 0.823208 2.81536 0.715885 2.59502C0.608562 2.37469 0.563555 2.12822 0.587866 1.88213L0.354862 2.25683ZM1.34803 5.16652H0V21.9941H1.34803V5.16652ZM21.992 14.3334C21.992 11.5716 21.3381 9.05741 17.5161 9.05741C15.8314 9.05741 14.718 9.95755 14.2352 10.8887H14.1961V9.41094H10.781V21.9941H14.3754V14.9447C14.3754 13.4427 14.6675 11.9784 16.5282 11.9784C18.369 11.9784 18.3987 13.6594 18.3987 15.0438V21.9941H21.992V14.3334ZM4.71572 5.16261C5.4661 5.16268 6.18871 4.88817 6.74088 4.38414C7.29306 3.88012 7.63464 3.17944 7.69459 2.42921C7.75454 1.67898 7.52708 0.935837 7.05867 0.380219C6.59025 -0.175398 5.92197 -0.505043 5.22239 -0.505043C4.52282 -0.505043 3.85453 -0.175398 3.38612 0.380219C2.9177 0.935837 2.69025 1.67898 2.7502 2.42921C2.81015 3.17944 3.15173 3.88012 3.70391 4.38414C4.25608 4.88817 4.97869 5.16268 5.72907 5.16261H4.71572Z"
                                            fill="#727A8B"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
