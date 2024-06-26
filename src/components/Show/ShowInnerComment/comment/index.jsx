import React from 'react';
import movieInnerLike from '../../../../images/movieInnerLike.svg';
import movieInnerDisLike from '../../../../images/movieInnerDisLike.svg';

export default function ShowComment({ author, created_at, content, likes, dislikes }) {
    // Format the created_at date to only show the date part
    const formattedDate = new Date(created_at).toLocaleDateString();

    return (
        <div className="d-flex flex-column gap-7">
            <div className="d-flex align-start justify-center gap-2">
                <div className="d-flex justify-start align-start h-100">
                    <img style={{width:'40px', height:'40px'}} className="w-50 h-auto object-cover border-radius-50" src="https://static.namava.ir/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png?anchor=middlecenter&crop=auto&scale=both&w=300&h=300" alt="man"/>
                </div>
                <div className="col-12 d-flex flex-column align-start gap-4" style={{borderBottom: 'solid 1px #37383e'}}>
                    <div className=" white-color d-flex gap-1"><p className='font-12 font-weight-normal light-white-font'>{author}</p> - <p className='font-12 font-weight-normal light-white-font'>{formattedDate}</p></div>
                    <p className="font-12 white-color font-weight-normal">
                        {content.length > 200 ? `${content.substring(0, 100)}...` : content}
                    </p>
                    <div className="d-flex justify-center align-center gap-4" style={{marginBottom:'25px'}}>
                        <div className="d-flex justify-center align-center gap-1" style={{width:'40px' , height:'40px'}}>
                            <img src={movieInnerLike} alt="like" className="w-100 h-100 object-cover"/>
                            <p className="font-lg-14 font-12 light-white-font font-weight-normal">{likes}</p>
                        </div>
                        <div className="d-flex justify-center align-center gap-1" style={{width:'40px' , height:'40px'}}>
                            <img src={movieInnerDisLike} alt="dislike" className="w-100 h-100 object-cover"/>
                            <p className="font-lg-14 font-12 light-white-font font-weight-normal">{dislikes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}