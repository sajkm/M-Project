import React from 'react'
import './Groups.css'

function Groups() {
  return (
    <div className='Group-container shadow rounded m-2'>
      <input className='searchbox w-75' type="text" placeholder='Enter Group Name'/>
      <button className='btn btn-success rounded'>Create</button>
    </div>
  )
}

export default Groups