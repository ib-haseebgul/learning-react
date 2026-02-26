import { useState,useEffect } from "react";

export default function useFetch(url){
    const[data,setData]=useState(null);
    const[error,setError] =useState()
    const[loading, setLoading]=useState(true)

    useEffect(()=>{
        async function apiData() {
            try {
                const result =await fetch(url)
                const json = await result.json()
                setData(json)
            } catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        apiData();
    },[url])
    return [data,error,loading]
}

