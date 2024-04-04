import { Link } from "react-router-dom"
export default function AboutUsSubscription(){
    return(
        <div className="container-md">
                    <div className="aboutUsSubscription d-flex flex-column justify-center align-center gap-5">
                        <div>
                            <h3 className="text-center white-color font-xl-24 line-height-xl-41 font-md-20 line-height-md-35">
                                اشتراک ها
                            </h3>
                        </div>
                        <div className="d-flex justify-center align-stretch gap-4 ">
                            <div className="aboutUsSubscriptionCard col-md-6 border-radius-12">
                                <div className="d-flex flex-column justify-evenly align-center gap-5 text-center">
                                    <div>
                                        <img
                                            className="object-cover w-100 h-auto"
                                            src={
                                                require("../../../images/aboutUsStar.svg")
                                                    .default
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <h3 className="white-color font-xl-24 line-height-xl-41">
                                        اشتراک نماوا
                                    </h3>
                                    <p className="white-color font-xl-18 line-height-xl-31 font-16 line-height-28 d-flex justify-center align-center">
                                        شروع از
                                        <span className="aboutUsSubcriptionPrice white-color font-xl-42 font-34">
                                            ۱۱۹,۰۰۰
                                        </span>
                                        تومان
                                    </p>
                                    <p className="white-color font-xl-16 line-height-xl-28 font-12 font-weight-normal">
                                        دسترسی نامحدود به تمام محتوای نماوا
                                    </p>
                                </div>
                            </div>
                            <div className="aboutUsSubscriptionCard col-md-6 border-radius-12  ">
                                <div className="d-flex flex-column justify-evenly align-center gap-5 text-center">
                                    <div>
                                        <img
                                            className="object-cover w-100 h-auto"
                                            src={
                                                require("../../../images/aboutUsRotateStar.svg")
                                                    .default
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <h3 className="white-color font-xl-24 line-height-xl-41">
                                        اشتراک با تمدید خودکار
                                    </h3>
                                    <p className="white-color font-xl-18 line-height-xl-31 font-16 line-height-28 d-flex justify-center align-center">
                                        شروع از
                                        <span className="aboutUsSubcriptionPrice white-color font-xl-42 font-34">
                                            ۹۰,۰۰۰
                                        </span>
                                        تومان
                                    </p>
                                    <p className="white-color font-xl-16 line-height-xl-28 font-12 font-weight-normal">
                                        یکبار پرداخت کنید، یکسال اشتراک داشته باشید.{" "}
                                        <br /> تمدید خودکار اشتراک نماوا از طریق
                                        شیوه نوین پرداخت بانکی
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link
                            className="aboutUsSubcriptionLink d-flex justify-center align-center h-auto border-radius-12"
                            to="/"
                        >
                            <span className="white-color font-12 line-height-42">
                                خرید اشتراک
                            </span>
                        </Link>
                    </div>
                </div>
    )
}