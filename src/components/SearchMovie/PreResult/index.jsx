import preResult from "../../../images/preResult.svg";
import "./index.css";
export default function PreResult(){
    return(
        <div className="preResultContainer d-lg-flex d-none flex-column justify-center align-center gap-1 text-center">
            <img className="preResultImage" src={preResult} alt="PreResult"/>
            <p className="preResultText font-md-14 line-height-md-24 font-12 line-height-21 text-center font-weight-normal">عنوان فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از طریق فیلتر‌های موجود، فیلم و سریال مورد علاقه خود را پیدا کنید.</p>
        </div>
    )
}