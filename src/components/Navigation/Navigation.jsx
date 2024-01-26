import React from 'react';

const Navigation = (props) => {
    const configNav = [
        {
            id: 0,
            url: 'posts',
            title: 'Posts'
        },
        {
            id: 1,
            url: 'comments',
            title: 'Comments'
        },
        {
            id: 2,
            url: 'albums',
            title: 'Albums'
        },
        {
            id: 3,
            url: 'photos',
            title: 'Photos'
        },
        {
            id: 4,
            url: 'todos',
            title: 'Todos'
        },
        {
            id: 5,
            url: 'users',
            title: 'Users'
        }
    ]
    return (
        <div>
            <ul style={props.scBut.sc ? {visibility: "", position: ""} : {visibility: "hidden", position: "absolute"}} className='navigationList'>
                {configNav.map((item) => (
                    <li 
                        onClick={() => props.changeNav(item.url)}
                        key={item.id} 
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;