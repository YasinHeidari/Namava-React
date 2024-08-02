import React from "react";
import arrow from "../../images/arrowblack.svg";
import "./index.css";

export default function Subscription() {
  const costs = [
    {
      id: 1,
      duration: "یک ماهه با تمدید خودکار",
      originalcost: "۹۰,۰۰۰",
      currency: "تومان",
    },
    {
      id: 2,
      duration: "یک ماهه",
      originalcost: "۱۶۰,۰۰۰",
      offcost: "۱۱۲,۰۰۰",
      offperc: "%۳۰ تخفیف ویژه خرید اشتراک",
      currency: "تومان",
    },
    {
      id: 3,
      duration: "سه ماهه",
      originalcost: "۴۸۰,۰۰۰",
      offcost: "۳۳۶,۰۰۰",
      offperc: "%۳۰ تخفیف ویژه خرید اشتراک",
      currency: "تومان",
    },
    {
      id: 4,
      duration: "شش ماهه",
      originalcost: "۶۵۰,۰۰۰",
      offcost: "۵۸۵,۰۰۰",
      offperc: "%۱۰ تخفیف ویژه خرید اشتراک",
      currency: "تومان",
    },
  ];

  return (
    <div className="contact-us-white-bgc" style={{ padding: "6rem 0" }}>
      <div className="subContainer">
        <div className="d-flex flex-column justify-center align-center gap-4">
          <h1 className="font-md-20 font-14 contactUs-form-title font-weight-normal">
            اشتراک خود را انتخاب کنید
          </h1>
          <div className="d-flex flex-column justify-center align-center gap-3">
            {costs.map((cost) => (
              <div className="d-flex justify-center align-center" key={cost.id}>
                <span className="greySub"></span>
                <div
                  className="d-flex justify-btw align-center white-bgc h-auto border-radius-12 gap-13"
                  style={{ padding: "1rem" }}
                >
                  <div className="d-flex flex-column justify-center align-start gap-2">
                    <p className="font-18 light-black font-weight-normal">
                      {cost.duration}
                    </p>
                    {cost.offperc ? (
                      <p
                        className="font-12 white-color border-radius-12"
                        style={{
                          backgroundColor: "#1992ff",
                          padding: "4px 12px",
                        }}
                      >
                        {cost.offperc}
                      </p>
                    ) : null}
                  </div>
                  <div className="d-flex justify-end align-center gap-1">
                    <div className="d-flex flex-column justify-center align-start gap-2">
                      <div className="d-flex justify-end align-center gap-2">
                        <p>{cost.originalcost}</p>
                        <p>{cost.currency}</p>
                      </div>
                      <div className="d-flex justify-end align-center gap-2">
                        {cost.offcost ? <p>{cost.offcost}</p> : null}
                        <p>{cost.currency}</p>
                      </div>
                    </div>
                    <img src={arrow} alt="Arrow" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
