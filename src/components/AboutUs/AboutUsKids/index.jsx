export default function AboutUsKids(){
    return(
        <div className="container-lg">
                    <div className="aboutUsKids d-flex flex-md-row flex-column  justify-md-center justify-evenly align-center ">
                        <div className="aboutUsKidsInfo col-md-6 col-12  d-flex flex-column justify-center align-md-start align-center gap-3">
                            <div>
                                <img
                                    src={
                                        require("../../../images/aboutUskids.svg")
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
                                        require("../../../images/aboutUsKidsLock.svg")
                                            .default
                                    }
                                    alt=" "
                                />
                                <p className="white-color font-xl-18 font-md-16 font-14 font-weight-normal">
                                    دارای قفل پروفایل.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 d-flex justify-md-end justify-center align-center">
                            <img
                                className="object-cover aboutUsKidsImg max-w-100 "
                                src="https://static.namava.ir/Content/Upload/Images/65032a0d-97ba-43e7-8d7b-fe236abacea1.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
    )
}