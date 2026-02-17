import { useState, useEffect } from 'react'

function UseEffect_Simp_Exp_2() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [])

  return (
    <div>
        <h1>Use Effect Example 2 API Call</h1>
        <h2>User List</h2>
        {users.map((u) =>(
            <li key={u.id}>{u.id} - {u.name}</li>
        ))}
    </div>
  )
}

export default UseEffect_Simp_Exp_2