import React from 'react'
import './timeline.css'
import { Avatar, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Others from '../Messages/Others';
import Self from '../Messages/Self';

function Timeline({conversation}) {
  return (
    <div className='timeline'>
      <div className='Header shadow rounded'>
      <div className='c-icon ms-1'><Avatar/></div>
          <div className='d-flex flex-column ms-3' style={{flex:'1'}}>
              <div className='c-title fw-bolder'></div>
              <div className='c-lastmsg mt-1'></div>
          </div>  
          <IconButton ><DeleteIcon/></IconButton>
        </div>
      <div className='Messages shadow rounded'>
        <Others/>
        <Self/>
      </div>
      <div className='Text shadow rounded'>
      <input className='searchbox' type="text" placeholder='Type a message'/>
      <IconButton ><SendIcon/></IconButton>
      </div>
    </div>
  )
}

export default Timeline