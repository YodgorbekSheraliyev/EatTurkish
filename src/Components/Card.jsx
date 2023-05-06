import { NavLink } from "react-router-dom"

const Card = (props) => {
    const {id, image, title, summary, site} = props
  return (
    <div className='card'>
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <span>{site}</span>
        <p>{summary}</p>
        <NavLink to={`/home/news/${id}`}>Read more</NavLink>
    </div>
  )
}

export default Card