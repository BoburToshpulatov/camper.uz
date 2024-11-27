import styled from "styled-components";
import videoimg from '../../assets/camperlogoimg/videoimg1.svg'
import videoimg1 from '../../assets/camperlogoimg/videoimg2.svg'
import videoimg2 from '../../assets/camperlogoimg/videoimg3.svg'
import videoimg3 from '../../assets/camperlogoimg/videoimg4.svg'
import videoimg4 from '../../assets/camperlogoimg/videoimg5.svg'
import videoimg5 from '../../assets/camperlogoimg/videoimg6.svg'
import videoimg6 from '../../assets/camperlogoimg/videoimg7.svg'
import videoimg7 from '../../assets/camperlogoimg/videoimg8.svg'
import minimg1 from '../../assets/camperlogoimg/mini-img1.svg'
import minimg2 from '../../assets/camperlogoimg/mini-img2.svg'
import minimg3 from '../../assets/camperlogoimg/mini-img3.svg'
import minimg4 from '../../assets/camperlogoimg/mini-img4.svg'
import minimg5 from '../../assets/camperlogoimg/mini-img5.svg'
import minimg6 from '../../assets/camperlogoimg/mini-img6.svg'
import signinback from '../../assets/camperlogoimg/carousel2.png'



export const Videos =styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;

h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
border-bottom: 2px solid #FF7A00;
}
@media only screen and (max-width: 1115px) {
    h1{
        font-size: 22px;  
    }
}

@media only screen and (max-width: 590px) {
 margin-right: 241px;
}
`
export const Blog =styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;

h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
border-bottom: 2px solid #FF7A00;
}
@media only screen and (max-width: 1115px) {
    h1{
        font-size: 22px;  
    }
}
@media only screen and (max-width: 590px) {
 margin-right: 245px;
}

`
export const Recommend =styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;

h1{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
border-bottom: 2px solid #FF7A00;
}
@media only screen and (max-width: 1115px) {
    h1{
        font-size: 22px;  
    }
}
@media only screen and (max-width: 590px) {
 margin-right: 170px;
}
`
export const VideoContainer=styled.div`
display: grid;
grid-template-areas: 'a a a a';
gap: 15px;
justify-content: center;
margin-top: 20px;
margin-inline: auto;

@media only screen and (max-width: 1115px) {
    grid-template-areas: 'a a';
}
@media only screen and (max-width: 590px) {
    grid-template-areas: 'a';
}
`
export const IframeBoxMain=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2px;
width: 700px;
height: 375px;
border: none;
@media only screen and (max-width: 700px) {
    width: 340px;
    height: 320px;
    .typography{
        margin-left:0px;
        margin-top: -5px;
    }
}
`

export const Iframebox=styled.div`
.iframe{
    width: 660px;
    border-radius: 15px;
    @media only screen and (max-width: 700px) {
    width: 310px;
    height: 270px;
}
}
`
export const VideoBoxes=styled.div`
width: 265px;
height: 265px;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg}');
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 590px) {
    width:320px;
    height: 320px;
}
`
export const VideoBoxes2=styled.div`
width: 265px;
height: 265px;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg1}');
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 590px) {
    width:320px;
    height: 320px;
}
`

export const VideoBoxes3=styled.div`
width: 265px;
height: 265px;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg2}');
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 590px) {
    width:320px;
    height: 320px;
}
`

export const VideoBoxes4=styled.div`
width: 265px;
height: 265px;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg3}');
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 590px) {
    width:320px;
    height: 320px;
}
`

export const VideoBoxes5=styled.div`
width: 265px;
height: 265px;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg4}');
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 590px) {
    width:320px;
    height: 320px;
}
`

export const VideoBoxes6=styled.div`
width: 265px;
height: 265px;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg5}');
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 590px) {
    width:320px;
    height: 320px;
}
`

export const VideoBoxes7=styled.div`
width: 265px;
height: 265px;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg6}');
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 590px) {
    width:320px;
    height: 320px;
}
`

export const VideoBoxes8=styled.div`
width: 265px;
height: 265px;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg7}');
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 590px) {
    width:320px;
    height: 320px;
}

`

