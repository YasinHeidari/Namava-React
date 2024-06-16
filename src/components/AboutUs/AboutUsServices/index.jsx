import { Link } from "react-router-dom"
export default function AboutUsServices(){
    return(
        <div className="container-md container">
            <div className="d-flex justify-evenly flex-wrap align-center ">
                <div className="col-lg-3 col-sm-6 col-9 d-flex flex-column justify-center align-center gap-md-5 gap-1" style={{marginBottom:'2rem'}}>
                    <div>
                        <img
                            className="object-cover w-100 h-auto"
                            src={
                                require("../../../images/aboutUsDownload.svg")
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
                <div className="col-lg-3 col-sm-6 col-9 d-flex flex-column justify-center align-center gap-md-5 gap-1" style={{marginBottom:'2rem'}}>
                    <div>
                        <img
                            className="object-cover w-100 h-auto"
                            src={
                                require("../../../images/aboutUspeople.svg")
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
                <div className="col-lg-3 col-sm-6 col-9 d-flex flex-column justify-center align-center gap-md-5 gap-1" style={{marginBottom:'2rem'}}>
                    <div>
                        <img
                            className="object-cover w-100 h-auto"
                            src={
                                require("../../../images/aboutUsLike.svg")
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
                <div className="col-lg-3 col-sm-6 col-9 d-flex flex-column justify-center align-center gap-md-5 gap-1" style={{marginBottom:'2rem'}}>
                    <div>
                        <img
                            className="object-cover w-100 h-auto"
                            src={
                                require("../../../images/aboutUsCinemaWheel.svg")
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
    )
}