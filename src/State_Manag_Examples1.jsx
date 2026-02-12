// Counter Exmaple
import {useState } from "react";

export default function State_Manag_Examples1(){


    const [counter, setCounter] =useState(0);

    const Incriment=()=> setCounter(counter+1)
    const Decrement=()=> setCounter(counter-1)
    return(
        <div>
            <h1>Below is the State Management Examples</h1>
            <h2>The value of counter is: {counter}</h2>
            <button onClick={Incriment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}
