import "./index.css"
export default function SpinnerLoading(){
    return(
        <div className="">
            <div className="spinner position-relative">
                <div className="double-bounce1 position-absolute top-0 left-0 w-100 h-100 border-radius-50"></div>
                <div className="double-bounce2 position-absolute top-0 left-0 w-100 h-100 border-radius-50"></div>
            </div>
        </div>
    )
}