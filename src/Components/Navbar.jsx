import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav">
     <div className="container">
     <label >RestCountries</label>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'> About</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
     </div>
    </nav>
  )
}

export default Navbar