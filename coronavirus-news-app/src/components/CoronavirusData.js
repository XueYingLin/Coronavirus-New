import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConronavirusData = () => {
    const [data, setData] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios
        .get('https://covidapi.info/api/v1/global/count')
        .then(res => {
            console.log(res);


            //convert the object of result from axios get to be array 
            const arr_res = [];
            for (let date of Object.keys(res.data.result)) {
                arr_res.push({
                    ...res.data.result[date],
                    date
                })
            }

            let lastIdx = arr_res.length - 3;
            let newArr = [];
            for (var i = lastIdx; i < arr_res.length; i++) {
                newArr.push(arr_res[i]);
            }

            setData(newArr);
            setSearchResults(newArr);
        })
    }, []);

    useEffect(() => {
        const results = data.filter(d => 
            d.date.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <h2>CoronavirusData</h2>
            <input 
                type="text" 
                name="search" 
                placeholder="Search by data" 
                value={searchTerm} 
                onChange={handleChange}/>

            <p className='show-data-title'>Date confirmed Deaths Recovered</p>
            {searchResults.map(d => 
                <p className='show-data-content'>{d.date} {d.confirmed} {d.deaths} {d.recovered}</p>
                
            )}

        </div>
    )
}

export default ConronavirusData;