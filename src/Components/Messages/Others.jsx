import React from 'react'
import { Avatar } from '@mui/material'

function Others() {
  return (
    <>
    <div className='d-flex'>
        <div className='c-icon mt-2'><Avatar/></div>
        <div className='Con-container shadow rounded mt-2'>
            <div className='d-flex flex-column ms-2'>
                <div className='c-title fw-bolder '>jdkwj</div>
                <div className='c-lastmsg mt-1'>jkedkj how are you</div>
                <div className='c-timestamp mt' style={{alignSelf:"flex-end"}}>12:00am</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Others