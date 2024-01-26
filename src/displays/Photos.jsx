import React from 'react';

const Photos = ({data}) => {
    return (
        <div>
            {data.map((item) => <div className='photo-data'>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <img height='100px' width='100px' src={item.url} alt='photonpload' />
                <img height='100px' width='100px' src={item.thumbnailUrl} alt='photonoload' />
            </div>)}
        </div>
    );
};

export default Photos;