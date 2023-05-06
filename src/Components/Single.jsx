import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const Single = () => {
  const [data, setData] = useState([]);
  const { name } = useParams();
  let url = `https://restcountries.com/v3.1/name/${name}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <>
      {data.map((singleData, index) => (
        <div key={index} className="card single__card">
          <img src={singleData.flags.png} alt={singleData.flags.alt} />
          <h4>Country: {singleData.name.common}</h4>
          <p>Capital: {singleData.capital}</p>
          <p>Population: {singleData.population}</p>
          <br />
          <button className="info__btn">
            <NavLink to="/">Back</NavLink>
          </button>
        </div>
      ))}
    </>
  );
};

export default Single;
