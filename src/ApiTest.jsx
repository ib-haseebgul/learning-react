import { useEffect, useState } from "react"

export default function ApiTest(){
    const[data,setData]=useState([])
    const[error,setError]=useState()
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        async function fetchData() {
            try {
            await fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json=> setData(json))
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData();
    },[])
    if(loading) return <h2>Loadin....</h2>
    if(error)  return <p>Error fetching Data</p>
    return(
        <div>
            <ul>
                {data.map(todos =>(
                    <li key={todos.id}>
                        {todos.id}-{todos.title}</li>
            ))}
            </ul>
        </div>
    )
}