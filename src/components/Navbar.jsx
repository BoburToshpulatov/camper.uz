import React from 'react';
import { Icons, Logodiv, Menu, NavContainer, Select } from './styled';
import hamburger from "../assets/icon-park-outline_hamburger-button.svg"
import cart from "../assets/clarity_shopping-cart-solid (1).svg"
import user from "../assets/bx_bxs-user.svg"
import { Link } from 'react-router-dom';





const Navbar = () => {
  return (
    <NavContainer>
    <Logodiv>
        <img src={hamburger} alt='img' />
        <h1>Camper</h1>
    </Logodiv>
    <Menu>
<Link to='/motor'><p>Motor</p></Link>
<Link to='/caravan'><p>Caravan</p></Link>
<Link to='/tuning'><p>Tuning</p></Link>
<Link to='/usedcar'><p>Used Car</p></Link>
<Link to='/camping'><p>Camping Place</p></Link>
    </Menu>
    <Icons>
      <img src={cart} alt="cart-icon" />
      <img className='user' src={user} alt="user-icon" />
  <Select><option>En</option></Select>
      <img className='hamburg' src={hamburger} alt="" />
    </Icons>
  
  
    
    </NavContainer>
  )
}

export default Navbar