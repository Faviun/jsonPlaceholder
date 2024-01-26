import React from 'react';

const Albums = ({data}) => {
    return (
        <div>
            {data.map((item) => <div className='album-data'>
                <p>User id: {item.userId}</p>
                <p>Item id: {item.id}</p>
                <p>Title: {item.title}</p>
            </div>)}
        </div>
    );
};

export default Albums;