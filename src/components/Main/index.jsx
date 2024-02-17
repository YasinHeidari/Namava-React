import { Fragment } from "react";
import HeroSectionSlider from "../HeroSectionSlider";
import SliderMovie from "../SliderMovieHomePage";

export default function Main (){
    return(
        <Fragment>
            <HeroSectionSlider/>
            <SliderMovie titleSection=""/>
            <SliderMovie titleSection=""/>
            <SliderMovie titleSection=""/>
            <SliderMovie titleSection=""/>
            <SliderMovie titleSection=""/>
        </Fragment>
    )
}