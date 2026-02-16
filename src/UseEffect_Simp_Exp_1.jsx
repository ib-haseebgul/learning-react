import { useState, useEffect } from 'react'

function UseEffect_Simp_Exp_1() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(()=>{
            setSeconds((prev) => prev + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
            console.log("Timer Cleared.")
        }
    }, [])

  return (
    <div>
        <h1>Use Effect Example 1</h1>
        <h2>Seconds : {seconds}</h2>
    </div>
  )
}

export default UseEffect_Simp_Exp_1