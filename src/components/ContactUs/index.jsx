import React, { useState } from 'react';
import "./ContactUs.css";

export default function ContactUs(){
        const [showSelect, setShowSelect] = useState(false);
      
        const toggleSelect = () => {
          setShowSelect(!showSelect);
        };
    

    return (
        <div className="container">
            <div className="d-flex justify-center align-center">
                <h3 className="text-center">تماس با پشتیبانی نماوا</h3>
                <div className="w-100">
                    <h3>هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</h3>
                    <div className="d-flex justify-between align-center">
                        <p>support@namava.ir</p>
                        <p>۰۲۱-۹۱۰۰۰۱۱۱</p>
                    </div>
                </div>
                <form className="d-flex flex-column justify-center align-center gap-2">
                    <label>کاربر گرامی، برای پیگیری خرید اشتراک، موارد محتوایی و یا ارسال پیشنهادات و انتقادات می توانید از فرم زیر نیز استفاده نمایید.</label>
                    <label>نام و نام خانوادگی</label>
                    <input type="text" placeholder="نام و نام خانوادگی" className="border-radius-12 w-100"/>
                    <label>ایمیل</label> 
                    <input type="text" placeholder="ایمیل" className="border-radius-12 w-100" />
                    {/*select list with countries codes*/}
                    <div>
                        <label></label>
                        <input type="text" placeholder="" className="border-radius-12 w-100" />
                    </div>
                    <input type="text" placeholder="کد اشتراک/شناسه کاربری شاتلی" className="border-radius-12 w-100" />
                    <button onClick={toggleSelect}>Show Select Option</button>
                        {showSelect && (
                            <div className="overlay">
                            <select className='w-100 border-radius-12'>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            </div>
                        )}
                </form> 
            </div>
        </div>
    )
}