import React, { useEffect, useState } from "react";
import ScrollToTop from "../../helpers/ScrollToTop";
import CountrySelect from "./ContactCountrySelect";
import RelativitySelect from "./ContactRelativitySelect";
import "./index.css";

export default function ContactUs() {
    const [showSelect, setShowSelect] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        document.title = 'تماس با ما';
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    const toggleSelect = () => {
        setShowSelect(!showSelect);
    };
    
    
    const [nameInputValue, setNameInputValue] = useState("");
    const [emailInputValue, setEmailInputValue] = useState("");
    const [numberInputValue, setNumberInputValue] = useState("");
    const [subscriptionInputValue, setSubscriptionInputValue] = useState("");
    const [explainInputValue, setExplainInputValue] = useState("");
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedCountryValue, setSelectedCountryValue] = useState(null);

    const handleNameInputChange = (event) => {
        setNameInputValue(event.target.value);
    };

    const handleEmailInputChange = (event) => {
        setEmailInputValue(event.target.value);
    };

    const handleNumberInputChange = (event) => {
        setNumberInputValue(event.target.value);
    };

    const handleSubscriptionInputChange = (event) => {
        setSubscriptionInputValue(event.target.value);
    };

    const handleExplainInputChange = (event) => {
        setExplainInputValue(event.target.value);
    };
    const handleSelectChange = (value) => {
        setSelectedValue(value);
    };
    const handleSelectCountryChange = (value) => {
        setSelectedCountryValue(value);
    };

    return (
      <div
        className={`${
          windowWidth > 768 ? "contact-us-white-bgc" : "white-bgc"
        } contactSection container-padding-2`}
        style={{ paddingTop: "80px" }}
      >
        <ScrollToTop />

        <div className="contactContainer d-flex flex-column justify-center align-center gap-4 position-relative">
          <h1 className="contactTitle text-center font-20 font-weight-normal">
            تماس با پشتیبانی نماوا
          </h1>
          <div className={windowWidth > 768 ? "" : "container"}>
            <div className="contactText col-12  d-flex flex-column justify-evenly align-start gap-2 border-radius-12">
              <h2 className="white-color font-16 font-weight-normal">
                هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.
              </h2>
              <div className="w-100 d-flex justify-btw align-center white-color ">
                <p className="font-14 font-weight-normal">۰۲۱-۹۱۰۰۰۱۱۱</p>
                <p className="font-14 font-weight-normal">support@namava.ir</p>
              </div>
            </div>
          </div>
          <form className="contactForm d-flex flex-column justify-center align-center gap-2 white-bgc">
            <p className="contactFormTitle font-14 ">
              کاربر گرامی، برای پیگیری خرید اشتراک، موارد محتوایی و یا ارسال
              پیشنهادات و انتقادات می توانید از فرم زیر نیز استفاده نمایید.
            </p>
            <label
              className={`labelName font-12 font-weight-normal align-self-start ${
                nameInputValue ? "contactVisible" : "contactLabel"
              }`}
            >
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="border-radius-12 w-100 inputName"
              value={nameInputValue}
              onChange={handleNameInputChange}
              dir="rtl"
            />
            <label
              className={`labelEmail font-12 font-weight-normal align-self-start ${
                emailInputValue ? "contactVisible" : "contactLabel"
              }`}
            >
              ایمیل
            </label>
            <input
              type="email"
              placeholder="ایمیل"
              className={`border-radius-12 w-100 inputEmail ${
                emailInputValue ? "ltr" : ""
              }`}
              value={emailInputValue}
              onChange={handleEmailInputChange}
            />
            <label
              className={`font-12 font-weight-normal align-self-start ${
                selectedCountryValue ? "contactVisible" : "contactLabel"
              }`}
            >
              کشور
            </label>
            <CountrySelect onChange={handleSelectCountryChange} />
            <label
              className={`labelNumber font-12 font-weight-normal align-self-start ${
                numberInputValue ? "contactVisible" : "contactLabel"
              }`}
            >
              شماره تلفن همراه
            </label>
            <input
              type="text"
              placeholder="شماره تلفن همراه"
              className="border-radius-12 w-100"
              value={numberInputValue}
              onChange={handleNumberInputChange}
            />
            <label
              className={`labelSubscription font-12 font-weight-normal align-self-start ${
                subscriptionInputValue ? "contactVisible" : "contactLabel"
              }`}
            >
              کد اشتراک/شناسه کاربری شاتلی
            </label>
            <input
              type="text"
              placeholder="کد اشتراک/شناسه کاربری شاتلی"
              className="border-radius-12 w-100"
              value={subscriptionInputValue}
              onChange={handleSubscriptionInputChange}
            />
            <label
              className={`font-12 font-weight-normal align-self-start ${
                selectedValue ? "contactVisible" : "contactLabel"
              }`}
            >
              دسته بندی مرتبط را انتخاب کنید
            </label>
            <RelativitySelect onChange={handleSelectChange} />
            <label
              className={`labelExplain font-12 font-weight-normal align-self-start ${
                explainInputValue ? "contactVisible" : "contactLabel"
              }`}
            >
              توضیحات
            </label>
            <textarea
              type="text"
              placeholder="توضیحات"
              className="border-radius-12 w-100 font-16 font-weight-normal"
              value={explainInputValue}
              onChange={handleExplainInputChange}
            ></textarea>
            <button
              className="submitBtn w-100 border-radius-12 font-12 font-weight-normal"
              type="submit"
            >
              ارسال نظر
            </button>
          </form>
        </div>
      </div>
    );
}
