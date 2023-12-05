import React, { useState } from 'react'
import './Login.css'
import { loginAPI,registerAPI } from '../../Service/allAPI'
import logo from '../Logo/logo.png'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function Login({register}) {

  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    name:"",email:"",password:""
  })
    const isRegisterForm = register?true:false

    const handleRegister = async (e)=>{
      e.preventDefault()
      const {name,email,password} = userData
      if(!name || !email || !password){
        toast.info("please fill the form completely!!!")
      }else{
        const result = await registerAPI(userData)
        if(result.status===200){
          toast.success(`${result.data.name} has registered successfully!!!`)
          setUserData({
            name:"",email:"",password:""
          })
          navigate('/login')
        }else{
          toast.warning(result.response.data)
          console.log(result);
        }
      }
    }

    const handleLogin = async (e)=>{
      e.preventDefault()
      const {name,password} = userData;
      if(!name || !password){
        toast.info("please fill the form completely!!!")
      }else{
        const result = await loginAPI(userData)
        if(result.status===200){
          sessionStorage.setItem("UserExist",JSON.stringify(result.data.UserExist))
          sessionStorage.setItem("token",result.data.token)
          setUserData({
            name:"",password:""
          })
          navigate('/app/welcome')
        }else{
          toast.warning(result.response.data)
          console.log(result);
        }
      }
    }
  return (
     <div className='l-container w-75 d-flex flex-column justify-content-center align-items-center bg-white rounded shadow'>
        <h1 className='fw-bolder mt-4'><i class="fa-brands fa-bounce fa-rocketchat"></i> CHAT ON</h1>
        <div className='row align-items-center'>
            <div className='col-lg-6'>
                <img className='l-image' src={logo} alt=""/>
            </div>
            <div className='col-lg-6'>
            <div className='d-flex align-items-center flex-column m-2'>
            <h5 className='fw-bolder mt-2 pb-3'>
                    {
                        isRegisterForm ? 'Signup to your Account':'Sign In to your Account'
                    }
                  </h5>
                  <Form className='w-100 '>
                    <Form.Group  className='mb-3' controlId='formBasicName'>
                        <Form.Control type='text' placeholder='Username' value={userData.name} onChange={e=>setUserData({...userData,name:e.target.value})}></Form.Control>
                    </Form.Group>
                    {isRegisterForm &&
                        <Form.Group  className='mb-3' controlId='formBasicEmail'>
                        <Form.Control type='email' placeholder='Enter Email ID'  value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})}></Form.Control>
                    </Form.Group>}
                    <Form.Group  className='mb-3' controlId='formBasicpaswd'>
                        <Form.Control type='password' placeholder='Password' value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})}></Form.Control>
                    </Form.Group>
                    {
                        isRegisterForm ?
                        <div >
                            <button className='btn btn-primary rounded mb-2' onClick={handleRegister}>Register</button>
                            <p>Already have Account? Click here to <Link to={'/login'}>Login</Link></p>
                            </div>:
                            <div>
                                <button className='btn btn-primary rounded mb-2' onClick={handleLogin}>Login</button>
                                <p>New User? Click here to <Link to={'/'} >Register</Link></p>
                            </div>
                    }
                  </Form>
                  </div>
            </div>
        </div>
        <ToastContainer position='top-right' autoClose={2000} theme="colored"/>
     </div>
  )
}

export default Login