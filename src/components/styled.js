import styled from "styled-components";
import img from "../assets/image copy.png"
import caravanback from '../assets/image 5 (2).svg'
import usedcarback from '../assets/image copy 2.png'
import tuningback from '../assets/image copy 3.png'


export const NavContainer = styled.div`
height: 60px;
display: flex;
justify-content: space-around;
align-items: center;
padding: 5px 0px;



`
export const Logodiv = styled.div`
display: flex;
justify-content: center;
gap: 8px;
margin-top: -5px;
img{
    display: none;
    @media only screen and (max-width: 990px) {
    display: flex;
}
@media only screen and (max-width: 550px) {
    display: none;
}
}
h1{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 44px;
font-style: normal;
font-weight: 600;
line-height: normal;

}
`
export const Menu = styled.div`
display: flex;
align-items: center;
gap: 50px;
margin-left: 50px;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 550;
line-height: normal;
}

@media only screen and (max-width: 990px) {
    display: none;
}
`
export const Select = styled.select`
border: none;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const Icons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
margin-top: 3px;
.hamburg{
    display: none;
    @media only screen and (max-width: 550px) {
    display: flex;
}
}
Select{
    @media only screen and (max-width: 550px) {
    display: none;
}
}
.user{
    @media only screen and (max-width: 550px) {
    display: none;
}
}
`
export const Background=styled.div`
background-image: url('${img}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3{
    color: #FFF;
font-family: Montserrat;
font-size: 11px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
h2{
    color: #FFF;
font-family: Montserrat;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 1px;
margin-bottom: -1px;
}
h1{
    color: #FFF;
font-family: Montserrat;
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: -3px;
}
` 
export const BackgroundCaravan=styled.div`
background-image: url('${caravanback}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3{
    color: #FFF;
font-family: Montserrat;
font-size: 11px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
h2{
    color: #FFF;
font-family: Montserrat;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 1px;
margin-bottom: -1px;
}
h1{
    color: #FFF;
font-family: Montserrat;
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: -3px;
}
` 

export const BackgroundTuning=styled.div`
background-image: url('${tuningback}');
background-position: center;
background-repeat: no-repeat;
background-size:  cover;
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3{
    color: #FFF;
font-family: Montserrat;
font-size: 11px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
h2{
    color: #FFF;
font-family: Montserrat;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 1px;
margin-bottom: -1px;
}
h1{
    color: #FFF;
font-family: Montserrat;
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: -3px;
}
` 

export const BackgroundUsedcar=styled.div`
background-image: url('${usedcarback}');
background-position: bottom;
background-repeat: no-repeat;
background-size: cover;
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3{
    color: #FFF;
font-family: Montserrat;
font-size: 11px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
h2{
    color: #FFF;
font-family: Montserrat;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 1px;
margin-bottom: -1px;
}
h1{
    color: #FFF;
font-family: Montserrat;
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: -3px;
}
` 