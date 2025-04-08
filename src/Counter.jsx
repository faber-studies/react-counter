import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button decrease' onClick={decrement}><span>Diminuir</span></button>
            <button className='counter-button reset' onClick={reset}><span>Resetar</span></button>
            <button className='counter-button increase' onClick={increment}><span>Aumentar</span></button>
        </div>
    )
}

export default Counter