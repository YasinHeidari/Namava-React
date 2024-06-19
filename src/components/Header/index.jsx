import { Fragment} from "react";
import "./index.css";
import SmallHeader from "./SmallHeader";
import BigHeader from "./BigHeader";
import SmallHeaderInner from "./SmallHeader/SmallHeaderInner";

export default function Header() {
    return (
        <Fragment>
            <BigHeader/>
            <SmallHeader/>
            <SmallHeaderInner/>
        </Fragment>
    );
}





