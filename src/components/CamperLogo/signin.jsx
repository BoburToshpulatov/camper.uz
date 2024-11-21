import React from 'react'
import { Divider, SigninBox, SigninMain, SocialMedia, SocialMediaIcons } from './CamperStylelogo'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import naver from '../../assets/camperlogoimg/vs_naver.svg'
import google from '../../assets/camperlogoimg/akar-icons_google-fill.svg'
import talk from '../../assets/camperlogoimg/ri_kakao-talk-fill.svg'
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SigninComponent = () => {
  return (
    <SigninMain>
<SigninBox>
    <h1>Sign in</h1>
    <p>Email</p>
    <input type="email" name="user_email" placeholder='Your email' />
    <p style={{marginTop:'15px'}}>Password</p>
    <input type="password" placeholder='Your password' />
    <div className='inputCheckbox'>
        <div className='inputlabel'>
        <Checkbox
        {...label}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28,marginLeft:-1 } }}
      />
      <label>Keep me logged in</label>
        </div>
        <div className='Forget'>
        <p>Forget your password ?</p>
        </div>
    </div>
    <Link style={{textDecoration:'none'}} to='/camper-logo'><Button className='ButtonMui' variant="contained">SIGN IN</Button></Link>
    <SocialMedia>
    <Divider>OR</Divider>
    <SocialMediaIcons>
        <button><img src={naver} alt="media-icons" /></button>
        <button style={{background:'#BC0000'}}> <img src={google} alt="media-icons" /></button>
        <button style={{background:' #FFC700'}}> <img src={talk} alt="media-icons" /></button>
    </SocialMediaIcons>
    <Link style={{textDecoration:'none'}} to='/registration'> <Button className='Account' variant="outlined">CREATE ACCOUNT</Button></Link>
</SocialMedia>

</SigninBox>

    </SigninMain>
  )
}

export default SigninComponent