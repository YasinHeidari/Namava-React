import "./index.css";
import AboutUsAccordion from "./AboutUsCollapseAccordion";
import AboutUsKids from "./AboutUsKids";
import AboutUsLive from "./AboutUsLive";
import AboutUsSubscription from "./AboutUsSubcription";
import AboutUsDisplayOptions from "./AboutUsDisplayOptions";
import AboutUsServices from "./AboutUsServices";
import AboutUsHeroSection from "./AboutUsHeroSection";
import AboutUsBackUp from "./AboutUsBackUp";
import AboutUsNamavaMag from "./AboutUsNamvaMag";

export default function AboutUs() {
    return (
        <div className="d-flex flex-column justify-evenly gap-12 light-black-bgc">
            <AboutUsHeroSection/>
            <AboutUsDisplayOptions/>
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
