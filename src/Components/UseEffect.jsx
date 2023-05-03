import { useState, useEffect } from "react";
import axios from "axios";

const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [state1, setState1] = useState('Example state');
  const [data, setData] = useState([]);
  
  const fetchData = async() =>{
     try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`);
        setData(response.data)
     } catch (error) {
        console.error(error)
     }
  }


  const handlePost = () => {
    setResourceType('posts')
  };
  const handleUsers = () => {
    setResourceType('users')
  };
  const handleComments = () => {
    setResourceType('comments')
  };
  const handleState = () =>{
    setState1('State changed')
  }

  useEffect(() => {
    fetchData()
  },[resourceType])
  return <div>
    <h1>{resourceType}</h1>
    <button onClick={handlePost}>Posts</button>
    <button onClick={handleUsers}>Users</button>
    <button onClick={handleComments}>Comments</button>
    <button onClick={handleState}>{state1}</button>

    <ul>
        {data.map((info) => (
            <li key={info.id}>{info.body}</li>
        ))}
    </ul>
  </div>;
};

export default UseEffect;
