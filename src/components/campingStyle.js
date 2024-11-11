import styled from 'styled-components'
import campinging from '../assets/camping-site.svg'
import campingImg1 from '../assets/camping-img1.svg'


export const BackgroundCamping=styled.div`
background-image: url('${campinging}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
h3{
    color: #FFF;
font-family: Montserrat;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;

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
export const CampingSites=styled.div`
display: grid;
grid-template-areas: 'a a a';
gap: 15px;
justify-content: center;
background-color: #FAFAFA;
padding-top: 80px;
`
export const SitesBox=styled.div`
padding-bottom: 15px;
h3{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
}
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: -15px;
}
`
export const SitesBackgroundImg = styled.div`
width: 365px;
height: 275px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid black;
margin-bottom: -10px;
background-image: url('${campingImg1}');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`