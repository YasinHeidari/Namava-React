import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import PreloadStyles from "../../Loading/PreLoader";
import FooterInfo from "./FooterInfo";

export default function BigFooter() {
    const location = useLocation();
    const isSearchMoviePage = location.pathname === "/SearchMovie";
    const [isFixed, setIsFixed] = useState(false);
    const footerRef = useRef(null);

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            setIsFixed(!entry.isIntersecting);
        });
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0 
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
                                            d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10205C0.911 9.38805 2.541 11.576 5.034 12.076C4.331 12.268 3.558 12.299 2.809 12.149C3.442 14.259 5.357 15.788 7.556 15.833C5.606 17.312 3.167 18.092 0.725 17.816C2.94 19.321 5.698 20.0001 8.548 19.755C16.69 19.104 21.299 12.036 20.994 5.45205C21.942 4.76105 22.797 3.91105 23.537 2.91905L24 2.55705Z"
                                            fill="white"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://www.instagram.com/namava.official"
                                    target="_blank"
                                    className="footerDescriptionMedia"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.5 0H16.5C21.038 0 24 2.962 24 7.5V16.5C24 21.038 21.038 24 16.5 24H7.5C2.962 24 0 21.038 0 16.5V7.5C0 2.962 2.962 0 7.5 0ZM16.5 2H7.5C4.468 2 2 4.468 2 7.5V16.5C2 19.532 4.468 22 7.5 22H16.5C19.532 22 22 19.532 22 16.5V7.5C22 4.468 19.532 2 16.5 2ZM12 5.5C15.038 5.5 17.5 7.962 17.5 11C17.5 14.038 15.038 16.5 12 16.5C8.962 16.5 6.5 14.038 6.5 11C6.5 7.962 8.962 5.5 12 5.5ZM12 7.5C10.07 7.5 8.5 9.07 8.5 11C8.5 12.93 10.07 14.5 12 14.5C13.93 14.5 15.5 12.93 15.5 11C15.5 9.07 13.93 7.5 12 7.5ZM18.875 3.25C19.4963 3.25 20 3.75368 20 4.375C20 4.99632 19.4963 5.5 18.875 5.5C18.2537 5.5 17.75 4.99632 17.75 4.375C17.75 3.75368 18.2537 3.25 18.875 3.25Z"
                                            fill="white"
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