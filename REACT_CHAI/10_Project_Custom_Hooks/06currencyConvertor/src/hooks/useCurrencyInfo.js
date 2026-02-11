import { useEffect, useState } from "react";

function useCurrencyInfo(currency){ // given prefix as 'use' just for better readability that this is a hook
    
    const [data, setData] = useState({})

    useEffect(() =>{
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
            console.log(data);
    }, [currency])

    console.log(data);
    return data
}

export default useCurrencyInfo

// this hook will return a data
// Will call an API inside it 

// Now hook we invoke whenever we mount a component is useEffect this automatically fetch the Api now we don't need to make nested function