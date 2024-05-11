import React from 'react';
import movieInnerLike from '../../../../images/movieInnerLike.svg';
import movieInnerDisLike from '../../../../images/movieInnerDisLike.svg';

export default function Comment() {
    return (
        <div className="d-flex flex-column gap-7">
            <div className="d-flex align-start justify-center gap-2">
                <div className="d-flex justify-start align-start h-100">
                    <img style={{width:'40px', height:'40px'}} className="w-50 h-auto object-cover border-radius-50 " src="https://static.namava.ir/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png?anchor=middlecenter&crop=auto&scale=both&w=300&h=300" alt="man"/>
                </div>
                <div className="col-12 d-flex flex-column align-start gap-4" style={{borderBottom: 'solid 1px #37383e'}}>
                    <p className="font-md-12 font-weight-normal light-white-font">محمدعلی - پنج‌شنبه ۳ اسفند ۱۴۰۲</p>
                    <p className="font-md-12 white-color font-weight-normal">خیلی خوب</p>{/*yh */}
                    <div className="d-flex justify-center align-center gap-4" style={{marginBottom:'25px'}}>
                        <div className="d-flex justify-center align-center gap-1" style={{width:'40px' , height:'40px'}}>
                            <img src={movieInnerLike} alt="like" className="w-100 h-100 object-cover"/>
                            <p className="font-lg-14 light-white-font font-weight-normal">۰</p>
                        </div>
                        <div className="d-flex justify-center align-center gap-1" style={{width:'40px' , height:'40px'}}>
                            <img src={movieInnerDisLike} alt="dislike" className="w-100 h-100 object-cover"/>
                            <p className="font-lg-14 light-white-font font-weight-normal">۰</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-start justify-center gap-2">
                <div className="d-flex justify-start align-start h-100">
                    <img style={{width:'40px', height:'40px'}} className="w-50 h-auto object-cover border-radius-50 " src="https://static.namava.ir/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png?anchor=middlecenter&crop=auto&scale=both&w=300&h=300" alt="man"/>
                </div>
                <div className="col-12 d-flex flex-column align-start gap-4" style={{borderBottom: 'solid 1px var(--contactUs-form-title)'}}>
                    <p className="font-md-12 font-weight-normal light-white-font">رضا - چهارشنبه ۲۹ شهریور ۱۴۰۲</p>
                    <p className="font-md-12 white-color font-weight-normal">عالی بود دوست داشتم تلاش برای خانواده رو کاملا به تصویر کشیده بود ولی متاسفانه از راه خلاف</p>
                    <div className="d-flex justify-center align-center gap-4" style={{marginBottom:'25px'}}>
                        <div className="d-flex justify-center align-center gap-1" style={{width:'40px' , height:'40px'}}>
                            <img src={movieInnerLike} alt="like" className="w-100 h-100 object-cover" />
                            <p className="font-lg-14 light-white-font font-weight-normal">۲۹</p>
                        </div>
                        <div className="d-flex justify-center align-center gap-1" style={{width:'40px' , height:'40px'}}>
                            <img src={movieInnerDisLike} alt="dislike" className="w-100 h-100 object-cover"/>
                            <p className="font-lg-14 light-white-font font-weight-normal">۰</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
