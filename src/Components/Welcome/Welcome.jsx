import React from 'react'
import './Welcome.css'
import logo from '../Logo/logo.png'
import LockIcon from '@mui/icons-material/Lock';

function Welcome() {
  return (
    <div className='Welcome-Container'>
      <img className='w-25 ' src={logo} alt="" />
      <p>Send and receive messages from people in the chat app.</p>
      <div className='mt-5'>
        <p><LockIcon/> End-to-end encrypted</p>
      </div>
    </div>
    
  )
}

export default Welcome