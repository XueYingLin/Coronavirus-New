import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConronavirusData = () => {
    const [data, setData] = useState([]);
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

            setData(arr_res);
        })
    }, []);

    return (
        <div>
            <h2>ConronavirusData</h2>
            <p className='show-data-title'>Date confirmed Deaths Recovered</p>
            {data.map(d => 
                <p className='show-data-content'>{d.date} {d.confirmed} {d.deaths} {d.recovered}</p>
                
            )}

        </div>
    )
}

export default ConronavirusData;