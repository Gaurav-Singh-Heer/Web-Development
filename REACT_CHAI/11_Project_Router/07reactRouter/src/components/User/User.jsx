import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid}=useParams();  // have to write userid as in main.jsx in link have written userid
    return(
        <div className='bg-gray-600 text-white text-3xl px-40 py-30'>
            User: {userid}
        </div>
    )
}

export default User