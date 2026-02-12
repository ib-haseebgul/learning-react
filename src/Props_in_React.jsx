            // First Method of printing props 

// export default function Props_in_React(props){
//     return(
//         <div>
//             <h2>Hello This is a:{props.part_1}</h2>
//             <h3>This above method is the first way of{props.part_2} in React</h3>
//         </div>
//     )
// }



                 // Second Method of printing props 

// export default function Props_in_React(props){
//     const {name,age,city}= props
//     return(
//         <div>
//             <h2>Below is the second Method of using Props</h2>
//             <h3>Hello my Name is {name} i am {age} years old and i live in {city}</h3>
//         </div>
//     )
// }



//                 Third Method of printing props

// export default function Props_in_React({name, gender}){
//     return(
//         <div>
//             <h2>Below is the Thirst Method of using Props</h2>
//             <h3>Hello my Name is {name} i am {gender} </h3>
//         </div>
//     )
// }



//                 Setting default value of prop

// export default function Props_in_React({name, gender="unknown"}){
//     return(
//         <div>
//             <h2>Below is the setting default value of  Props</h2>
//             <h3>Hello my Name is {name} my gender is {gender} </h3>
//         </div>
//     )
// }



//                    Calling a Button in Props

// export default function Props_in_React({label, handleClick}){
//     return(
//         <div>
//             <h2>Below is the calling and printing function in Props</h2>
//             <button onClick={handleClick}>{label}</button>
//         </div>
//     )
// }



//                    Use of array in Props

// export default function Props_in_React({hobbies}){
//     return(
//         <div>
//             <h2>Below is the use of arrays in Props</h2>
//             <ul>{hobbies.map((hobby,index)=>(
//                 <li key={hobby}>{index} - {hobby}</li>
//             ))}</ul>
//         </div>
//     )
// }


//                Use of Objects in Props 

export default function Props_in_React({obj}){
    return(
        <div>
            <h1>Below is the use of objects in Props</h1>
            <ul>{Object.entries(obj).map(([object,index])=>(
                <li key={object}>{object} - {index} </li>
            ))}</ul>
        </div>
    )
}

