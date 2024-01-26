import React from 'react';

const Comments = ({data}) => {
    return (
        <div>
            {data.map((item) => <div className='comment-data'>
                <p>User id: {item.id}</p>
                <p>User name: {item.name}</p>
                <p>Email: <a href={item.email}>{item.email}</a></p>
                <p>Comment: {item.body}</p>
            </div>)}
        </div>
    );
};

export default Comments;