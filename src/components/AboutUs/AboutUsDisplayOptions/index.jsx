export default function AboutUsDisplayOptions(){
    return(
        <div className="container-xxl container">
                <div className="aboutUsDisplayOptions d-flex flex-column justify-center align-center gap-4 container-xxl col-12">
                    <h2 className="white-color font-xl-24 font-16 text-center">
                        هر لحظه، هر کجا، با هر دستگاهی آنلاین فیلم ببین
                    </h2>
                    <div>
                        <img
                            className="object-cover w-100 max-w-100 h-auto"
                            src="https://static.namava.ir/Content/Upload/Images/0c233b09-5e1a-47c2-9f3d-ea405b0f62bb.jpg"
                            alt="namava"
                        />
                    </div>
                    <div className="d-flex flex-md-row flex-column justify-md-evenly justify-center align-md-btw align-center gap-md-8 gap-1 col-12">
                        <div className="aboutUsPadding col-md-4 col-sm-6 col-xs-12">
                            <div className=" d-flex flex-column justify-evenly align-center gap-md-4 gap-1 h-100">
                                <div>
                                    <img
                                        className="aboutUsDisplayOptionsSvg"
                                        src={
                                            require("../../../images/aboutUsPhone.svg")
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
                            <div className=" d-flex flex-column justify-evenly align-center gap-md-4 gap-1 h-100">
                                <div>
                                    <img
                                        className="aboutUsDisplayOptionsSvg"
                                        src={
                                            require("../../../images/aboutUsLaptop.svg")
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
                            <div className=" d-flex flex-column justify-evenly align-center gap-md-4 gap-1 h-100">
                                <div>
                                    <img
                                        className="aboutUsDisplayOptionsSvg"
                                        src={
                                            require("../../../images/aboutUsTv.svg")
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
    )
}