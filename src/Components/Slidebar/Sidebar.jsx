import React, { useState } from 'react'
import './sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import Conversation from '../Conversations/Conversation';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();
  const [conversation,setConversation] = useState([
    { 
    name:"John Doe",
    message:"Hello",
    timestamp:'today'
    },
    { 
      name:"John Doe",
      message:"Hello",
      timestamp:'today'
    },
    { 
      name:"John Doe",
      message:"Hello",
      timestamp:'today'
    },
    { 
      name:"John Doe",
      message:"Hello",
      timestamp:'today'
    }
  ])
 
  return (
    <div className='sidebar '>
        <div className='S-header'>
          <div>
            <IconButton>
                <AccountCircleIcon />
            </IconButton>
          </div>
          <div className='d-flex flex-column'>
            <IconButton>
                <PersonAddIcon onClick={()=>{navigate('users')}}/>
            </IconButton>
            <IconButton>
                <GroupAddIcon onClick={()=>{navigate('ugroup')}}/>
            </IconButton>
            <IconButton>
                <AddCircleIcon onClick={()=>{navigate('create-grp')}}/>
            </IconButton>
            <IconButton>
                <DarkModeIcon />
            </IconButton>
          </div>
        </div>
        <div className='container'>
            <div className='searchbar'>
                <IconButton><SearchIcon/></IconButton>
                <input className='searchbox' type="text" placeholder='Search'/>
            </div>
            <div className='chats'>
              {conversation.map((conversation)=>{
                return <Conversation conversation={conversation} />
              })
                }
            </div>
        </div>
    </div>
  )
}

export default Sidebar