import styled from "styled-components";



export const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:    #FAFAFA; 
gap: 35px;
@media only screen and (max-width:680px) {
  gap: 90px;
    }
`


export const Menu=styled.div`
display: flex;
justify-content: center;
height: 30px;
gap: 30px;
margin-top: 60px;
`
export const MenuLeft=styled.div`
display: flex;
align-items: center;
padding-right: 125px;
padding-bottom: 12px;
border-bottom: 1.5px solid rgba(55, 55, 55, 0.30);
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
@media only screen and (max-width:1125px) {
display: none;
}

`

export const MenuRight=styled.div`
border-bottom: 1.5px solid rgba(55, 55, 55, 0.30);
display: flex;
align-items: center;
gap: 10px;
padding-bottom: 12px;
select{
    width: 80px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
@media only screen and (max-width:680px) {
   order: 4;
    }
}
@media only screen and (max-width:680px) {
    display: grid;
    grid-template-areas: 'a a';
    height: 80px;
    gap: 10px;
    }

`
export const Hamburger=styled.div`
display: flex;
align-items: center;
gap: 25px;
margin-right: 215px;
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
img{
    display: none;
}
@media only screen and (max-width:1125px) {
    margin-right:0px;
    
    img{
display: flex;
    }
}
@media only screen and (max-width:680px) {
   order: 1;
    }
`
export const SelectButton=styled.div`
display: flex;
align-items: center;
gap: 10px;
label{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
}
select{
    width: 227px;
height: 30px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
color: rgba(55, 55, 55, 0.60);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}
@media only screen and (max-width:680px) {
   order: 3;
    }
`
export const ClickButtons=styled.div`
display: flex;
align-items: center;
margin-top: -5px;
button{
    width: 50px;
height: 40px;
flex-shrink: 0;
border-radius: 5px 0px 0px 5px;
border: 1px solid rgba(55, 55, 55, 0.30);
background-color: white;
}
@media only screen and (max-width:680px) {
   order: 2;
    }
`

export const CarCollectionSidebar=styled.div`
display: flex;
justify-content: center;
gap: 30px;
`
export const Sidebar=styled.div`
display: flex;
width: 227px;
flex-direction: column;
flex-shrink: 0;

@media only screen and (max-width: 1100px) {
    display: none;
}
`
export const FromTo=styled.div`
display: flex;
flex-direction: column;
padding-left: 4px;
margin-top: -9px;
`
export const FromToText=styled.div`
display: flex;
gap: 68px;
h1{color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */}
`
export const Button=styled.button`
width: 81px;
height: 32px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(55, 55, 55, 0.60);
background-color: white;
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const FromToButton=styled.div`
display: flex;
gap: 20px;
margin-top: -7px;
`
export const InputBox=styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
gap: 5px;
`
export const BrandSelect=styled.select`
color: #000;
font-family: Montserrat;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
padding-bottom: 5px;
border: none;
border-bottom: 1.5px solid rgba(55, 55, 55, 0.30);
background: #FAFAFA;
`
export const CheckboxInput=styled.div`
display: flex;
align-items: center;
gap: 5px;
input{
    width: 20px;
height: 20px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid #666;
background: #FFF;
}
label{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
}
`
export const CancelButton=styled.div`
display: flex;
gap: 10px;
margin-top: 40px;
`
export const BlueButton=styled.button`
width: 108px;
height: 34px;
flex-shrink: 0;
border-radius: 60px;
background: var(--blue, #006DAB);

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: #FFF;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
`
export const CarCollection=styled.div`
width: 850px;
display: grid;
grid-template-areas: 'a a a a';
justify-content: center;
gap: 17px;
@media only screen and (max-width: 870px) {
    grid-template-areas: 'a a';
}
@media only screen and (max-width: 600px) {
    grid-template-areas: 'a';
}
`

export const CarBoxes=styled.div`
width: 202px;
height: 295px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
display: flex;
flex-direction: column;

img{
    width: 185px;
height: 140px;
flex-shrink: 0;
margin-left: 5px;
margin-top: 5px;
}
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 10px;
}
`

export  const BrandStar=styled.div`
display: flex;
align-items: center;
margin-top: -10px;
margin-left: 10px;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: normal;

}
img{
    width: 14px;
height: 14px;
flex-shrink: 0;
margin-top: -2px;
}
`
export const Price=styled.div`
margin-top: -5px;
h1{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`

export const CarCollectionVmenu=styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
export const VMenucarBoxes=styled.div`
width: 850px;
height: 170px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
display: flex;
`
export const MiniBox1=styled.div`
flex: 1;
display: flex;
align-items: center;

img{
    width: 280px;
height: 143.853px;
flex-shrink: 0;
}
`
export const MiniBox2=styled.div`
flex: 2;
display: flex;
flex-direction: column;
padding: 0px 27px;
`
export const MiniBox2Container=styled.div`
display: flex;
justify-content: space-between;

h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: -10px;
margin-top: 30px;
}
`
export const MiniBox2Container1=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const MiniBox2Container2=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 35px;
`
export  const BrandStarV=styled.div`
display: flex;
align-items: center;
justify-content: center;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
img{
    width: 14px;
height: 14px;
flex-shrink: 0;
margin-top: -2px;
}
`