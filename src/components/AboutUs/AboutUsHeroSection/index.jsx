import { Link } from "react-router-dom";
import "./index.css";
export default function AboutUsHeroSection(){
    return(
        <div className="aboutUsHeroSectionImg d-flex flex-column justify-end align-center gap-2 ">
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
    )
}