import { useEffect, useState } from "react";
import axios from "axios";
import './Homework.css';

const Homework52 = () => {
  const [state, setState] = useState('https://restcountries.com/v3.1/all');
  const [data, setData] = useState([]);

  const handleUzb = () => {
    setState('https://restcountries.com/v3.1/name/uzbekistan');
  };
  const handleGermany = () => {
    setState('https://restcountries.com/v3.1/name/germany')
  }
  const handleAll = () => {
    setState('https://restcountries.com/v3.1/all')
  }

  const fetchData = async () => {
    try {
        const response = await axios.get(state);
        // console.log(response.data);
        setData(response.data);

    } catch (error) {
        console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [state])
  return (
    <div>
      <div className="btn__wrapper">
        <button onClick={handleUzb}>O'zbekiston</button>
        <button onClick={handleGermany}>Germaniya</button>
        <button onClick={handleAll}>Barchasi</button>
      </div>
      <div className="country__wrapper">
        {data.map((country, index) => (
            //{console.log(country)}
            <div className="box" key={index}>
                {console.log(country.capital)}
                <img src={country.flags.png} alt={country.name.common} className="box__img" />
                <h3>{country.name.common}</h3>
                {/* {let capital = Object.value(country.capital)} */}
                <p>Capital: {country.capital}  </p>
                <p>Population: {country.population}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Homework52;
