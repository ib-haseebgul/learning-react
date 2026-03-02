import React, { useMemo, useState } from "react"

function UseMemo_Examp(){
    const [count, setCount] = useState(0)
    const hardCalculations=()=>{
        let total =0;
        for(let i=0;i<=100000000;i++){
            total +=i;
        }
        return total;
    }
    const result = useMemo(()=>  hardCalculations(),[count])
    const user =useMemo(()=>({name:"Ali", id:2}),[])
    console.log("Parent rerender")
    return(
        <div>
            <button onClick={()=> setCount(count +1)}>Count</button>
            <h3>Count: {count}</h3>
             <h3>{result}</h3>
             <Child user={user} />
        </div>
    )
}

const Child =React.memo(({user})=>{
     console.log("Child rerender")
    return(
        <div>
            <h3>This is child of useMemo</h3>
            <p>User is {user.id}- {user.name}</p>
        </div>
        
    )
})
export default UseMemo_Examp