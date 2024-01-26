import React from 'react';

const Albums = ({data}) => {
    return (
        <div>
            {data.map((item) => <div className='album-data'>
                <p>{item.userId}</p>
                <p>{item.id}</p>
                <p>{item.title}</p>
            </div>)}
        </div>
    );
};

export default Albums;