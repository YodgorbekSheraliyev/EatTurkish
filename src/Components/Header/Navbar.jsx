import logo from '../../assets/img/logo/site-logo.svg';
import { useState } from 'react';

function Navbar(){
    const [sun, setSun] = useState(false);
    const changeIcon = () => {
        setSun(!sun)
        if(sun){
            document.querySelector('.header').style.background = 'black'
        }
        else{
            document.querySelector('.header').style.background = ''

        }
    }
    return(
        <nav className=' nav container d-flex justify-content-between' >
            <label  className="header__label">
                <img src={logo} alt="Site logo" className="site-logo" />
            </label>
            <ul className="header__list d-flex ">
                <li className='header__item'>Menu</li>
                <li className='header__item'>News</li>
                <li className='header__item'>About Us</li>
                <li className='header__item'>Constact Us</li>
                <li className='header__item ' ><button className='hero__btn'>Login</button></li>
                <li className='header__item' onClick={changeIcon}><i className={sun ? 'sun-light  fa-solid fa-sun':'sun-light  fa-solid fa-moon'}></i></li>
            </ul>
        </nav>
    )
}
export default Navbar;