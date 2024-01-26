import React from 'react';

const Comments = ({data}) => {
    return (
        <div>
            {data.map((item) => <div className='comment-data'>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p><a href={item.email}>{item.email}</a></p>
                <p>{item.body}</p>
            </div>)}
        </div>
    );
};

export default Comments;