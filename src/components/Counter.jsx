import { useState } from "react";
import './Counter.css';

export default function Counter(props){
    let [count,setcount]=useState(0)


    const increment = ()=>{
        setcount(++count)

    }
    const decrement=()=>{
        setcount(--count)
    }
    return (
        <>
            <p>Count: {count}</p>
            <hr/>
            <button onClick={increment}>increase</button>
            <button onClick={decrement}>decrease</button>
        </>
    )
}