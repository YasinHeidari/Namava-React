import { useEffect } from "react";
import AboutUsAccordion from "./AboutUsCollapseAccordion";
import AboutUsKids from "./AboutUsKids";
import AboutUsLive from "./AboutUsLive";
import AboutUsSubscription from "./AboutUsSubcription";
import AboutUsDisplayOptions from "./AboutUsDisplayOptions";
import AboutUsServices from "./AboutUsServices";
import AboutUsHeroSection from "./AboutUsHeroSection";
import AboutUsBackUp from "./AboutUsBackUp";
import AboutUsNamavaMag from "./AboutUsNamvaMag";
import ScrollToTop from "../../helpers/ScrollToTop";
import "./index.css";
import AboutUsSlider from "./AboutUsSlider";

export default function AboutUs() {
    useEffect(()=>{
        document.title = 'درباره نماوا'
    })
    return (
        <div className="d-flex flex-column justify-evenly gap-md-12 gap-6 light-black-bgc container-padding-2" style={{marginBottom:'6rem'}}>
        <ScrollToTop/>
            <AboutUsHeroSection/>
            <AboutUsDisplayOptions/>
            <AboutUsSlider/>
            <AboutUsLive/>
            <AboutUsKids/>  
            <AboutUsServices/>
            <AboutUsSubscription/>
            <AboutUsAccordion/> 
            <AboutUsNamavaMag/>
            <AboutUsBackUp/>
        </div>
    );
}
