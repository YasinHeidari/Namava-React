import { Link } from "react-router-dom"
export default function AboutUsLive(){
    return(
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
                                require("../../../images/aboutUsLive.svg").default
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
    )
}