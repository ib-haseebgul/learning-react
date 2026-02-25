import React,{ useCallback, useState } from "react"

export default function UseCallback(){
    const [count, setCount] =useState(0)
    const handleClick =useCallback(()=>{
        console.log("Button is Clicked")
    },[])
    return(
        <div>
            <h3>---------------Use Call Back Example-------------</h3>
            <h3>Count: {count}</h3>
            <button onClick={()=> setCount(count+1)}>Parent Button</button><br />
            <Child click={handleClick} />
        </div>
    )
}
const Child =React.memo(({click})=>{
    console.log("Child Rendered")
    return(
        <div>
            <button onClick={click}>Child Button</button>
        </div>
    )
})