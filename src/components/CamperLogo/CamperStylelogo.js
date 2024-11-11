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
`
export const VideoContainer=styled.div`
display: grid;
grid-template-areas: 'a a a a';
gap: 15px;
justify-content: center;
margin-top: 20px;
`
export const VideoBoxes=styled.div`
width: 270px;
height: 270px;
flex-shrink: 0;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg}');
display: flex;
justify-content: center;
align-items: center;

`
export const VideoBoxes2=styled.div`
width: 270px;
height: 270px;
flex-shrink: 0;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg1}');
display: flex;
justify-content: center;
align-items: center;

`

export const VideoBoxes3=styled.div`
width: 270px;
height: 270px;
flex-shrink: 0;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg2}');
display: flex;
justify-content: center;
align-items: center;

`

export const VideoBoxes4=styled.div`
width: 270px;
height: 270px;
flex-shrink: 0;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg3}');
display: flex;
justify-content: center;
align-items: center;

`

export const VideoBoxes5=styled.div`
width: 270px;
height: 270px;
flex-shrink: 0;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg4}');
display: flex;
justify-content: center;
align-items: center;

`

export const VideoBoxes6=styled.div`
width: 270px;
height: 270px;
flex-shrink: 0;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg5}');
display: flex;
justify-content: center;
align-items: center;

`

export const VideoBoxes7=styled.div`
width: 270px;
height: 270px;
flex-shrink: 0;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg6}');
display: flex;
justify-content: center;
align-items: center;

`

export const VideoBoxes8=styled.div`
width: 270px;
height: 270px;
flex-shrink: 0;
border-radius: 20px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-image: url('${videoimg7}');
display: flex;
justify-content: center;
align-items: center;

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
flex-shrink: 0;
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
flex-shrink: 0;
}
`
export const MainContainerImagesRight=styled.div`
display: grid;
grid-template-areas: 'a a a';
gap: 7px;
`
export const BackgroundImgMini=styled.div`
width: 245px;
height: 245px;
flex-shrink: 0;
background-image: url('${minimg1}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const BackgroundImgMini2=styled.div`
width: 240px;
height: 240px;
flex-shrink: 0;
background-image: url('${minimg2}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const BackgroundImgMini3=styled.div`
width: 240px;
height: 240px;
flex-shrink: 0;
background-image: url('${minimg3}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const BackgroundImgMini4=styled.div`
width: 240px;
height: 240px;
flex-shrink: 0;
background-image: url('${minimg4}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const BackgroundImgMini5=styled.div`
width: 240px;
height: 240px;
flex-shrink: 0;
background-image: url('${minimg5}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
export const BackgroundImgMini6=styled.div`
width: 240px;
height: 240px;
flex-shrink: 0;
background-image: url('${minimg6}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`