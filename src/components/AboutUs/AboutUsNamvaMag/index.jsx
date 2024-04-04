import { Link } from "react-router-dom"
export default function AboutUsNamavaMag(){
    return(
        <div className="container-md">
            <div className="d-flex justify-center align-stretch gap-3">
                <div className="col-sm-4 aboutUsMagCard d-flex flex-column justify-evenly align-center gap-4 border-radius-12 ">
                    <h3 className="white-color font-xl-24 line-height-xl-41 font-16 line-height-28">نماوا تی‌وی</h3>
                    <p className="font-xl-18 line-height-xl-31 font-12 line-height-21 white-color text-center font-weight-normal">با نماوا تی وی تلویزیون خود را به یک دستگاه هوشمند با قابلیت نصب برنامه‌های دلخواه تبدیل کنید. </p>
                    <Link to="/" className="aboutUsMagLink d-flex justify-center align-center border-radius-12"><span className="white-color font-xl-14 line-height-xl-24 font-12">اطلاعات بیشتر</span></Link>
                    <div className="w-100"><img className="object-cover max-w-100 h-auto" src="https://static.namava.ir/Content/Upload/Images/f12a6d92-25be-42ed-a134-1c8c436ad1ed.png" alt=""/></div>
                </div>
                <div className="col-sm-4 aboutUsMagCard d-flex flex-column justify-btw align-center gap-4 border-radius-12  position-relative">
                    <h3 className="white-color font-xl-24 line-height-xl-41 font-16 line-height-28">نماوا مگ</h3>
                    <p className="font-xl-18 line-height-xl-31 font-12 line-height-21 white-color text-center font-weight-normal">نقد و بررسی محتواهای روز دنیا را در مجله نماوا بخوانید.</p>
                    <Link to="/" className="aboutUsMagLink d-flex justify-center align-center border-radius-12 "><span className="white-color font-xl-14 line-height-xl-24 font-12">رفتن به نماوا مگ</span></Link>
                    <div className="w-100 h-auto " id="namavaMagPic"><img className="object-cover max-w-100 h-auto" src="https://static.namava.ir/Content/Upload/Images/a72237f4-05be-44d1-83b3-7b9a944976e4.jpg" alt=""/></div>
                </div>
            </div>
        </div>
    )
}