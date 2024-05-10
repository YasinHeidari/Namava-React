import React, { useState } from "react";
import CountryPopup from "./ContactCountryPopUp";
import "./index.css";

export default function ContactUs() {
    const [showSelect, setShowSelect] = useState(false);

    const toggleSelect = () => {
        setShowSelect(!showSelect);
    };
    const [nameInputValue, setNameInputValue] = useState("");
    const [emailInputValue, setEmailInputValue] = useState("");
    const [numberInputValue, setNumberInputValue] = useState("");
    const [subscriptionInputValue, setSubscriptionInputValue] = useState("");
    const [explainInputValue, setExplainInputValue] = useState("");

    const handleNameInputChange = (event) => {
        setNameInputValue(event.target.value);
    };

    const handleEmailInputChange = (event) => {
        setEmailInputValue(event.target.value);
    };
    const handleNumberInputChange = (event) => {
        setNumberInputValue(event.target.value);
    };
    const emailInputClass = emailInputValue ? "ltr" : "";

    const handleSubscriptionInputChange = (event) => {
        setSubscriptionInputValue(event.target.value);
    };
    const handleExplainInputChange = (event) => {
        setExplainInputValue(event.target.value);
    };

    const [selectedValue, setSelectedValue] = useState("IR Iran (+98)");
    const [showOptions, setShowOptions] = useState(false);

    const handleOptionSelect = (value) => {
        setSelectedValue(value);
        setShowOptions(false);
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest(".popup-select-options")) {
            setShowOptions(false);
        }
    };
    return (
        <div className="contactSection container-padding-2">
            <div className="container">
                <div className="contactContainer d-flex flex-column justify-center align-center gap-4 position-relative">
                    <p className="contactTitle text-center font-xl-20 font-weight-normal">
                        تماس با پشتیبانی نماوا
                    </p>
                    <div className="contactText w-100  d-flex flex-column justify-evenly align-start gap-2 border-radius-12">
                        <h2 className="white-color font-16 font-weight-normal">
                            هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.
                        </h2>
                        <div className="w-100 d-flex justify-btw align-center white-color ">
                            <p className="font-14 font-weight-normal">
                                ۰۲۱-۹۱۰۰۰۱۱۱
                            </p>
                            <p className="font-14 font-weight-normal">
                                support@namava.ir
                            </p>
                        </div>
                    </div>
                    <form className="d-flex flex-column justify-center align-center gap-2 white-bgc border-radius-12">
                        <p className="contactFormTitle font-14 ">
                            کاربر گرامی، برای پیگیری خرید اشتراک، موارد محتوایی
                            و یا ارسال پیشنهادات و انتقادات می توانید از فرم زیر
                            نیز استفاده نمایید.
                        </p>
                        <label
                            className={`labelName font-12 font-weight-normal align-self-start ${
                                nameInputValue
                                    ? "contactVisible"
                                    : "contactLabel"
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
                                emailInputValue
                                    ? "contactVisible"
                                    : "contactLabel"
                            }`}
                        >
                            ایمیل
                        </label>
                        <input
                            type="email"
                            placeholder="ایمیل"
                            className={`border-radius-12 w-100 inputEmail ${emailInputClass}`}
                            value={emailInputValue}
                            onChange={handleEmailInputChange}
                        />
                        <label className="font-12 font-weight-normal align-self-start">
                            کشور
                        </label>
                        <input type="text" className="border-radius-12 w-100" />
                        <button
                            type="button"
                            className="select border-radius-12"
                            onClick={() => setShowOptions(!showOptions)}
                        >
                            {selectedValue}
                        </button>
                            <CountryPopup onClick={() => setShowOptions(!showOptions)} handleOutsideClick={handleOutsideClick}/>
                        {/*<button
                            type="button"
                            className="select border-radius-12"
                            onClick={() => setShowOptions(!showOptions)}
                        >
                            {selectedValue}
                        </button>
                        {showOptions && (
                            <CountryPopup
                                options={options}
                                onSelect={handleOptionSelect}
                                
                            />
                        )}*/}

                        <label
                            className={`labelNumber font-12 font-weight-normal align-self-start ${
                                numberInputValue
                                    ? "contactVisible"
                                    : "contactLabel"
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
                            className={`labeluSubscription font-12 font-weight-normal align-self-start ${
                                subscriptionInputValue
                                    ? "contactVisible"
                                    : "contactLabel"
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
                        <button onClick={toggleSelect}>
                            Show Select Option
                        </button>
                        {showSelect && (
                            <div className="overlay">
                                <select className="w-100 border-radius-12">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        )}
                        <label
                            className={`labelExplain font-12 font-weight-normal align-self-start ${
                                explainInputValue
                                    ? "contactVisible"
                                    : "contactLabel"
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
        </div>
    );
}
