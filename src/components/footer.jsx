import React from 'react'
import { FooterBox1, FooterBox2, FooterBox3, FooterBox4, FooterContainer, FooterLogo, FooterLogo2, SocialMediaIcons } from './footerStyle'
import youtube from '../assets/cib_youtube.svg'
import insta from '../assets/instagramm.svg'
import naver from '../assets/simple-icons_naver.svg'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterBox1>
            <FooterLogo>Camper</FooterLogo>
            <FooterLogo2>Logo</FooterLogo2>
        </FooterBox1>
        <FooterBox2>
            <h1>Services</h1>
            <p style={{marginTop:'20px'}}>Camping</p>
            <p>Lodging</p>
            <p>Harbor</p>
            <p>Day use</p>
        </FooterBox2>
        <FooterBox3>
        <h1>Menu</h1>
            <p style={{marginTop:'20px'}}>About</p>
            <p>Services</p>
            <p>Booking</p>
            <p>Blog</p>
        </FooterBox3>
        <FooterBox4>
            <h1>Contact</h1>
            <SocialMediaIcons>
                <img style={{width: '25.429px',height: '25.429px'}} src={youtube} alt="youtube-icon" />
                <img style={{width: '20.343px',height: '21.19px'}} src={insta} alt="instagram-icon" />
                <img style={{width: '19.495px',height: '20.343px'}} src={naver} alt="naver-icon" />
                </SocialMediaIcons>
                <p>021 Korea Seul, LA</p>
                <p>camper@example.com</p>
                <p>(021) 345-6789-99</p>
        </FooterBox4>
    </FooterContainer>
  )
}

export default Footer