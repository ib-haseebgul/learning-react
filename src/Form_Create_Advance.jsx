import {useState} from 'react'
export default function Form_Create_Advance(){
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        gender:"",
        age:18,
        password:"",
        country:"Pakistan",
        agree:false
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
        

    }
    const handleChange=(e)=>{
        const { name, type, checked, value} =e.target;
        setFormData((previous)=>({
            ...previous, 
            [name] : type === "checkbox" ? checked : value }))
    }
    return(
        <div>
             <h1>Below is the Example of how to create Advance Form</h1>
            <form style={{display: 'flex', flexDirection: 'column', marginRight:'1000px' }} onSubmit={handleSubmit}>
            <input onChange={handleChange} value={formData.name} type ="text" name="name" placeholder="Enter Your Name"></input><br />
            <input onChange={handleChange} value={formData.email} type ="text" name="email" placeholder="Enter Your Email"></input><br />
            <input onChange={handleChange} value={formData.age} type ="number" name="age" placeholder="Enter Your Age"></input><br />
            <input onChange={handleChange} value={formData.password} type ="password" name="password" placeholder="Enter Your Password"></input><br />
            <label>Country :
                <select name= "country" value={formData.country} onChange={handleChange}>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Saudia Arabia">Saudia Arabia</option>
                </select>
            </label><br />
            <label>
            <label><input onChange={handleChange} checked={formData.gender === "Male"} value="Male" type ="radio" name="gender" />Male</label>
            <label><input onChange={handleChange} checked={formData.gender === "Female"} value="Female" type ="radio" name="gender" />Female</label><br />
            <input onChange={handleChange} checked={formData.agree} type="checkbox" name="agree" />I agree to terms & conditions</label><br />
            <button style={{margin:'20px 200px 0 0'}} type="submit">Submit</button>
            </form>
        </div>
    )
}