import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    const {flag, alt, name, capital, population } = props;
  return (
    <div className='card'>
        <img src={flag} alt={alt} />
        <h4>Country: {name}</h4>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <button className='info__btn'><NavLink to={`/country/name/${name.toLowerCase()}` }>Read more</NavLink></button>
    </div>
  )
}

export default Card