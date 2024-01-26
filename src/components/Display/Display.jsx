import React from 'react';
import { Albums, Comments, Photos, Posts, Todos, Users } from '../../displays';

const Display = ({heading}) => {
    const arrayOfComponents = {
        posts: <Posts data={heading.data}/>,
        comments: <Comments data={heading.data}/>,
        albums: <Albums data={heading.data}/>,
        photos: <Photos data={heading.data}/>,
        todos: <Todos data={heading.data}/>,
        users: <Users data={heading.data}/>
    }
    return (
        <div className='display'>
            {arrayOfComponents[heading.navState]}  
        </div>
    );
}

export default Display;