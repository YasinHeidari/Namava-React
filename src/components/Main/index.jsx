import HeroSectionSlider from "../HeroSectionSlider";
import SliderMovie from "../SliderMovieHomePage";
import StarsSlider from "../StarsSlider";
import DirectorsSlider from "../DirectorsSlider";

export default function Main (){
    return(
        
        <div>
            <div className="movieSliderMenu d-flex flex-column align-start justify-evenly gap-8">
                {/*<HeroSectionSlider/>*/}
                <SliderMovie titleSection="ویژه" genre="1"/>{/*trending */}
                <SliderMovie title="اختصاصی نماوا" genre="2"/>
                <SliderMovie title="رایگان در نماوا" genre="3"/>
                <SliderMovie title="تازه های نماوا" genre="4"/>
                <SliderMovie title="سریال های ایرانی" genre="5"/>
                <SliderMovie title="سریال های ایرانی" genre="6"/>
                {/* <StarsSlider /> */}
                <SliderMovie title="ایرانی" genre="7"/>
                <SliderMovie title="اکشن" genre="28"/>
                <SliderMovie title="کمدی" genre="35"/>
                <SliderMovie title="خانوادگی" genre="10751"/>
                <SliderMovie title="بر اساس داستان های واقعی" genre="9648"/>
                <SliderMovie title="جنایی" genre="80"/>
                {/* <DirectorsSlider /> */}
                <SliderMovie title="علمی تخیلی" genre="878"/>
                <SliderMovie title="مستند" genre="99"/>
                <SliderMovie title="قصه پریان" genre="15"/>
                <SliderMovie title="مهیج" genre="12"/>
                <SliderMovie title="عاشقانه" genre="10749"/>
                <SliderMovie title="ورزشی" genre="18"/>
                <SliderMovie title="فانتزی" genre="14"/>
                <SliderMovie title="ویژه ناشنوایان" genre="20"/>
                <SliderMovie title="فیلم کوتاه" genre="21"/>
                <SliderMovie title="فیلم تئاتر" genre="22"/>
            </div>
        </div>
        
    )
}