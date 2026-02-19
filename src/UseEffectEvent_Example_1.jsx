import {useState, useEffect, useEffectEvent } from "react"

export default function UseEffectEvent_Example_1(){
    const [count, setCount] = useState(0)

    const saved = useEffectEvent(()=>{
         console.log ("count is :", count)
         setCount(count=>count+1)
    })

    useEffect(()=>{
       const interval= setInterval(()=>{
            saved();
        },1000)
        return ()=>{
             clearInterval(interval)
        }
    },[])
    return(
        <div>
            <h3>The value of count is: {count}</h3>
        </div>
    )
    
}