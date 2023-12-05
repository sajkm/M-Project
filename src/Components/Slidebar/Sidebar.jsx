import React, { useEffect, useState } from 'react'
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
import { getAllFriendsAPI } from '../../Service/allAPI';

function Sidebar() {

  const navigate = useNavigate();
  const [allfriends,setAllFriends] = useState([])
  
  const getAllFriends = async () => {
    const searchKey = "";
    try {
      let res = await getAllFriendsAPI(searchKey);
      if (res.status === 200) {
        setAllFriends(res.data);
      } else {
        console.error(`Error: Unexpected status code ${res}`);
        // You might want to show an error message to the user or perform other error handling actions.
      }
    } catch (error) {
      console.error('Error:', error.message);
      // You might want to show an error message to the user or perform other error handling actions.
    }
  };

  useEffect(()=>{
    getAllFriends();
  },[])
  console.log(allfriends);
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
              {allfriends.map((conversation)=>{
                return <Conversation conversation={conversation} />
              })
                }
            </div>
        </div>
    </div>
  )
}

export default Sidebar