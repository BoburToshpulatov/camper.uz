import styled from "styled-components";
import detailback from '../../assets/motor-cars/detail-backgroundimg.svg'
import map from '../../assets/motor-cars/map.svg'
import description1 from '../../assets/motor-cars/description1.svg'
import description2 from '../../assets/motor-cars/description2.svg'
import description3 from '../../assets/motor-cars/description3.svg'
import description4 from '../../assets/motor-cars/description4.svg'
import description5 from '../../assets/motor-cars/description5.svg'

export const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:    #FAFAFA; 
gap: 35px;
padding-bottom: 50px;
@media only screen and (max-width:710px) {
  gap: 90px;
  margin-inline:auto ;
    }
`


export const Menu=styled.div`
display: flex;
justify-content: center;
height: 30px;
gap: 30px;
margin-top: 60px;
@media only screen and (max-width:710px) {
  margin-top: 30px;
    }
`
export const MenuLeft=styled.div`
display: flex;
align-items: center;
padding-right: 144px;
padding-bottom: 12px;
border-bottom: 1.5px solid rgba(55, 55, 55, 0.30);
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
@media only screen and (max-width:1250px) {
display: none;
}

`

export const MenuRight=styled.div`
border-bottom: 1.5px solid rgba(55, 55, 55, 0.30);
display: flex;
align-items: center;
gap: 12px;
padding-bottom: 12px;
@media only screen and (max-width:710px) {
    display: grid;
    grid-template-areas: 'a a';
    height:90px;
    gap: 10px;
    .autocomplete2{
        order: 4;
    }
    }
`
export const Hamburger=styled.div`
display: flex;
align-items: center;
gap: 25px;
margin-right: 262px;
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 18px */
}
img{
    display: none;
}
@media only screen and (max-width:1250px) {
    margin-right:0px;
    
    img{
display: flex;
    }
}
@media only screen and (max-width:710px) {
   order: 1;
   gap: 10px;
    }
