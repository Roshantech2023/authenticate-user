import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
   }, [])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-80 bg-white rounded p-3'>
      <h2>User List</h2>
      <div className='d-flex justify-content-end'>
        <Link to="/create" className='btn btn-success'>Add user</Link>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>DOB</th>
            <th>contact</th>
            <th>altercontact</th>
            <th>location</th>
            <th>language</th>
            <th>designation</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crud,index) => {
            return <tr key={index}>
              <td>{crud.ID}</td>
              <td>{crud.name}</td>
              <td>{crud.dob}</td>
              <td>{crud.contact}</td>
              <td>{crud.altercontact}</td>
              <td>{crud.location}</td>
              <td>{crud.language}</td>
              <td>{crud.designation}</td>
              <td>{crud.Gender}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Home