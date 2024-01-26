import React from 'react';

const Users = ({data}) => {
    return (
        <div className='user-body'>
            {data.map((item) => <div className='user-data'>
                <p>Name: {item.name}</p>
                <p>Username: {item.username}</p>
                <p>Email: <a href={item.email}>{item.email}</a></p>
                <p>Street: {item.address.street}</p>
                <p>Suite: {item.address.suite}</p>
                <p>City: {item.address.city}</p>
                <p>Zipcode: {item.address.zipcode}</p>
                <p>Lat: {item.address.geo.lat}</p>
                <p>Lng: {item.address.geo.lng}</p>
                <p>Phone: {item.phone}</p>
                <p>Website: <a href={item.website}>{item.website}</a></p>
                <p>Company name:{item.company.name}</p>
                <p>CatchPhrase: {item.company.catchPhrase}</p>
                <p>Bs: {item.company.bs}</p>
            </div>)}
        </div>
    );
};

export default Users;