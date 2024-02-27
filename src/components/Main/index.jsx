import { Fragment } from "react";
import HeroSectionSlider from "../HeroSectionSlider";
import SliderMovie from "../SliderMovieHomePage";
import StarsSlider from "../StarsSlider";
import DirectorsSlider from "../DirectorsSlider";

export default function Main (){
    return(
        <Fragment>
            <HeroSectionSlider/>
            <SliderMovie title="ویژه"/>
            <SliderMovie title="اختصاصی نماوا"/>
            <SliderMovie title="رایگان در نماوا"/>
            <SliderMovie title="تازه های نماوا"/>
            <SliderMovie title="سریال های ایرانی"/>
            <SliderMovie title="سریال های ایرانی"/>
            <StarsSlider />
            <SliderMovie title="ایرانی"/>
            <SliderMovie title="اکشن"/>
            <SliderMovie title="کمدی"/>
            <SliderMovie title="خانوادگی"/>
            <SliderMovie title="بر اساس داستان های واقعی"/>
            <SliderMovie title="جنایی"/>
            <DirectorsSlider />
            <SliderMovie title="علمی تخیلی"/>
            <SliderMovie title="مستند"/>
            <SliderMovie title="قصه پریان"/>
            <SliderMovie title="مهیج"/>
            <SliderMovie title="عاشقانه"/>
            <SliderMovie title="ورزشی"/>
            <SliderMovie title="فانتزی"/>
            <SliderMovie title="ویژه ناشنوایان"/>
            <SliderMovie title="فیلم کوتاه"/>
            <SliderMovie title="فیلم تئاتر"/>
        </Fragment>
    )
}