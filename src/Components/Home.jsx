import { useEffect, useState } from "react"
import axios from "axios";
import Card from "./Card";

const Home = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/all`)
            setData(response.data);
            // console.log(response);
        } catch (error) {
            // console.error(error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    const myCountries = data.map((country, index) => (
        
        // console.log(country)
        <Card key={index} flag={country.flags.png} 
        alt={country.flags.alt}  name={country.name.common} 
        capital={country.capital} 
        population={country.population}/>

        
    ))
  return (
    <div className="card__wrapper container">
       {myCountries}
    </div>
  )
}

export default Home