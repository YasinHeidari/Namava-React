import movieInnerLike from '../../../../images/movieInnerLike.svg';
import movieInnerDisLike from '../../../../images/movieInnerDisLike.svg';
import { Tooltip } from "antd";
export default function MovieToolTipsm(){

    return(
        <div className="d-lg-none d-flex  align-center justify-evenly gap-md-5 gap-3">
                    <div className="d-flex justify-center align-center border-radius-50 movieInnerIconHover">
                      <Tooltip placement="bottom" title={<span style={{ color: 'black' }}>افزودن به لیست من</span>}  color="#fff">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40" fill="#fff" ><path d="M31.56 18.64H21.4V8.48a1.4 1.4 0 0 0-2.39-.99 1.4 1.4 0 0 0-.41.99v10.16H8.44a1.4 1.4 0 0 0-1.4 1.4 1.4 1.4 0 0 0 1.4 1.4H18.6V31.6a1.4 1.4 0 0 0 1.4 1.4 1.4 1.4 0 0 0 1.4-1.4V21.44h10.16a1.4 1.4 0 0 0 1.4-1.4 1.4 1.4 0 0 0-1.4-1.4z"></path></svg>
                      </Tooltip>
                    </div>
                    <div className="d-flex justify-center align-center border-radius-50 movieInnerIconHover">
                      <Tooltip placement="bottom" title={<span style={{ color: 'black' }}>دوست داشتم</span>}  color="#fff">
                      <img loading="lazy" src={movieInnerLike}  alt="like"/>
                      </Tooltip>
                    </div>
                    <div className="d-flex justify-center align-center border-radius-50 movieInnerIconHover">
                      <Tooltip placement="bottom" title={<span style={{ color: 'black' }}>دوست نداشتم</span>}  color="#fff">
                      <img loading="lazy" src={movieInnerDisLike}  alt="dislike"/>
                      </Tooltip>
                    </div>
                </div>
    )
}
    
