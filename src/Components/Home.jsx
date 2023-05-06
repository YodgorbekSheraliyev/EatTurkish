import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const Home = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
    const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles');
    setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])
  
  const myCards = data.map((news) =>(
  <Card key={news.id} id={news.id} image={news.imageUrl} 
  title={news.title} summary={news.summary} site={news.newsSite}/>
  ));
  
  return (
    <div className='card__wrapper container'>
      {myCards}
    </div>
  )
}

export default Home