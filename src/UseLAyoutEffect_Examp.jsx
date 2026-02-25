import { useState, useRef, useLayoutEffect } from "react"

export default function UseLayoutEffect_Examp(){
    const [height, setHeight] =useState(0)
    const heightRef =useRef(null);
    // Layout Effect runs just before the html renders
    useLayoutEffect(()=>{            
        setHeight(heightRef.current.clientHeight)
        heightRef.current.style.transform ="translateX(300px)"
    },[])
    return(
        <div ref={heightRef} style={{width:"350px", backgroundColor:"blue", textAlign:"center", transition:"3s"}}>
            <h3>This is Layout Effect Example</h3>
            <p>Height is {height}px</p>
        </div>
    )
}