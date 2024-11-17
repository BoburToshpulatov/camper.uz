import styled from "styled-components";


export const FooterContainer=styled.div`
height: 250px;
background: var(--blue, #006DAB);
display: flex;
justify-content: center;
padding: 50px 0px;
`
export const FooterBox1=styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
`
export const FooterLogo=styled.div`
color: #FFF;
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media only screen and (max-width: 750px) {
    display: none;
 }
`
export const FooterLogo2=styled.div`
color: #FFF;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
 display: none; 
 @media only screen and (max-width: 750px) {
    display: flex;
 }
`
export const FooterBox2=styled.div`
display: flex;
flex-direction: column;
flex: 1;
padding-left: 50px;
h1{
    color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
    color: #FFF;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: -5px;
}
@media only screen and (max-width: 750px) {
    display: none;
 }
`
export const FooterBox3=styled.div`
display: flex;
flex-direction: column;
flex: 1;
padding-left: 50px;
h1{
    color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
    color: #FFF;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: -5px;
}
@media only screen and (max-width: 750px) {
    display: none;
 }
`
export const FooterBox4=styled.div`
display: flex;
flex-direction: column;
flex: 1;
padding-left: 50px;
h1{
    color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
@media only screen and (max-width: 750px) {
    display: none;
 }
}
p{
    color: #FFF;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: -5px;
@media only screen and (max-width: 750px) {
    display: none;
 }
}
@media only screen and (max-width: 750px) {
    align-items: center;
 }
`
export const SocialMediaIcons=styled.div`
display: flex;
align-items: center;
gap: 9px;
margin-top: 17px;
margin-bottom: -8px;
@media only screen and (max-width: 750px) {
    margin-top: 9px;
 }
`