`
export const SelectButton=styled.div`
display: flex;
align-items: center;
gap: 10px;
label{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 16px */
}
.autocomplete{
    width: 255px;
    @media only screen and (max-width:1250px) {
        width: 210px;
    }
}
@media only screen and (max-width:710px) {
   order: 3;
   .autocomplete{
    width: 180px;
}
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
@media only screen and (max-width:710px) {
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
width: 253px;
flex-direction: column;
flex-shrink: 0;

@media only screen and (max-width:1250px) {
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
gap: 71px;
h1{color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */}
`
export const Button=styled.button`
width: 90px;
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
export const Button1=styled.button`
width: 100px;
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
@media only screen and (max-width:1250px) {
    display: none;
}
`
export const Button2=styled.button`
width: 276px;
height: 35px;
flex-shrink: 0;
border-radius: 10px;
border: 1.5px solid #006DAB;
background-color: white;
color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media only screen and (max-width:1250px) {
    width: 175px;
}
@media only screen and (max-width:710px) {
    width: 98px;
    height: 30px;
}

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
width: 122px;
height: 37px;
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
display: grid;
grid-template-areas: 'a a a a';
justify-content: center;
gap: 20px;
@media only screen and (max-width:1250px) {
    grid-template-areas: 'a a';
    gap: 15px;
}
@media only screen and (max-width:710px) {
    grid-template-areas: 'a';
}
`

export const CarBoxes=styled.div`
width: 220px;
height: 295px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
display: flex;
flex-direction: column;

img{
    width: 205px;
height: 140px;
flex-shrink: 0;
margin-left: 10px;
margin-top: 5px;
}
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 10px;
}
@media only screen and (max-width:1250px) {
   width: 326px;
   height: 400px;
   padding: 0px 5px;
   img{
    width: 255px;
height: 210px;
margin-left: 30px;
   }
   h1{
    font-size: 18px;
   }
}
@media only screen and (max-width:710px) {
    width: 330px;
   height: 400px;
   padding: 0px 15px;
   img{
    width: 270px;
   }
}

`
export const MuiButtons=styled.div`
display: none;
@media only screen and (max-width:1250px) {
    display: flex;
    justify-content: center;
    margin-top: 7px;
    .muibutton{
        width: 147px;
        height: 40px;
        border-radius: 10px;
        @media only screen and (max-width:710px) {
        width: 149px;
        }
    }
}
`
export  const BrandStar=styled.div`
display: flex;
align-items: center;
margin-top: -10px;
margin-left: 10px;
margin-right: 10px;
justify-content: space-between;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
@media only screen and (max-width:1250px) {
    p{
        font-size: 14px;
    }
}

`
export const BrandStarPimg=styled.div`
display: flex;
justify-content: center;
align-items: center;
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
width: 941px;
height: 170px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
display: flex;
@media only screen and (max-width:1250px) {
    width: 687px;
}
@media only screen and (max-width:710px) {
    width: 365px;
    height: 140px;
}
`
export const MiniBox1=styled.div`
flex: 1;
display: flex;
align-items: center;

img{
    width: 310px;
height: 155px;
margin-left: 4px;
}
@media only screen and (max-width:1250px) {
   img{
    width: 305px;
    height: 140px;
   }
}
@media only screen and (max-width:710px) {
   img{
    width: 140px;
    height: 115px;
    margin-left: 2px;
   }
}
`
export const MiniBox2=styled.div`
flex: 2;
display: flex;
flex-direction: column;
padding: 0px 27px;
@media only screen and (max-width:1250px) {
    padding: 0px 7px;
}
`
export const MiniBox2Container=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: -10px;
margin-top: 30px;
}
@media only screen and (max-width:710px) {
  h1{
    font-size:14px;
    margin-bottom: 0;
  }
  }
`
export const MiniBox2Container1=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
@media only screen and (max-width:710px) {
  p{
    font-size:10px;
  }
}
`
export const MiniBox2Container2=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 35px;
@media only screen and (max-width:710px) {
margin-top: 10px;
}
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
export const DetailBackground=styled.div`
background-image: url('${detailback}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 650px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const CarDetails=styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #FAFAFA;
gap: 20px;
padding:10px  0px 60px 0px;
@media only screen and (max-width:1250px) {
    flex-direction: column;
}
`
export const CarDetailsLeft=styled.div`
width: 600px;
height: 360px;
flex-shrink: 0;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
background: #FFF;
/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
img{
    width: 580px;
    height: 310px; 
}
@media only screen and (max-width: 625px) {
    width: 354px;
height: 224px;
img{
    width: 300px;
    height: 200px;
}
}
`
export const CarDetailsRight=styled.div`
width: 600px;
height: 360px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;


/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
@media only screen and (max-width: 625px) {
    width: 354px;
height: 224px;
}
`
export const RightNamePrice=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1.5px solid rgba(55, 55, 55, 0.30);
margin:5px 15px ;
h1{
    color: #006DAB;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
@media only screen and (max-width: 625px) {
h1{
    font-size: 20px;
}
}
`
export const CompanyLicense=styled.div`
display: flex;
margin:10px 15px ;

`
export const CompanyLicenseLeft=styled.div`
flex: 1;

p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 17px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: -1px;
}

`
export const CompanyLicenseRight=styled.div`
flex: 1;

p{
    color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: -1px;
}
@media only screen and (max-width: 625px) {
    display: grid;
    justify-content: flex-end;
}
`
export const TabOptions=styled.div`
`
export const ItemReview=styled.div`

`
export const Best=styled.div`
display: flex;
justify-content: space-between;
padding: 0px 20px;
align-items: center;
/* margin-top: -10px; */
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`
export const ItemReviewInformation=styled.div`
display: flex;
justify-content: center;
padding: 7px 20px;
border-bottom: 1.5px solid rgba(55, 55, 55, 0.30);
`
export const Infbox1=styled.div`
flex: 1;
display: flex;
img{
    width: 80%;
    height: 80px;
}
`
export const Infbox2=styled.div`
flex: 5;

margin-left: -20px;

h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
p{
    color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`
export const Infbox3=styled.div`
flex: 1;

p{
    color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;

}
`
export const Questions=styled.div`
display: flex;
justify-content: center;
gap: 30px;
`
export const QuestionsLeft=styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`
export const QuestionsLeftTop=styled.div`
width: 650px;
height: 300px;
border-radius: 10px;
background: url(<path-to-image>) lightgray -236.007px -34.061px / 173.41% 152.73% no-repeat;
background-image: url('${map}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const QuestionsLeftBottom=styled.div`
display: flex;
gap: 20px;
`
export const NumberEmail=styled.div`
width: 289px;
height: 108px;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
padding-left: 25px;
h1{
    color: var(--txt-color, #1E1C1C);
font-family: Montserrat;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 23.4px */
}
p{
    color: #666;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 18.2px */
}
`
export const QuestionsRight=styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 450px;
height: 430px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
h1{
    color: var(--text-color, #023047);
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 31.2px */
}
.form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    input{
height: 50px;
border-radius: 8px;
background: #f3f3f3;
color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
border: none;
padding-left:15px ;
    }
    textarea{
        height: 120px;
        border-radius: 8px;
background: #f3f3f3;
color: black;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
border: none;
padding: 15px;
    }
}
`
export const Description=styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:#FAFAFA;
@media only screen and (max-width:1250px) {
    flex-direction: column;
    height: 780px;
}
@media only screen and (max-width: 625px) {
height:510px;
}
`
export const DescriptionLeft=styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
margin-top: -90px;
h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-right: 375px;
}
p{
    color: #373737;
font-family: Montserrat;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
width: 500px;
height: 169px;
flex-shrink: 0;
margin-top: -5px;
}
@media only screen and (max-width:1250px) {
    order: 2;
    width: 600px;
    margin: 0;
    align-items: flex-start;
    margin-bottom: -140px;
   h1{
    margin: 0;
    margin-top: 25px;
    font-size: 33px;
   }
   p{
    margin-top:15px;
   }
   span{
    display: none;
   }
}
@media only screen and (max-width: 625px) {
    width: 354px;
height: 224px;
margin-bottom: 0;
h1{
    font-size: 23px;
    margin-top: 15px;
}
p{
    font-size: 13px;
    width: 360px;
    margin-top: 5px;
}
}
`
export const DescriptionRight=styled.div`
height: 460px;
flex: 1;
background-image: url('${description1}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width:1250px) {
    order: 1;
    width: 600px;
    border-radius: 10px;
}
@media only screen and (max-width: 625px) {
    width: 354px;
height: 224px;
}
`
export const DescriptionRight1=styled.div`
height: 460px;
flex: 1;
background-image: url('${description2}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width:1250px) {
    order: 1;
    width: 600px;
    border-radius: 10px;
}
@media only screen and (max-width: 625px) {
    width: 354px;
height: 224px;
}
`
export const DescriptionRight2=styled.div`
height: 460px;
flex: 1;
background-image: url('${description3}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width:1250px) {
    order: 1;
    width: 600px;
    border-radius: 10px;
}
@media only screen and (max-width: 625px) {
    width: 354px;
height: 224px;
}
`
export const DescriptionRight3=styled.div`
height: 460px;
flex: 1;
background-image: url('${description4}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width:1250px) {
    order: 1;
    width: 600px;
    border-radius: 10px;
    margin-top: 20px;
}
@media only screen and (max-width: 625px) {
    width: 354px;
height: 224px;
}
`
export const DescriptionRight4=styled.div`
height: 465px;
flex: 1;
background-image: url('${description5}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width:1250px) {
    order: 1;
    width: 600px;
    border-radius: 10px;
    margin-top: -70px;
}
@media only screen and (max-width: 625px) {
    width: 354px;
height: 224px;
margin-top: 0;
}
`
