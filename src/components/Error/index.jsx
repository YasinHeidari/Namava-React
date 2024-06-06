import { Link } from 'react-router-dom';
import Error404 from '../../images/Error404.svg';
import "./index.css";
export default function Error(){
    return(
        <div className="col-12 h-100 d-flex flex-column justify-center align-center  gap-10" style={{margin:'11rem 0'}}>
            <div className='d-flex flex-column justify-center align-center gap-3'>    
                <img className='errorImg' src={Error404} alt='error404'/>
                <p className='font-xl-18 font-md-16 font-sm-14 font-xs-14 white-color'>صفحه مورد نظر شما یافت نشد.</p>
                <p className='light-white-font font-xl-16 font-md-14 font-xs-12 font-sm-12 font-weight-normal'>برای دیدن هزاران فیلم و سریال، به صفحه اصلی نماوا بروید.</p>
            </div>
            <Link to='/' className='text-center errorHome line-height-42 border-radius-12 white-bgc black-color'>رفتن به خانه</Link>
        </div>
    )
}