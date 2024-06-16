import { Tooltip } from "antd";
import movieInnerLike from '../../../../images/movieInnerLike.svg';
import movieInnerDisLike from '../../../../images/movieInnerDisLike.svg';
export default function EpisodeTooltip(){
    return(
        <div className="d-flex justify-end gap-1 align-center">
            <div className="d-flex justify-center align-center border-radius-50 showInnerIconHover EpisodeTooltipBgc">
                <Tooltip
                    placement="bottom"
                    title={
                        <span style={{ color: "black" }}>
                            دانلود
                        </span>
                    }
                    color="#fff"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff"><path  d="M14.568 18.596a.54.54 0 0 0 .766 0l3.2-3.2a.542.542 0 1 0-.766-.766l-2.272 2.272V7.54a.54.54 0 1 0-1.084 0v9.363L12.14 14.63a.542.542 0 1 0-.766.766zm8.792-4.122a.54.54 0 0 0-.542.542v3.958c-.001 1.22-1 2.2-2.2 2.2H9.293c-1.22-.001-2.2-1-2.2-2.2v-3.958a.54.54 0 1 0-1.084 0v3.958a3.3 3.3 0 0 0 3.293 3.293h11.316a3.3 3.3 0 0 0 3.293-3.293v-3.958a.54.54 0 0 0-.54-.542z"></path></svg>
                </Tooltip>
            </div>
            <div className="d-flex justify-center align-center border-radius-50 showInnerIconHover EpisodeTooltipBgc">
                <Tooltip
                    placement="bottom"
                    title={
                        <span style={{ color: "black" }}>
                            دوست داشتم
                        </span>
                    }
                    color="#fff"
                >
                    <img
                        loading="lazy"
                        src={movieInnerLike}
                        alt="like"
                    />
                </Tooltip>
            </div>
            <div className="d-flex justify-center align-center border-radius-50 showInnerIconHover EpisodeTooltipBgc">
                <Tooltip
                    placement="bottom"
                    title={
                        <span style={{ color: "black" }}>
                            دوست نداشتم
                        </span>
                    }
                    color="#fff"
                >
                    <img
                        loading="lazy"
                        src={movieInnerDisLike}
                        alt="dislike"
                    />
                </Tooltip>
            </div>
        </div>
    )
}