// Example 2  Toogle Text
import {useState} from 'react'
export default function State_Manag_Examples2(){


    const [isvisible, setIsvisible] =useState(false);

    const handleClick=()=>{
        setIsvisible(!isvisible)
    }
    return(
        <div>
            <button onClick={handleClick}>{isvisible ? "Hide" : "Show"} Text</button>   
            {isvisible && <p>The text is visible now</p>}
            {/* Second way ----- <button onClick={()=> setIsvisible(!isvisible)}>{isvisible ? "Hide" : "Show"} Text</button> */}
        </div>
    )
                    
    
}