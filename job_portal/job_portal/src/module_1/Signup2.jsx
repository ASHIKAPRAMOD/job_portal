import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Signup = () => {
  return (
    <div>
       
      <br /><br /><br />
<h3>ADMIN SIGN UP</h3>
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

      

 <br /><br />
 <Button variant="contained">Reset</Button>  &nbsp;&nbsp;
 <Link to='/login'>
<Button variant="contained">Submit</Button> 
</Link>

<br /><br /><br />
User Sign Up &nbsp;
<Link to="/signup">Sign Up Here</Link>


    </div>
  )
}

export default Signup