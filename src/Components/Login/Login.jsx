import React from 'react'
import './Login.css'
import logo from '../Logo/logo.png'
import { Button, Form } from 'react-bootstrap'


function Login() {
  return (
     <div className='l-container w-75 d-flex flex-column justify-content-center align-items-center bg-white rounded shadow'>
        <h1 className='fw-bolder mt-4'><i class="fa-brands fa-bounce fa-rocketchat"></i> CHAT ON</h1>
        <div className='row align-items-center'>
            <div className='col-lg-6'>
                <img className='l-image' src={logo} alt=""/>
            </div>
            <div className='col-lg-6'>
            <div className='d-flex align-items-center flex-column m-2'>
                  <p className='fw-bolder mt-2' style={{fontSize:'1.3rem'}}>Login to your Account</p>
                  <Form className='text-light w-100 '>
                    <Form.Group  className='mb-3' controlId='formBasicName'>
                        <Form.Control type='text' placeholder='Username' ></Form.Control>
                    </Form.Group>
                    {/* <Form.Group  className='mb-3' controlId='formBasicEmail'>
                        <Form.Control type='email' placeholder='Enter Email ID'  ></Form.Control>
                    </Form.Group> */}
                    <Form.Group  className='mb-3' controlId='formBasicpaswd'>
                        <Form.Control type='password' placeholder='Password' ></Form.Control>
                    </Form.Group>
                    <Button className='btn rounded'>LOGIN</Button>
                  </Form>
                  </div>
            </div>
        </div>

     </div>
  )
}

export default Login