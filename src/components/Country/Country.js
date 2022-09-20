import React from 'react';
import './Country.css'

const Country = (props) => {
    const { capital, region, population, name, flags } = props.country;
    console.log(props.country);

    return (
        <div className='main'>
            <div className="country">
                <h1>capital: {name.common}</h1>
                <h2>capital: {capital}</h2>
                <h2>Region: {region}</h2>
                <h2>population: {population}</h2>
                <img className='country-img' src={flags.png} alt="" />
            </div>
        </div>
    );
};

export default Country;