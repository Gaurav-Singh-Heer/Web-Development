import React from "react";

const UserCard = (props) => {
    if (!props.data) return <p>Loading user...</p>;
    
    console.log(props.data);
    
    return (
        <div className="user-card">
            <img className="user-img" src={props.data.picture.large} alt="User" />
            <h3>{props.data.name.first}</h3>
            <p>{props.data.phone}</p>
            <p>{props.data.location.city}, {props.data.location.state}</p>
        </div>
    )
}

export default UserCard;

// At App.jsx 

// Change :-     getRandomUser().then((user)=> setUserData(user.results[0]));

// To :-     getRandomUser().then((user)=> setUserData(user));

// To use below Code 


//     const user = props.data.results[0];
    
//     return (
//         <div className="user-card">
//             <img className="user-img" src={user.picture.large} alt="User" />
//             <h3>{user.name.first} {user.name.last}</h3>
//             <p>{user.phone}</p>
//             <p>{user.location.city}, {user.location.state}</p>
//         </div>
//     )
// }
