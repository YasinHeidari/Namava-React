import { Input } from "antd";
import NonResult from "./NonResult";

export default function SearchMovie(){
    return(
        <div className="container" style={{marginTop:'10rem'}}>
            <div className="d-flex gap-5">
                <div className="col-3">

                </div>
                <div className="col-12 d-flex flex-column gap-10">
                    <div className="">
                        <Input/>
                    </div>
                    <div className="">
                        <NonResult/>
                    </div>
                </div>
            </div>
        </div>
    )
}