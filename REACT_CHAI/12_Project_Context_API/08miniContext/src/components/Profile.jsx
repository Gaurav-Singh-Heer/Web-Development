import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user, setUser} = useContext(UserContext)

    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div>
    // return(
    //     <>
    //         <h1>Profile</h1>
    //     </>
    // )
}

export default Profile