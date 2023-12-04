import React from 'react'
import './Users.css'
import logo from '../Logo/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import {Avatar} from '@mui/material';

function UGroup() {
  return (
    <div className='User-container'>
      <div className="user-header shadow rounded ">
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
          />
          <p className='h5 ms-3 mt-2'>Online Groups</p>
      </div>  
      <div className='searchbar shadow rounded mt-3'>
        <IconButton><SearchIcon/></IconButton>
        <input className='searchbox' type="text" placeholder='Search'/>
      </div>  
      <div className='User-list mt-3'>
        <div className='List-items shadow rounded mt-2'>
           <div className='c-icon m-1'><Avatar/></div>
           <div className='c-title fw-bolder '>Test User</div>
        </div>

        <div className='List-items shadow rounded mt-2'>
           <div className='c-icon m-1'><Avatar/></div>
           <div className='c-title fw-bolder '>Test User</div>
        </div>

        <div className='List-items shadow rounded mt-2'>
           <div className='c-icon m-1'><Avatar/></div>
           <div className='c-title fw-bolder '>Test User</div>
        </div>

        <div className='List-items shadow rounded mt-2'>
           <div className='c-icon m-1'><Avatar/></div>
           <div className='c-title fw-bolder '>Test User</div>
        </div>

        <div className='List-items shadow rounded mt-2'>
           <div className='c-icon m-1'><Avatar/></div>
           <div className='c-title fw-bolder '>Test User</div>
        </div>
      </div>
    </div>
  )
}

export default UGroup