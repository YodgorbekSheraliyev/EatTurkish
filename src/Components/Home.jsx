import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const Home = () => {

  const [data, setData] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

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
  
  const filteredData = data.filter((news) => {
    if(!searchTitle.trim()){
      return news;
    }else if(news.title.toLowerCase().includes(searchTitle.toLowerCase())){
      return news;
    }
  }).map((news) =>(
    <Card key={news.id} id={news.id} image={news.imageUrl} 
    title={news.title} summary={news.summary} site={news.newsSite}/>
    ));
  
  return (
    <>
      <input type="text" value={searchTitle} onChange={(e)=> setSearchTitle(e.target.value)}  />
    <div className='card__wrapper container'>
      {filteredData}
    </div>
    </>
  )
}

export default Home