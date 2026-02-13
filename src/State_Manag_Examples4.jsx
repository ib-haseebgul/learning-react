//Exmaple 4 Objects

import { useState } from "react";

export default function State_Manag_Examples4(){
   
    const [student, setStudent] = useState(
        {
            Name:"Ali",
            Class:"BS",
            Age: 14
        }
    )

    return(
        <div>
            <h3>This is Object Example in State Mangement</h3>
            <p>Student: {student.Name}</p>
            <p>Class: {student.Class}</p>
            <p>Age: {student.Age}</p>
            <button onClick={()=> setStudent({...student , Age : student.Age + 1})}>Click Me to change age</button>
        </div>
    )
}