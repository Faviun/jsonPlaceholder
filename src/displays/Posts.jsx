import React from 'react';

const Posts = ({data}) => {
    return (
        <div>
            {data.map((item) => <div className='post-data'>
                <p>User id: {item.id}</p>
                <p>Title: <b>{item.title}</b></p>
                <p>Post: {item.body}</p>
            </div>)}
        </div>
    );
};

export default Posts;