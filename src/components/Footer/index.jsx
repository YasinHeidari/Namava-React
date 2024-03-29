import React, { useState, useEffect } from 'react';
import { Fragment } from "react";
import { Link } from 'react-router-dom';
import "./footer.css";

export default function Footer(){

        const [isSmallScreen, setIsSmallScreen] = useState(false);
        const [dropdownItems, setDropdownItems] = useState([]);

        useEffect(() => {
            const handleResize = () => {
            const screenWidth = window.innerWidth;
            const itemsPerSection = 3;
            const sectionWidth = 100;

            const sections = Math.floor(screenWidth / sectionWidth);
            const remainingItems = sections * itemsPerSection;

            setIsSmallScreen(screenWidth <= sectionWidth);
            setDropdownItems(remainingItems > 0 ? footerLinks.slice(-remainingItems) : []);
            };

            handleResize();

            window.addEventListener('resize', handleResize);

            return () => {
            window.removeEventListener('resize', handleResize);
            };
        }, []);

        const footerLinks = [
            { label: 'اپلیکیشن‌ها', to: '/' },
            { label: 'فرصت‌های شغلی', to: '/' },
            { label: 'تبلیغات در نماوا', to: '/' },
            { label: 'خرید اشتراک', to: '/' },
            { label: 'کارت هدیه', to: '/' },
            { label: 'سوالات متداول', to: '/' },
            { label: 'تماس با ما', to: '/ContactUs' },
            { label: 'درباره نماوا', to: '/AboutUs' },
            { label: 'نماوا مگ', to: '/' },
            { label: 'قوانین', to: '/' },
            { label: 'شرایط مصرف اینترنت', to: '/' },
            { label: 'ارسال فیلمنامه', to: '/' },
            { label: 'دانلود‌ها', to: '/' },
          ];
    
    return(
        <div className='footer d-flex flex-column gap-3 justify-evenly'>
      {isSmallScreen ? (
        <select>
          {dropdownItems.map((item, index) => (
            <option key={index}>{item.label}</option>
          ))}
        </select>
      ) : null}
      <div className="footerLinksContainer">
        <div className="container">
          <ul className="footerLinks d-flex justify-evenly align-center">
            {footerLinks.map((item, index) => (
              <li key={index} className="footerLink text-center font-12">
                <Link className='footerLinkChild' to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li className="footerLink text-center font-12">
              <button className="footerHiddenLinksOpen">
                <span className="font-12">سایر لینک‌ها</span>
                <img src={require("../../images/footerArrowUp.svg").default} alt="Arrow Up" />
              </button>
              <ul className="footerHiddenLinks d-none">
                <li className="footerLink text-center font-12">
                  <button className="footerHiddenLinksClose">
                    <span className="font-12">سایر لینک‌ها</span>
                    <img src={require('../../images/footerArrowDown.svg').default} alt="Arrow Down" className="footerArrowDown" />
                  </button>
                </li>
                {footerLinks.slice(9).map((item, index) => (
                  <li key={index} className="footerLink text-center font-12">
                    <Link className='white-color footerLinkChild' to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    
        <div className="footerInfo">
            <div className="container-small">
                <div className="d-flex flex-column gap-3">
                    <div className="footerDownload d-flex flex-row flex-xs-column justify-btw align-center border-radius-5 gap-1 gap-xs-2">
                        <div className="footerLogo d-flex justify-start gap-2 align-center col-xl-7 col-lg-9 col-12">
                            <div className="blueLogo border-radius-8 text-center">
                                <img src={require('../../images/footerBlueLogo.svg').default} className="d-inline-block" alt=''/>
                            </div>
                            <p>دانلود اپلیکیشن</p>
                        </div>
                        <div className="footerDownloadLinks d-flex flex-row  justify-evenly gap-xl-2 gap-1 align-center col-xl-5 col-lg-3 col-12">
                            <div className="footerDownloadLink col-xl-4 col-sm-3 col-2 border-radius-6 d-flex justify-evenly gap-1 align-center">
                                <img src={require("../../images/bazaar.svg").default} alt='' />
                                <div className="footerDownloadLinkText d-xl-flex flex-column gap-1 d-none">
                                    <span className="font-8">دریافت از</span>
                                    <p className="font-12">بازار</p>
                                </div>
                            </div>
                            <div className="footerDownloadLink col-xl-4 col-sm-3 col-2 border-radius-6 d-flex justify-evenly gap-1 align-center">
                                <img src={require('../../images/sibApp.svg').default} alt='' />
                                <div className="footerDownloadLinkText d-xl-flex flex-column gap-1 d-none">
                                    <span className="font-8">دریافت از</span>
                                    <p className="font-12">سیب اپ</p>
                                </div>
                            </div>
                            <div className="footerDownloadLink col-xl-4 col-sm-3 col-2 border-radius-6 d-flex justify-evenly gap-1 align-center">
                                <img src={require("../../images/googlePlay.svg").default} alt='' />
                                <div className="footerDownloadLinkText d-xl-flex flex-column gap-1 d-none">
                                    <span className="font-8">دریافت از</span>
                                    <p className="font-12">گوگل پلی</p>
                                </div>
                            </div>
                            <Link to='/' className="footerMoreLink col-xl-3 col-3 active font-14 text-center">بیشتر</Link>
                        </div>
                    </div>
                    <div className="footerContent d-flex flex-row flex-xs-column  justify-btw align-center gap-xs-2">
                        <div className="footerContentText col-12 col-xl-8 col-lg-9 col-md-10 d-flex flex-column gap-1">
                            <p className="font-12 white-color">درباره نماوا</p>
                            <p className="font-12">سرزمین شاتل در سایت نماوا امکان پخش آنلاین فیلم‌ها و سریال‌های محبوبتان را در اختیار شما کاربران گرامی قرار می‌دهد. مشاهده پیش‌نمایش فیلم و سریال‌ها، جستجوی سریع مجموعه انتخابی، دانلود درون‌برنامه‌ای، حساب چند کاربره، تنظیمات کودک، پخش زنده رویدادهای ورزشی و فرهنگی و آرشیوی کامل از پرطرفدارترین فیلم‌ها و سریال‌ها از جمله قابلیت‌های نماوا، به‌روزترین سایت تماشای فیلم و سریال است. نماوا این امکان را برای کاربران خود فراهم کرده است تا در سریع‌ترین زمان ممکن و تنها با چند کلیک، سریال‌ها و فیلم‌های مورد علاقه خود را به صورت آنلاین و آفلاین مشاهده کنند.</p>
                        </div>
                        <div className="footerContentNamads d-flex flex-lg-row-reverse flex-sm-column  flex-xs-row-reverse justify-xs-start align-lg-center align-end col-12 col-xl-3 col-lg-3 col-md-2 gap-2">
                            <Link to="/" className="d-inline-block border-radius-5 text-center">
                                <img className="w-100 h-auto" src="https://www.namava.ir/images/enamad.png" />
                            </Link>
                            <Link to="/" className="d-inline-block border-radius-5 text-center">
                                <img className="w-100 h-auto"  src="https://www.namava.ir/images/enamad.png" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-small">
            <div className="footerDescription d-flex flex-lg-row flex-column-reverse justify-lg-btw justify-center gap-1">
                <div className="footerDescriptionText col-lg-9 col-12">
                    <p className="font-10">خدمات ارائه شده در نماوا، دارای مجوزهای لازم از مراجع مربوطه است و هر گونه بهره‌برداری و سوءاستفاده از محتوای نماوا، پیگرد قانونی دارد.</p>
                </div>
                <div className="footerDescriptionMedias col-lg-3 col-12 d-flex gap-3 justify-lg-end justify-center">
                    <Link href="https://twitter.com/Namava_ir" target="_blank" className="footerDescriptionMedia">
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="i-socialIcon-0-1-91"><path d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z" fill="#CACACA"></path>
                        </svg>
                    </Link>
                    <Link to="https://instagram.com/namava_ir" target="_blank"  className="footerDescriptionMedia">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="i-socialIcon-0-1-91"><path fillRule="evenodd" clipRule="evenodd" d="M19.019 5.36425C19.019 6.1265 18.4015 6.74413 17.6394 6.74413C16.8773 6.74413 16.2598 6.1265 16.2598 5.36425C16.2598 4.60201 16.8773 3.98438 17.6394 3.98438C18.4005 3.98438 19.018 4.601 19.019 5.36325V5.36425ZM11.4997 15.3376C9.38206 15.3376 7.66504 13.6213 7.66504 11.5033C7.66504 9.38526 9.38206 7.66895 11.4997 7.66895C13.6164 7.66895 15.3334 9.38526 15.3334 11.5033C15.3334 13.6213 13.6164 15.3376 11.4997 15.3376V15.3376ZM11.5 5.59484C8.23867 5.59484 5.59487 8.24011 5.59487 11.502C5.59487 14.7639 8.23867 17.4082 11.5 17.4082C14.7613 17.4082 17.4051 14.7639 17.4051 11.502C17.4051 8.24011 14.7603 5.59685 11.5 5.59685V5.59484ZM11.5 0C8.37523 0 7.98564 0.0130556 6.75862 0.0692953C5.80472 0.0883766 4.85986 0.269147 3.96721 0.603572C3.19907 0.892804 2.50423 1.34573 1.92888 1.93123C1.34349 2.50568 0.89064 3.20164 0.601458 3.96891C0.267092 4.86272 0.087357 5.80574 0.0682791 6.76081C0.0120492 7.98804 0 8.3797 0 11.503C0 14.6263 0.0120492 15.018 0.0692832 16.2452C0.087357 17.1993 0.268096 18.1433 0.601458 19.0371C0.89064 19.8044 1.34349 20.4993 1.92788 21.0748C2.50423 21.6583 3.19907 22.1092 3.96721 22.3964C4.85986 22.7309 5.80472 22.9116 6.75862 22.9307C7.98564 22.9869 8.37623 23 11.5 23C14.6228 23 15.0144 22.9869 16.2404 22.9307C17.1953 22.9116 18.1391 22.7309 19.0328 22.3964C20.5781 21.7989 21.7991 20.5767 22.3955 19.0321C22.7309 18.1383 22.9116 17.1943 22.9307 16.2402C22.9859 15.013 23 14.6213 23 11.498C23 8.37468 22.9859 7.98301 22.9307 6.75579C22.9116 5.80172 22.7309 4.8577 22.3955 3.96289C22.1074 3.19662 21.6545 2.50065 21.0701 1.92621C20.4948 1.34272 19.7989 0.890796 19.0328 0.603572C18.1391 0.269147 17.1953 0.0883766 16.2404 0.0692953C15.0154 0.0140599 14.6238 0.00100428 11.5 0.00100428V0ZM11.4998 2.07425C14.5693 2.07425 14.9338 2.0863 16.1468 2.14153C16.8757 2.15057 17.5987 2.28414 18.2825 2.53722C18.7825 2.721 19.2334 3.01526 19.6049 3.39789C19.9865 3.76947 20.2807 4.2214 20.4634 4.72153C20.7164 5.40544 20.851 6.12852 20.86 6.85763C20.9152 8.0708 20.9263 8.43435 20.9263 11.5054C20.9263 14.5765 20.9152 14.9401 20.86 16.1532C20.851 16.8833 20.7164 17.6044 20.4634 18.2893C20.0778 19.2926 19.2846 20.085 18.2815 20.4726C17.5967 20.7257 16.8747 20.8603 16.1458 20.8683C14.9328 20.9236 14.5683 20.9356 11.4988 20.9356C8.42821 20.9356 8.06372 20.9236 6.85177 20.8683C6.12279 20.8583 5.40084 20.7237 4.71906 20.4696C4.21901 20.2848 3.76817 19.9906 3.39565 19.609C3.01509 19.2374 2.72089 18.7855 2.53613 18.2863C2.2821 17.6024 2.14855 16.8793 2.13951 16.1502C2.08529 14.9371 2.07324 14.5735 2.07324 11.5024C2.07324 8.43133 2.08529 8.06778 2.13951 6.85462C2.14855 6.12651 2.2821 5.40444 2.53513 4.72153C2.71988 4.2214 3.01409 3.76947 3.39464 3.39889C3.76717 3.01626 4.21901 2.72201 4.71906 2.53722C5.40185 2.28414 6.1238 2.14957 6.85278 2.14053C8.06573 2.08529 8.42922 2.07324 11.4998 2.07324V2.07425Z" fill="#CACACA"></path></svg>
                    </Link>
                    <Link to="https://instagram.com/namava_ir" target="_blank"  className="footerDescriptionMedia">
                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="i-socialIcon-0-1-91"><path fillRule="evenodd" clipRule="evenodd" d="M9.78586 13.757C16.9222 7.26962 20.4949 4.00586 20.5048 3.96569C20.5128 3.93757 20.5178 3.90644 20.5188 3.87632C20.5188 3.72769 20.4121 3.65137 20.1928 3.65137C20.143 3.65137 15.9732 6.32263 7.68652 11.6641L9.43298 17.4395L9.78586 13.757ZM19.1398 20.7665L13.3372 16.4845L10.0846 19.5584C9.92506 19.699 9.72071 19.7784 9.50838 19.7834C9.11264 19.8175 8.74481 19.5795 8.61123 19.2039L6.31153 12.1964L0.598665 10.4089C0.255754 10.3175 0.013523 10.0122 0.000564177 9.6557C-0.0133915 9.27309 0.232827 8.92964 0.598665 8.82219C16.2101 2.94039 24.0672 0 24.1698 0C24.3822 0.0110466 24.5815 0.101428 24.7321 0.253067C24.9205 0.415752 25.0181 0.659781 24.9972 0.907827L21.0198 20.0134C20.956 20.6079 20.4357 21.0437 19.8446 20.9965C19.5914 20.9975 19.3452 20.9172 19.1398 20.7665Z" fill="#CACACA"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    
        </div>
    )
}