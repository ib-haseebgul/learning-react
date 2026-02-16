import {useState} from 'react'
export default function Form_Creation(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Name:" , name)
         console.log("Email:" , email)
    }
    return(
        <div >
            <h1>Below is the Example of how to create Simple Form</h1>
            <form  style={{display: 'flex', flexDirection: 'column', marginRight:'1000px' }} onSubmit={handleSubmit}>
            <input onChange={(e)=> setName(e.target.value)} value={name} type ="text" name="name" placeholder="Enter Your Name"></input><br />
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type ="email" name="email" placeholder="Enter Your Email"></input><br />
            <button style={{ margin:'20px 200px 0 0' }} type="submit">Submit</button>
            </form>
        </div>
    )
}