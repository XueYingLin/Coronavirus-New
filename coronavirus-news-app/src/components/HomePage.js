import React from 'react';
import './HomePage.css';
import ConronavirusData from './CoronavirusData';
import Comment from './Comment';

const HomePage = () => {

    return (
        <div className='symptoms'>
            <h2>Symptoms of Coronavirus</h2>
            <div>
                <li>Fever</li>
                <li>Cough</li>
                <li>Shortness of breath</li>
            </div>
            
            <section className='seeing-medical-attention'>
            <h2>When to see Medical Attention</h2>
            
            <div>
                <li>Trouble breathing</li>
                <li>Persistent pain or pressure in the chest</li>
                <li>New confusion or inability to arouse</li>
                <li>Bluish or face</li>
            </div>
            </section>
            <div>
               <a 
                href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
                target="-blank">
                More information</a>
            </div>
            <br />
            <ConronavirusData />
            <br />
            <Comment />
        </div>
    )
}

export default HomePage;