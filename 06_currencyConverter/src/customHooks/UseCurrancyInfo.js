import { useEffect, useState } from "react";

function UseCurrancyInfo(paisa){
    const [data,setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${paisa}.json`)
            .then((response) => response.json()) // Capture the response
            .then((data) => {
                setData(data[paisa]); // Set the data correctly
            })
            .catch((error) => console.error("Error fetching data:", error)); // Add error handling
    }, [paisa]); //dependencies
    

    console.log(data);
    return data;
}

export default UseCurrancyInfo;