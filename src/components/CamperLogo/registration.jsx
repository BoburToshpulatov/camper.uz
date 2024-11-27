import React from 'react'
import {SigninBox, SigninMain } from './CamperStylelogo'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const RegistrationComponent = () => {
  return (
    <SigninMain>
    <SigninBox style={{height:'460px'}}>
        <h1>Registrate</h1>
        <p>Email</p>
        <input type="email" name="user_email" placeholder='Your email' />
        <p style={{marginTop:'15px'}}>Password</p>
        <input type="password" placeholder='Your password' />
        <p style={{marginTop:'15px'}}>Repeat your password</p>
        <input type="password" placeholder='Your password' />
        <div className='inputCheckbox'>
            <div className='inputlabel'>
            <Checkbox
            {...label}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28,marginLeft:-0.5 } }}
          />
          <label>Keep me logged in</label>
            </div>
            </div>
        <Link style={{textDecoration:'none'}} to='/'><Button style={{marginTop:'20px'}} className='ButtonMui' variant="contained">REGISTRATE</Button></Link>
    
    
    </SigninBox>
    
        </SigninMain>
  )
}

export default RegistrationComponent