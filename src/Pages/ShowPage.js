import React, { useState } from 'react';

const ShowPage = () => {
    const [count, setCount] = useState();

    const handleClick = () => {

    }
    return (
        <div>
            <button onClick={handleClick}>INCREMENT</button>
            <h2>COUNTER NUMBER: {count}</h2>
            <button onClick={handleClick}>DECREMENT</button>
        </div>
    )
}

export default ShowPage
