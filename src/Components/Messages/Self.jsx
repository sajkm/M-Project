import React from 'react'
import './messages.css'

function Self() {
  return (
    <div className='self-container'>
        <div className='msgbox shadow rounded'>
        <div className='fw-bolder me-3 ms-1'>This is sample message</div>
        <div className='c-timestamp' style={{alignSelf:"flex-end"}}>12:00am</div>
        </div>
    </div>
  )
}

export default Self