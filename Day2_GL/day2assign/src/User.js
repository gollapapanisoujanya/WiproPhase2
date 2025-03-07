import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const User = () => {
 const[users, setUsers] = useState([]);
 useEffect(()=>
{
    axios.get("http://localhost:8000/api/users")
    .then(response=>
    {
        console.log(response.data)
         setUsers(response.data)
    })
    .catch(error=>
    {
         console.log("Error fetching data")
    }
    )
},[])

  const DeleteUser = (id)=>
  {
    axios.delete("http://localhost:8000/api/users/delete/"+ id)
    .then(response=>
    {
      console.log(response.data)
    }
    )
  }
    return  (
    <div> <h1>List of Users </h1>
    <table className='table table-success table-striped'>
      <thead>
      <th> Name </th>
      <th> EMail </th>
      <th> Contact Number </th>
      <th> </th>
      </thead> 
      <tbody>
        {users.map(user=>(
          
            <tr>
              <td> {user.name} </td>
              <td> {user.email} </td>
              <td> {user.contact} </td>
              <td> <button type="button" onClick={()=>DeleteUser(user.id)} className='btn btn-danger'> Delete User </button></td>
            </tr>
          )
        )}  
      </tbody> 
      </table> </div>
  )
}
