import { useEffect, useState } from 'react';
const CooperationList2 = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all') 
           .then((response) => response.json())
           .then((data) => setCountry(data))
    }, [])

    return (
        <h1>TEST Cooperation</h1>
    )
}

export default CooperationList2;