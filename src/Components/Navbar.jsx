import { NavLink } from "react-router-dom"

NavLink
const Navbar = () => {
  return (
    <div>
        <ul>
            <li><NavLink to='/'>Homew</NavLink></li>
            <li><NavLink to='/about'> About</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar