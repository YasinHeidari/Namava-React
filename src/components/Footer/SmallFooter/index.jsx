import SmallFooterInfo from "./SmallFooterInfo";
import SmallFooterHome from "./SmallHome";
import SmallFooterSearch from "./SmallSearch";
import SmallFooterCategory from "./SmallCategory";
import SmallFooterList from "./SmallList";
export default function SmallFooter(){
    return(
        <div className="d-sm-flex d-xs-flex d-lg-none col-12 justify-btw align-center smallFooter position-fixed bottom-0 right-0 left-0 z-3">
        <SmallFooterHome/>
        <SmallFooterSearch/>
        <SmallFooterCategory/>
        <SmallFooterList/>
        <SmallFooterInfo/>
        </div>
    )
}
