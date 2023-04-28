import { useState } from 'react';
import './state.css' ;


const Lesson50 = (props) => {
    const [count, setCount] = useState(1);
    const [dark, setDark] = useState(false)

    const increseCount = () => {
     setCount (  count + 1)
    }

    const decreaseCount = () => {
        setCount( count - 1 );
    }

    const changeColor = () => {
       setDark(!dark);
       
    }


    return (
        <div  className={`${dark ? 'dark':'light'}`}>
            Lesson50
            <h2> {count} </h2>
            <button onClick={increseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={changeColor } className={`${dark ? 'light':'btn'}`}>change color</button>
        </div>
    )
}

export default Lesson50;