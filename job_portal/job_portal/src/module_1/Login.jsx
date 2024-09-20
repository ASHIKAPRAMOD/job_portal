import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Nav from './Nav'

const Login = () => {
  
  return (
    
    <div className='wrapper'>
       
      <br /><br />

<h2> USER LOGIN</h2>
<TextField label="User name" variant="outlined" required /><br /><br />
<TextField label="Password" type="password" required/><br /><br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <Link to="/forgotpassword">
 Forgot Password?</Link>  
 <br /><br />
 <Link to='/admindashboard'>
<Button variant="contained">Log In</Button>  <br />
</Link>
 
 <p> Don't have an account? &nbsp;<Link to="/signup">
 Sign Up</Link></p>
 <Link to='/home'>
 Back to Home</Link>
 <br />

 
    </div>
  )
}

export default Login