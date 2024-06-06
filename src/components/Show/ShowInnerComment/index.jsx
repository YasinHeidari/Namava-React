import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";
import ShowComment from "./comment";


const apiKey = '4fba95dbf46cd77d415830c228c9ef01';
export default function ShowCommentContainer({ seriesId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            if (!seriesId) {
                console.error('No seriesId provided');
                return;
            }

            try {
                const response = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}/reviews?api_key=${apiKey}&language=fa-IR`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setComments(data.results);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [seriesId]);

    return (
        <div className="commentContainer border-radius-12">
            <div className="d-flex flex-column w-100 gap-7">
                <h3 className="font-lg-18 white-color text-center">نظرات کاربران</h3>
                <div className="d-flex justify-center align-start gap-2">
                    <div className="d-flex justify-start" style={{ marginTop: '.5rem' }}>
                        <img
                            style={{ width: '40px', height: '40px' }}
                            className="w-50 h-auto object-cover border-radius-50"
                            src="https://static.namava.ir/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png?anchor=middlecenter&crop=auto&scale=both&w=300&h=300"
                            alt="man"
                        />
                    </div>
                    <div className="col-12 d-flex justify-btw align-start gap-2">
                        <div className="col-12 d-flex flex-column align-stretch gap-2">
                            <input
                                className="w-100 border-radius-12 white-bgc"
                                style={{ height: '52px', border: 'none' }}
                                placeholder="نظرتان درباره این سریال چیست؟"
                                type="text"
                            />
                            <Checkbox style={{ backgroundColor: '#222327' }} className="white-color font-weight-normal font-12">
                                این نظر حاوی اسپویلر است و داستان سریال را لو می‌دهد.
                            </Checkbox>
                        </div>
                        <div style={{ marginTop: '.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <defs></defs>
                                <g id="Group_2312" data-name="Group 2312" transform="translate(-188.002 -426)">
                                    <path
                                        fill="#666"
                                        d="M20 40a20.005 20.005 0 0 1-7.783-38.428 20.005 20.005 0 0 1 15.57 36.856A19.875 19.875 0 0 1 20 40zm6.876-29.689a1.479 1.479 0 0 0-.69.175L9.212 19.36a1.471 1.471 0 0 0 0 2.607l16.976 8.873a1.451 1.451 0 0 0 1.971-.592 1.424 1.424 0 0 0-.03-1.47l-3.99-6.624a2.884 2.884 0 0 1 0-2.983l3.99-6.623a1.424 1.424 0 0 0 .03-1.471 1.485 1.485 0 0 0-1.281-.766z"
                                        data-name="Subtraction 3"
                                        transform="translate(188 426)"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                {comments && comments.map(comment => (
                    <ShowComment
                        key={comment.id}
                        author={comment.author}
                        created_at={comment.created_at}
                        content={comment.content}
                        likes={comment.likes}
                        dislikes={comment.dislikes}
                    />
                ))}
            </div>
        </div>
    );
}
