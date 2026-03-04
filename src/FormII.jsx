import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";

export default function FormI(){
    const {register, handleSubmit, control, formState, reset} =useForm();
    const {errors, isSubmitSuccessful} =formState;
    const [submittedData, setSubmittedData]=useState("");

    useEffect(()=>{
        reset();
    },[isSubmitSuccessful])

    return(
        <div className="main">
            <DevTool control={control} placement="top-right" />
            <form className="my-from" onSubmit={handleSubmit(setSubmittedData)}>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" {...register("name", {required: "Name is Required"})} /><br />
                {errors.name && <p className="errors">{errors.name?.message}</p>}

                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" {...register("email", {required: "Email is Required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please Enter Correct Email"
                    },
                    validate: {
                        apiEmail: async(userEmail)=>{
                            const apiData = await fetch(`https://jsonplaceholder.typicode.com/users?email=${userEmail}`)
                            const result = await apiData.json();
                            return result.length === 0 || "Email Already Exists"
                        }
                    }
                })} /><br />
                {errors.email && <p className="errors">{errors.email?.message}</p>}

                <label htmlFor="age">Age</label><br />
                <input type="number" id="age" {...register("age", {required: "Age is Required", 
                    valueAsNumber:true
                })} /><br />
                {errors.age && <p className="errors">{errors.age?.message}</p>}

                <label htmlFor="gender">Gender</label><br />
                    <label htmlFor="gender">
                        <input type="radio" value="male" {...register("gender", {required: "Gender is Required"})} />
                        Male</label>
                    <label htmlFor="gender">
                        <input type="radio" value="female" {...register("gender")} />
                        Female</label><br /><br />
                {errors.gender && <p className="errors">{errors.gender?.message}</p>}

                <label htmlFor="skills">Skills</label><br />
                    <label htmlFor="skills">
                        <input type="checkbox" value="react" {...register("skills", {required: "Skills is Required"})} />
                        React JS</label>
                    <label htmlFor="skills">
                        <input type="checkbox" value="node" {...register("skills")} />
                        Node JS</label><br /><br />
                {errors.skills && <p className="errors">{errors.skills?.message}</p>}

                <label htmlFor="country"> Country</label>
                <select id="country"  {...register("country",  {required: "Country is Required"})}>
                    <option value="">Select Country</option>
                    <option value="pak">Pakisan</option>
                    <option value="ind">India</option>
                    <option value="bang">Bangladesh</option>
                </select><br /><br />
                {errors.country && <p className="errors">{errors.country?.message}</p>}

                <label htmlFor="dob">DOB</label><br />
                <input type="date" id="dob" {...register("dob", {required: "DOB is Required",
                    valueAsDate:true
                })} /><br />
                {errors.dob && <p className="errors">{errors.dob?.message}</p>}

                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" {...register("password", {required: "Password is Required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters"
                        },
                    maxLength: {
                        value: 14,
                        message: "Password cannot exceed 14 characters"
                        },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/,
                        message:"Password must include one uppercase, lowercase, number, and special character"
                        }
                    })} /><br />
                    {errors.password && <p className="errors">{errors.password?.message}</p>}

                <button type="submit">Submit</button>
            </form>
            {submittedData && 
                <div>
                    <h2>Submitted Data</h2>
                    <pre>{JSON.stringify(submittedData,null,1)}</pre>
                </div>
            }
        </div>
    )
}