export const MultiCarouselDiv=styled.div`
 display: flex;
 flex-direction: column;
    align-items: center;
    height: 300px;
    margin: 0px auto;
gap: 8px;
img{
    width: 290px;
height: 167px;
}
h1{
    color: var(--text, #373737);
text-align: center;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: -3px;

}

    button{
        display: flex;
        justify-content: center;
        align-items: center;
width: 259px;
height: 45px;
background: var(--blue, #006DAB);
margin-top: 10px;
transform: skew(-18deg);
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
margin-top: -7px;
p{
    transform: skew(18deg);
}
}
select{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
border: none;
}
`
export const MainContainerImages=styled.div`
display: flex;
justify-content: center;
gap: 15px;
margin-top: 5px;
padding-bottom: 50px;
@media only screen and (max-width: 1115px) {
    flex-direction:column;
    align-items: center;
    gap: 0px;
}
`
export const MainContainerImagesLeft=styled.div`

h1{
    color: #000;
font-family: Montserrat;
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h3{
    color: var(--sariq, #FF7A00);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
p{
    color: #000;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 380px;
height: 124px;
}
@media only screen and (max-width: 1115px) {
display: none;
}
`
export const MainContainerImagesLeft2=styled.div`
display: none;
h1{
    color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h3{
    color: var(--sariq, #FF7A00);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
margin-top: -2px;
}
p{
    color: #000;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 530px;
margin-top: -6px;
}
@media only screen and (max-width: 1115px) {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media only screen and (max-width: 590px) {
    align-items: flex-start;
    p{
        width: 310px;  
        font-size: 13px;
    }
}
`
export const MainContainerImagesRight=styled.div`
display: grid;
grid-template-areas: 'a a a';
gap: 7px;
@media only screen and (max-width: 1115px) {
    grid-template-areas: 'a a';
}
@media only screen and (max-width: 590px) {
    grid-template-areas: 'a';
}
`
export const BackgroundImgMini=styled.div`
width: 245px;
height: 245px;
background-image: url('${minimg1}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width: 1115px) {
    width:275px;
    height: 275px;
}
@media only screen and (max-width: 590px) {
    width:325px;
    height: 325px;
}
`
export const BackgroundImgMini2=styled.div`
width: 240px;
height: 240px;
background-image: url('${minimg2}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width: 1115px) {
    width:275px;
    height: 275px;
}
@media only screen and (max-width: 590px) {
    width:325px;
    height: 325px;
}
`
export const BackgroundImgMini3=styled.div`
width: 240px;
height: 240px;
background-image: url('${minimg3}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width: 1115px) {
    width:275px;
    height: 275px;
}
@media only screen and (max-width: 590px) {
    width:325px;
    height: 325px;
}
`
export const BackgroundImgMini4=styled.div`
width: 240px;
height: 240px;
background-image: url('${minimg4}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width: 1115px) {
    width:275px;
    height: 275px;
}
@media only screen and (max-width: 590px) {
    width:325px;
    height: 325px;
}
`
export const BackgroundImgMini5=styled.div`
width: 240px;
height: 240px;
background-image: url('${minimg5}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width: 1115px) {
    width:275px;
    height: 275px;
}
@media only screen and (max-width: 590px) {
    width:325px;
    height: 325px;
}
`
export const BackgroundImgMini6=styled.div`
width: 240px;
height: 240px;
background-image: url('${minimg6}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media only screen and (max-width: 1115px) {
    width:275px;
    height: 275px;
}
@media only screen and (max-width: 590px) {
    width:325px;
    height: 325px;
}
`
export const SigninMain=styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: #FAFAFA;
background-image: url('${signinback}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const SigninBox=styled.div`
width: 452px;
height: 520px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
padding: 25px 30px;
h1{
    color: var(--text, #373737);
font-family: "Open Sans";
font-size: 27px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: -4px;
}
p{
    color: rgba(55, 55, 55, 0.80);
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 8px;
margin-top: 20px;
}
input{
height: 50px;
width: 434px;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
border: none;
padding-left:15px ;
margin-top: -8px;
    }
    .inputCheckbox{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .inputlabel{
            display: flex;
            align-items: center;
            label{
                color: #373737;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
            }
        }
        .Forget{
            display: flex;
            align-items: center;
            p{
                color: #373737;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 14.3px;
            }
        }
    }
    .ButtonMui{
        width: 453px;
        height: 50px;
        border-radius: 10px;
        margin-top: 10px;
        color: #FFF;
font-family: "Open Sans";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
    }
    @media only screen and (max-width:515px) {
        width: 325px;
        input{
            width: 306px;
        }
        .ButtonMui{
            width: 325px;
        }
 
    }
`
export const SocialMedia=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
.Account{
    border-radius: 10px;
border: 2px solid var(--blue, #006DAB);
height: 50px;
color: var(--blue, #006DAB);
font-family: "Open Sans";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 30px;
width: 452px; 
@media only screen and (max-width:515px) {
        width: 325px;
      }
    }
`
export const Divider = styled.div`
color: #6D6D6D;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 20px 30px;
position: relative;
text-transform: uppercase;
text-align: center;
&:before,
&:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 43%;
  height: 1px;
  background-color: #ddd;
}
&:before {
  left: 0;
}
&:after {
  right: 0;
}
`
export const SocialMediaIcons=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
margin-top: 5px;
margin-left: 3.5px;
button{
    width: 46px;
height: 46px;
flex-shrink: 0;
border-radius:50%;
background-color: #039600;
display: flex;
justify-content: center;
align-items: center;
border: none;
}
`
