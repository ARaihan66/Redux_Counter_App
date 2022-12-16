import React, { useState } from 'react';

const ShowPage = () => {
    const [count, setCount] = useState();
    return (
        <div>
            <h2>COUNTER NUMBER: {count}</h2>
        </div>
    )
}

export default ShowPage
