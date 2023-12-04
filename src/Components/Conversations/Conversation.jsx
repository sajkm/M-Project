import React from 'react'
import "./conversation.css"
import { Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Conversation({conversation}) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate('timeline')}} className='Con-container shadow rounded mt-2'>
        <div className='c-icon'><Avatar variant={conversation.name[0]}/></div>
        <div className='d-flex flex-column ms-2' style={{width:'200px'}}>
            <div className='c-title fw-bolder '>{conversation.name}</div>
            <div className='c-lastmsg mt-1'>{conversation.message}</div>
        </div>
        <div className='c-timestamp mt-5'>{conversation.timestamp}</div>
    </div>
  )
}

export default Conversation