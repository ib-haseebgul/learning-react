function Classes_Objects(){

    const fruits=["Apple","BAnana","Orange"]     // class example
    const cars={Name:"Buggati",Price:"5M$",Model:"2002"}    //object example
    const user={firstName:"Ali",lastName:"Tareen",age:"49"}   
     function fullName(user){
        return user.firstName + " "+ user.lastName + " and the age is " + user.age    
     }
    return(
        <div>
            <h3>This is Class Example</h3>
            <ul>
                {fruits.map((fruit,index)=>(
                   <li key={fruit}> {index}- {fruit}</li>
                ))}
            </ul>
            <h3>This is Object Example</h3>
            <p>My car name is {cars.Name}, the price was {cars.Price} and the model is {cars.Model}</p>
            <p>Full Name is: {fullName(user)}</p>
        </div>
     )
     
}
export default Classes_Objects