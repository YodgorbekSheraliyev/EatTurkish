import logo from '../../assets/img/logo/site-logo.svg'
function Navbar(){
    return(
        <nav className=" nav container d-flex justify-content-between ">
            <label  className="header__label">
                <img src={logo} alt="Site logo" className="site-logo" />
            </label>
            <ul className="header__list d-flex ">
                <li className='header__item'>Menu</li>
                <li className='header__item'>News</li>
                <li className='header__item'>About Us</li>
                <li className='header__item'>Constact Us</li>
                <li className='header__item ' ><button className='hero__btn'>Login</button></li>
            </ul>
        </nav>
    )
}
export default Navbar;