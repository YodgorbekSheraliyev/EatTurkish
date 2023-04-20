import Hero from "./Hero";
import Navbar from "./Navbar";
import './header.css';

function Header(){
    return(
        <header className="header ">
            <Navbar/>
            <Hero/>
        </header>
    )
}
export default Header;