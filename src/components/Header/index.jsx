import { Fragment} from "react";
import PreloadStyles from "../Loading/PreLoader";
import "./index.css";
import SmallHeader from "./SmallHeader";
import BigHeader from "./BigHeader";
import SmallHeaderInner from "./SmallHeader/SmallHeaderInner";

export default function Header() {
    return (
        <Fragment>
        <PreloadStyles href='./index.css' as='style'/>
            <BigHeader/>
            <SmallHeader/>
            <SmallHeaderInner/>
        </Fragment>
    );
}





