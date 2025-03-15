import React, {useEffect} from "react";

const MyComponent = () => {

    useEffect (()=>{
        console.log('My Component is Mounting')
    }, [])

    return (
        <h2>My COMPONENT</h2>
    )
}

export default MyComponent