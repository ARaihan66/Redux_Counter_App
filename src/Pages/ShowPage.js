import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../Services/Action'

const ShowPage = () => {
    const state = useSelector((state) => state);

    const { count } = state;
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleReset = () => {
        dispatch(reset());
    }

    return (
        <div>
            <h2>COUNTER NUMBER: {count}</h2>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
            <button onClick={handleReset}>RESET</button>
        </div>
    )
}

export default ShowPage
