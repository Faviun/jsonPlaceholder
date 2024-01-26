import React from 'react';

const Photos = ({data}) => {
    return (
        <div>
            {data.map((item) => <div className='photo-data'>
                <p>User id: {item.id}</p>
                <p>Title: {item.title}</p>
                <p>Photo 1:</p><img height='100px' width='100px' src={item.url} alt='photonpload' />
                <p>Photo 2:</p><img height='100px' width='100px' src={item.thumbnailUrl} alt='photonoload' />
            </div>)}
        </div>
    );
};

export default Photos;