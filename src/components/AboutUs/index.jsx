import { Link } from "react-router-dom";
import "./index.css";
import AboutUsAccordion from "./AboutUsCollapseAccordion";

export default function AboutUs() {
    return (
        <div className="d-flex flex-column justify-evenly  gap-12 light-black-bgc">
            <div className="aboutUsIntroImg d-flex flex-column justify-end align-center gap-2 ">
                <h2 className="white-color font-xl-28 font-md-20 font-18">
                    تماشای آنلاین فیلم، سریال، انیمیشن و مسابقات ورزشی
                </h2>
                <p className="white-color font-xl-18 font-md-16 font-12 text-center">
                    تماشای آنلاین جدیدترین فیلم ها، سریال ها، انیمیشن ها و
                    همچنین پخش زنده‌ مسابقات ورزشی در نماوا.
                    <br />
                    برای مشاهده‌ی محتوای دلخواهتان ثبت‌نام کنید.
                </p>
                <Link
                    to="/"
                    className="aboutUsIntroLink d-flex justify-center align-center text-center white-color font-xl-16 font-md-14 font-12 border-radius-12"
                >
                    <span>تماشای فیلم و سریال</span>
                </Link>
            </div>

            <div className="container-xxl">
                <div className="aboutUsDisplayOptions d-flex flex-column justify-center align-center gap-4 container-xxl">
                    <h2 className="white-color font-xl-24 font-16 text-center">
                        هر لحظه، هر کجا، با هر دستگاهی آنلاین فیلم ببین
                    </h2>
                    <div>
                        <img
                            className="object-cover w-100 h-auto"
                            src="https://static.namava.ir/Content/Upload/Images/0c233b09-5e1a-47c2-9f3d-ea405b0f62bb.jpg"
                            alt="namava"
                        />
                    </div>
                    <div className="d-flex justify-evenly align-btw gap-8 w-100">
                        <div className="aboutUsPadding col-md-4 col-sm-6 col-xs-12">
                            <div className=" d-flex flex-column justify-evenly align-center gap-4 h-100">
                                <div>
                                    <img
                                        className="aboutUsDisplayOptionsSvg"
                                        src={
                                            require("../../images/aboutUsPhone.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </div>
                                <p className="white-color font-xl-20 font-14">
                                    موبایل و تبلت
                                </p>
                                <span className="white-color font-xl-18 font-12 font-weight-normal">
                                    اندروید
                                </span>
                                <span className="white-color font-xl-18 font-12 font-weight-normal">
                                    IOS
                                </span>
                                <span className="white-color font-xl-18 font-12 font-weight-normal">
                                    وب
                                </span>
                            </div>
                        </div>
                        <div className="aboutUsPadding col-md-4 col-sm-6 col-xs-12">
                            <div className=" d-flex flex-column justify-evenly align-center gap-4 h-100">
                                <div>
                                    <img
                                        className="aboutUsDisplayOptionsSvg"
                                        src={
                                            require("../../images/aboutUsLaptop.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </div>
                                <p className="white-color font-xl-20 font-14">
                                    تلویزیون
                                </p>
                                <span className="white-color font-xl-18 font-12 font-weight-normal">
                                    اندروید
                                </span>
                                <span className="white-color font-xl-18 font-12 font-weight-normal">
                                    وب
                                </span>
                            </div>
                        </div>
                        <div className="aboutUsPadding col-md-4 col-sm-12 col-xs-12">
                            <div className=" d-flex flex-column justify-evenly align-center gap-4 h-100">
                                <div>
                                    <img
                                        className="aboutUsDisplayOptionsSvg"
                                        src={
                                            require("../../images/aboutUsTv.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </div>
                                <p className="white-color font-xl-20 font-14">
                                    رایانه شخصی
                                </p>
                                <span className="white-color font-xl-18 font-12 font-weight-normal">
                                    ویندوز
                                </span>
                                <span className="white-color font-xl-18 font-12 font-weight-normal">
                                    مک
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutUsLive d-flex justify-btw align-center gap-8">
                <div className="col-md-5">
                    <img
                        className="object-cover w-100 h-auto"
                        src="https://static.namava.ir/Content/Upload/Images/5be40514-52aa-483e-a4d0-903e9928b8b9.jpg"
                        alt="Namava Live"
                    />
                </div>
                <div className="col-md-7 d-flex flex-column justify-center align-start gap-4">
                    <div>
                        <img
                            className="object-cover aboutUsLiveSvg "
                            src={
                                require("../../images/aboutUsLive.svg").default
                            }
                            alt=""
                        />
                    </div>
                    <h3 className="white-color font-xl-28 font-16">
                        پخش زنده مهم‌ترین رویدادهای ورزشی در نماوا
                    </h3>
                    <p className="white-color font-xl-18 font-md-16 font-14">
                        امکان پخش زنده مسابقات و رویدادهای ورزشی فوتبال،
                        والیبال، بسکتبال، فرمول 1، بیلیارد، اسنوکر و... بدون
                        نیاز به خرید اشتراک در نماوا
                    </p>
                    <Link
                        className="aboutUsLiveLink white-color text-center border-radius-12 d-flex justify-center align-center"
                        to="/"
                    >
                        <span className="font-14">رفتن به پخش زنده</span>
                    </Link>
                </div>
            </div>
                <div className="container-md">
                    <div className="aboutUsKids d-flex justify-center align-center ">
                        <div className="aboutUsKidsInfo col-md-6  d-flex flex-column justify-center align-start gap-3">
                            <div>
                                <img
                                    src={
                                        require("../../images/aboutUskids.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </div>
                            <p className="white-color w-100 h-auto text-center text-md-right font-xl-18 font-md-16 font-14 font-weight-normal line-height-24 line-height-md-28 line-height-xl-31">
                                برای فرزند خود یک پروفایل جداگانه بسازید، تصویر
                                شخصیت محبوب فرزندتان را انتخاب کنید و با خیال راحت
                                محتوای متناسب با سن کودکتان را پخش کنید.
                                <br />
                                به‌علاوه می‌توانید محتوای نامناسب از نظر خودتان را
                                از دسترس کودک حذف و حتی میزان و ساعت‌های تماشای
                                محتوای فرزندتان را مدیریت کنید.
                            </p>
                            <div className="d-flex justify-center align-center gap-1">
                                <img
                                    src={
                                        require("../../images/aboutUsKidsLock.svg")
                                            .default
                                    }
                                    alt=" "
                                />
                                <p className="white-color font-xl-18 font-md-16 font-14 font-weight-normal">
                                    دارای قفل پروفایل.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-end align-center">
                            <img
                                className="object-cover aboutUsKidsImg max-w-100 "
                                src="https://static.namava.ir/Content/Upload/Images/65032a0d-97ba-43e7-8d7b-fe236abacea1.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="container-md">
                    <div className="d-flex justify-content align-center gap-4">
                        <div className="col-3 d-flex flex-column justify-center align-center gap-5">
                            <div>
                                <img
                                    className="object-cover w-100 h-auto"
                                    src={
                                        require("../../images/aboutUsDownload.svg")
                                            .default
                                    }
                                    alt=" "
                                />
                            </div>
                            <h3 className="font-xl-18 line-height-xl-31 font-16 line-height-28 white-color text-center">
                                دانلود
                            </h3>
                            <p className="white-color font-xl-18 line-height-xl-31 font-16 line-height-28 font-weight-normal text-center">
                                دانلود رایگان فیلم، سریال، انیمیشن و ... در گوشی،
                                تبلت و کامپیوتر
                            </p>
                            <Link
                                className="aboutUsMoreInfo font-xl-18 font-16"
                                to="/"
                            >
                                بیشتر بدانید
                            </Link>
                        </div>
                        <div className="col-3 d-flex flex-column justify-center align-center gap-5">
                            <div>
                                <img
                                    className="object-cover w-100 h-auto"
                                    src={
                                        require("../../images/aboutUspeople.svg")
                                            .default
                                    }
                                    alt=" "
                                />
                            </div>
                            <h3 className="font-xl-18 line-height-xl-31 font-16 line-height-28 white-color text-center">
                                مالتی پروفایل
                            </h3>
                            <p className="white-color font-xl-18 line-height-xl-31 font-16 line-height-28 font-weight-normal text-center">
                                برای هر نفر از اعضای خانواده یک پروفایل شخصی بسازید.
                            </p>
                            <Link
                                className="aboutUsMoreInfo font-xl-18 font-16"
                                to="/"
                            >
                                بیشتر بدانید
                            </Link>
                        </div>
                        <div className="col-3 d-flex flex-column justify-center align-center gap-5">
                            <div>
                                <img
                                    className="object-cover w-100 h-auto"
                                    src={
                                        require("../../images/aboutUsLike.svg")
                                            .default
                                    }
                                    alt=" "
                                />
                            </div>
                            <h3 className="font-xl-18 line-height-xl-31 font-16 line-height-28 white-color text-center">
                                پیشنهاد بر اساس سلیقه
                            </h3>
                            <p className="white-color font-xl-18 line-height-xl-31 font-16 line-height-28 font-weight-normal text-center">
                                پیشنهادهای شگفت انگیز نماوا براساس علاقه‌مندی‌ها و
                                فیلم‌های تماشا شده‌ی شما
                            </p>
                        </div>
                        <div className="col-3 d-flex flex-column justify-center align-center gap-5">
                            <div>
                                <img
                                    className="object-cover w-100 h-auto"
                                    src={
                                        require("../../images/aboutUsCinemaWheel.svg")
                                            .default
                                    }
                                    alt=" "
                                />
                            </div>
                            <h3 className="font-xl-18 line-height-xl-31 font-16 line-height-28 white-color text-center">
                                پردیس
                            </h3>
                            <p className="white-color font-xl-18 line-height-xl-31 font-16 line-height-28 font-weight-normal text-center">
                                اکران آنلاین بهترین‌ فیلم‌های روز سینمای ایران در
                                پردیس نماوا
                            </p>
                            <Link
                                className="aboutUsMoreInfo font-xl-18 font-16"
                                to="/"
                            >
                                بیشتر بدانید
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container-md">
                    <div className="aboutUsSubscription d-flex flex-column justify-center align-center gap-5">
                        <div>
                            <h3 className="text-center white-color font-xl-24 line-height-xl-41 font-md-20 line-height-md-35">
                                اشتراک ها
                            </h3>
                        </div>
                        <div className="d-flex justify-center align-center gap-4">
                            <div className="aboutUsSubscriptionCard col-md-6 border-radius-12 ">
                                <div className="d-flex flex-column justify-evenly align-center gap-5 text-center ">
                                    <div>
                                        <img
                                            className="object-cover w-100 h-auto"
                                            src={
                                                require("../../images/aboutUsStar.svg")
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
                                                require("../../images/aboutUsRotateStar.svg")
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
                <div className="container-md">
                    <AboutUsAccordion/>
                </div>
            
        </div>
    );
}
