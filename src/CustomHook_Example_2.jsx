import useFetch from "./hooks/useFetch"

export default function CustomHook_Example_2(){
    const [data,error,loading]=useFetch("https://jsonplaceholder.typicode.com/users")

    if(loading) return <h2>Loading Data.....</h2>
    if(error)  return <h2>ErrorFetching Data  </h2>

    return(
        <div>
           <ul>
            {data.map(user =>(
                <li key={user.id}>
                    User ID: {user.id}---- {user.name}------- {user.email}</li>
            ))}
           </ul>
        </div>
    )
}