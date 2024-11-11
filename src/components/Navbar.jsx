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
        <Link to="/" style={{textDecoration:'none'}}><h1>Camper</h1></Link>
    </Logodiv>
    <Menu>
<Link to='/motor' style={{textDecoration:'none'}}><p>Motor</p></Link>
<Link to='/caravan' style={{textDecoration:'none'}}><p>Caravan</p></Link>
<Link to='/tuning' style={{textDecoration:'none'}}><p>Tuning</p></Link>
<Link to='/usedcar' style={{textDecoration:'none'}}><p>Used Car</p></Link>
<Link to='/camping' style={{textDecoration:'none'}}><p>Camping Place</p></Link>
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