import axios from 'axios';
import React, { useState } from 'react'

function Create() {
  const [values, setValues] = useState({
    name:'',
    email: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/crud', values)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>ADD USER</h2>
          <div className='mb-2'>
            <label htmlFor=''>Name:</label>
            <input type='text' placeholder='Enter Name' className='form-control' 
            onChange={e => setValues({...values, name: e.target.validity})}></input>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>DOB:</label>
            <input type='date' className='form-control'
            onChange={e => setValues({...values, date: e.target.validity})} ></input>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>contact:</label>
            <input type='number' className='form-control'
            onChange={e => setValues({...values, contact: e.target.validity})} ></input>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Altercontact:</label>
            <input type='number' className='form-control'
            onChange={e => setValues({...values, altercontact: e.target.validity})} ></input>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>location:</label>
            <input type='text' className='form-control'
            onChange={e => setValues({...values, location: e.target.validity})} ></input>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>language:</label>
            <input type='text' className='form-control'
            onChange={e => setValues({...values, language: e.target.validity})} ></input>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>designation:</label>
            <input type='text' className='form-control'
            onChange={e => setValues({...values, designation: e.target.validity})} ></input>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Gender:</label>
            <input type='text' className='form-control'
            onChange={e => setValues({...values, Gender: e.target.validity})} ></input>
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create