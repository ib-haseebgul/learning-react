import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function Form(){
    const {register, handleSubmit, control, formState} =useForm();
    const {errors} =formState;

    const onSubmit=(data)=>{
        console.log(data)
    }

    return(
        <div>
            <DevTool control={control} placement="top-right" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register("name", {required: "Name is Required"})} /><br />
                {errors.name && <p className="errors">{errors.name?.message}</p>}

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email", {required: "Email is Required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please Enter Correct Email"
                    }
                })} /><br />
                {errors.email && <p className="errors">{errors.email?.message}</p>}

                <label htmlFor="age">Age</label>
                <input type="number" id="age" {...register("age", {required: "Age is Required", 
                    valueAsNumber:true
                })} /><br />
                {errors.age && <p className="errors">{errors.age?.message}</p>}

                <label htmlFor="dob">DOB</label>
                <input type="date" id="dob" {...register("dob", {required: "DOB is Required",
                    valueAsDate:true
                })} /><br />
                {errors.dob && <p className="errors">{errors.dob?.message}</p>}

                <label htmlFor="password">Password</label>
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
        </div>
    )
}