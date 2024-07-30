import React from 'react'
import ScrollToTop from '../../helpers/ScrollToTop';
import info from "../../images/moreInfo.svg";
import shatel from "../../images/shatel.svg";
import shatelMobile from "../../images/shatelMobile.svg";
import wifi from "../../images/wifiSignal.svg";
import error from "../../images/errorDanger.svg";
import "./index.css"

export default function Internet() {
  
  return (
    <div
      className="FAQSection"
      
    >
      <ScrollToTop />
      
        <div className="FAQContainer">
          <div
            className="internetHeroSection d-flex flex-column gap-4 justify-center align-center"
            style={{ padding: "8rem 0" }}
          >
            <h2 className="font-md-20 font-16 white-color">
              نحوه محاسبه ترافیک مصرفی شما در نماوا
            </h2>
            <div
              className="d-flex justify-center align-center gap-1 white-bgc border-radius-30"
              style={{ padding: ".5rem 1rem" }}
            >
              <img src={info} alt="info" />
              <p className="font-12">
                ترافیک تماشای فیلم برای مشترکین ایرانسل نيم‌بها محاسبه می‌گردد
              </p>
            </div>
          </div>
          <div
            className="d-flex flex-column justify-evenly align-center gap-5 contact-us-white-bgc"
            style={{ padding: "5rem 0" }}
          >
            <h3 className="font-md-20 font-16">
              قوانین محاسبه ترافیک مصرفی در نماوا
            </h3>
            <div
              className="internetCard col-md-8 col-sm-10 col-xs-11 d-flex flex-column justify-center align-start gap-4 border-radius-12 white-bgc"
              style={{ padding: "1.5rem 1rem" }}
            >
              <h4 className="font-md-18 font-16">ترافیک مصرفی رایگان</h4>
              <div className="d-flex justify-center align-center gap-3">
                <img src={shatel} alt="shatel" />
                <div className="d-flex flex-column justify-start align-start gap-2">
                  <p className="font-md-16 font-14">
                    ترافیک مصرفی رایگان برای مشترکین شاتل
                  </p>
                  <p className="font-md-14 font-12 font-weight-normal">
                    ترافیک مصرفی وب‌سایت نماوا برای مشترکین شاتل کاملا رایگان
                    محاسبه می‌شود.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="internetCard col-md-8 col-sm-10 col-xs-11 d-flex flex-column justify-center align-center gap-4 border-radius-12 white-bgc"
              style={{ padding: "1.5rem 1rem" }}
            >
              <h4 className="font-md-18 font-16">ترافیک مصرفی نیم‌بها</h4>
              <div className="d-flex justify-center align-center gap-3">
                <img src={wifi} alt="wifi" />
                <div className="d-flex flex-column justify-start align-start gap-2">
                  <p className="font-md-16 font-14">
                    ترافیک مصرفی نیم‌بها برای مشترکین سایر سرویس‌دهندگان اینترنت
                  </p>
                  <p className="font-md-14 font-12 font-weight-normal">
                    ترافیک مصرفی وب‌سایت نماوا برای مشترکین سایر اپراتورها بصورت
                    نیم‌بها محاسبه می‌شود.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-center align-center gap-3">
                <img src={shatelMobile} alt="shatelMobile" />
                <div className="d-flex flex-column justify-start align-start gap-2">
                  <p className="font-md-16 font-14">
                    مشترکین سیم‌کارت‌های شاتل موبایل با خرید اشتراک
                  </p>
                  <p className="font-md-14 font-12 font-weight-normal">
                    در صورتی که مشترک سیم‌کارت شاتل موبایل قبلا اشتراک نماوا را
                    خریداری کرده باشد، هزینه ترافیک برای وی نیم‌بها محاسبه خواهد
                    شد.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="internetCard col-md-8 col-sm-10 col-xs-11 d-flex flex-column justify-center align-center gap-4 border-radius-12 white-bgc"
              style={{ padding: "1.5rem 1rem" }}
            >
              <h4 className="font-md-18 font-16">ترافیک مصرفی رایگان</h4>
              <div className="d-flex justify-center align-center gap-3">
                <img src={shatelMobile} alt="shatelMobile" />
                <div className="d-flex flex-column justify-start align-start gap-2">
                  <p className="font-md-16 font-14">
                    مشترکین سیم‌کارت‌های شاتل موبایل با خرید اشتراک
                  </p>
                  <p className="font-md-14 font-12 font-weight-normal">
                    مشترکین سیم‌کارت‌های شاتل موبایل بدون نیاز به خرید اشتراک
                    می‌توانند فیلم و سریال تماشا کنند که در این حالت هزینه
                    ترافیک آن‌ها معادل تمام‌بها (نیم‌بها هزینه ترافیک داخلی به
                    علاوه نیم‌بها هزینه معادل اشتراک) محاسبه می‌شود.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-center align-center gap-3">
                <img src={error} alt="error" />
                <div className="d-flex flex-column justify-start align-start gap-2">
                  <p className="font-md-16 font-14">
                    ترافیک مصرفی مشترکین تمام سرویس‌دهندگان اینترنت با استفاده
                    از vpn
                  </p>
                  <p className="font-md-14 font-12 font-weight-normal">
                    ترافیک مصرفی در صورت استفاده از vpn به صورت تمام بها محاسبه
                    می‌شود.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
