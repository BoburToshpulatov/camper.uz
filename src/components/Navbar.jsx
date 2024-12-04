import React from 'react';
import { Icons, Logodiv, Menu, NavContainer, Select } from './styled';
import hamburger from "../assets/icon-park-outline_hamburger-button.svg"
import cart from "../assets/clarity_shopping-cart-solid (1).svg"
import user from "../assets/bx_bxs-user.svg"
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';





const Navbar = () => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUserClick = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleUserClose = () => {
    setUserAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const open1 = Boolean(userAnchorEl);
  const id1 = open ? 'simple-popover' : undefined;
  return (
    <NavContainer>
    <Logodiv>
        <img src={hamburger} alt='img'  onClick={handleClick}/>
        <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <Link to='/motor' style={{textDecoration:'none'}}><p>Motor</p></Link>
        <Link to='/caravan' style={{textDecoration:'none'}}><p>Caravan</p></Link>
        <Link to='/tuning' style={{textDecoration:'none'}}><p>Tuning</p></Link>
<Link to='/usedcar' style={{textDecoration:'none'}}><p>Used Car</p></Link>
<Link to='/camping' style={{textDecoration:'none'}}><p>Camping Place</p></Link>
        </Typography>
      </Popover>


        <Link to="/camper-logo" style={{textDecoration:'none'}}><h1>Camper</h1></Link>
    </Logodiv>
    <Menu>
<Link to='/motor' style={{textDecoration:'none'}}><p>Motor</p></Link>
<Link to='/caravan' style={{textDecoration:'none'}}><p>Caravan</p></Link>
<Link to='/tuning' style={{textDecoration:'none'}}><p>Tuning</p></Link>
<Link to='/usedcar' style={{textDecoration:'none'}}><p>Used Car</p></Link>
<Link to='/camping' style={{textDecoration:'none'}}><p>Camping Place</p></Link>
    </Menu>
    <Icons>
      <Link to='/orders'><img src={cart} alt="cart-icon" /></Link>
    <img className='user' src={user} alt="user-icon" onClick={handleUserClick}/>
     <Popover 
        id={id1}
        open={open1}
        anchorEl={userAnchorEl}
        onClose={handleUserClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
        <Link to='/orders' style={{textDecoration:'none'}}><p>My orders</p></Link>
          <Link to='/' style={{textDecoration:'none'}}><p>Log out</p></Link>
        </Typography>
      </Popover>
  <Select><option>En</option></Select>
      <img className='hamburg' src={hamburger} alt="" onClick={handleClick}/>
        <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <Link to='/motor' style={{textDecoration:'none'}}><p>Motor</p></Link>
        <Link to='/caravan' style={{textDecoration:'none'}}><p>Caravan</p></Link>
        <Link to='/tuning' style={{textDecoration:'none'}}><p>Tuning</p></Link>
<Link to='/usedcar' style={{textDecoration:'none'}}><p>Used Car</p></Link>
<Link to='/camping' style={{textDecoration:'none'}}><p>Camping Place</p></Link>
        </Typography>
      </Popover>
    </Icons>
  
  
    
    </NavContainer>
  )
}

export default Navbar