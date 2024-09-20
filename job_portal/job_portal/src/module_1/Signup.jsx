import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Signup = () => {
  return (
    <div className='dell'>
       
      <br />
<h3>USER SIGN UP</h3>
         <TextField 
          required
          id="outlined-required"
          label="Full Name"
          variant="filled"
          ></TextField>
          &nbsp;&nbsp;&nbsp;

          <TextField 
          required
          id="outlined-required"
          label="Email ID"
          variant="filled"
          ></TextField>
          <br /><br />

          <TextField 
          required
          id="outlined-required"
          type="password"
          autoComplete="current-password"
          label="Password"
          variant="filled"
          ></TextField>&nbsp;&nbsp;&nbsp;


          <TextField 
          required
          id="outlined-required"
          label="Mobile Number"
          defaultValue="+91 &nbsp;"
          variant="filled"
          ></TextField>
          <br /><br />

          <TextField 
          required
          id="outlined-required"
          label="City"
          variant="filled"
          ></TextField> &nbsp;&nbsp;

           <TextField 
          required
          id="outlined-required"
          label="Qualification"
          variant="filled"
          ></TextField><br /><br />
         
        
          Upload Resume :&nbsp;
          <TextField 
          required
          id="outline-size-normal"
          type="file"
          variant="filled"
          ></TextField>
 <br /><br />
 <Button variant="contained">Reset</Button>  &nbsp;&nbsp;
 <Link to='/login'>
<Button variant="contained" >Submit</Button> 
</Link>


<br /><br /><br />
Admin Sign Up &nbsp;
<Link to="/signup2">Sign Up Here</Link>
<br /><br />


    </div>
  )
}

export default Signup