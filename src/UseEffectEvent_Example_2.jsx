import { useState, useEffect, useEffectEvent } from "react"
export default function UseEfectEvent_Example_2(){
    const [formData, setFormData] = useState({name:"", email:""})
    const saved = useEffectEvent(()=>{
         console.log(formData)
    })
    useEffect(()=>{
        const interval= setInterval(()=>{
            saved();
        },3000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
    return(
        <div>
            <input onChange={(e) => setFormData({...formData, name : e.target.value})} 
            type="text" placeholder="Name" 
            value={formData.name} /><br /><br />
            <input onChange={(e) => setFormData({...formData, email : e.target.value})} 
            type="email"  placeholder="Email"
            value={formData.email} />
        </div>
    )
}