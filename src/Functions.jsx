function Functions(){             //simple function

const handleClick=()=> alert("Button was Click!") //nestesd arrow function
const handleChange=(e)=> {                        //handleChange arrow function
    console.clear();
    console.log("value:",e.target.value);
}
const handleMouseOver=()=> console.log("Mouse is Over the Paragraph")
const handleDoubleClick=()=> console.log("Paragraph is Double Clicked")
    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
            <button onMouseOver={()=> alert("The Mouse is over the Button!")}>Hover Me</button><br />  
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Paragraph to test Multiple Events.On Mouse Hover & On DoubleClick</p><br />
            <input type="text" onChange={handleChange}placeholder="Write Something"></input><br />
        
        </div>
    );
}
export default Functions
