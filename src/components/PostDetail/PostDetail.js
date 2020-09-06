import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostDetail.css'

const PostDetail = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    
    return (
        <div>
            <div className="PostDetail">
                <h1 id="header">User Details</h1>
                <p><b>User Id:</b> {user.id}</p>
                <p> {user.title}</p>
                <p> {user.body}</p>        
            </div>
            <div className="comment">
                <h1 id="header">Comments</h1> 
                <Comment userid={userId}></Comment>
            </div>
        </div>
    );
};

export default PostDetail;