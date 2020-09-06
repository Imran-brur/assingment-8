import React, { useState, useEffect } from 'react';
import User from '../User/User';
import './Home.css';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    return (
        <div className="home">
          <h1>UserPosts</h1>
           {
               users.map(user => <User user={user}></User>)
           }
        </div>
    );
};

export default Home;