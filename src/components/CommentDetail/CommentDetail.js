import React from 'react';
import './commentDetail.css';
import image from '../images/download (1).jpg'

const CommentDetail = (props) => {
    const {name, email, postId, body} = props.comment;
    return (
        <div className="commentDetail">
           <div>
           <img src={image} alt=""/>
           </div>
           <div>
           <h4><b>Commentator Id:</b> {postId}</h4>
            <p><b>Commentator Name:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Comment:</b> {body}</p>
           </div>
        </div>
    );
};

export default CommentDetail;