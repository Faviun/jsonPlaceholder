import React from 'react';

const Todos = ({data}) => {
    return (
        <div className='todo-body'>
            {data.map((item) => <div className='todo-data'>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{String(item.completed)}</p>
            </div>)}
        </div>
    );
};

export default Todos;