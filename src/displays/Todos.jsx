import React from 'react';

const Todos = ({data}) => {
    return (
        <div className='todo-body'>
            {data.map((item) => <div className='todo-data'>
                <p>User id: {item.id}</p>
                <p>Title: {item.title}</p>
                <p>Status: {String(item.completed)}</p>
            </div>)}
        </div>
    );
};

export default Todos;