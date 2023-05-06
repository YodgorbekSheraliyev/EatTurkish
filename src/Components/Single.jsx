import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Single = () => {
  const [singleData, setSingleData] = useState([]);
  const { id } = useParams();
  let url = `https://api.spaceflightnewsapi.net/v3/articles/${id}`;

  const singleFetchData = async () => {
    try {
      const response = await axios.get(url);
      setSingleData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    singleFetchData();
  }, []);

  return (
    <>
      <div className="single__card">
        <img src={singleData.imageUrl} alt={singleData.title} />
        <h4>{singleData.title}</h4>
        <span>{singleData.site}</span>
        <p>{singleData.summary}</p>
      </div>
      <button className="back__btn"><Link to='/'>back</Link></button>
    </>
  );
};

export default Single;
