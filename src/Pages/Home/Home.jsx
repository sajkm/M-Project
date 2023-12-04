import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Slidebar/Sidebar'
import Timeline from '../../Components/ChatArea/Timeline'
import Welcome from '../../Components/Welcome/Welcome'
import Groups from '../../Components/CreateGroups/Groups'
import Users from '../../Components/Users/Users'
import UGroup from '../../Components/Users/UGroup'
import { Outlet } from 'react-router-dom'

function Home() {
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
    <div className='home rounded'>
      <Sidebar/>
      <Outlet/>
      {/* <Welcome/> */}
      {/* <Groups/> */}
      {/* <Timeline conversation={conversation[0]}/> */}
      {/* <Users/> */}
      {/* <UGroup/> */}
    </div>
  )
}

export default Home