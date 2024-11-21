import styled from 'styled-components'
import campinging from '../../assets/camping-site.svg'
import map from '../../assets/campingPlaces/map.svg'



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
@media only screen and (max-width: 1140px) {
   font-size: 60px;
}
@media only screen and (max-width: 765px) {
    font-size: 45px;
}
}
`
export const CampingSites=styled.div`
display: grid;
grid-template-areas: 'a a a';
gap: 15px;
justify-content: center;
background-color: #FAFAFA;
padding-top: 80px;
padding-bottom: 30px;
@media only screen and (max-width: 1140px) {
    grid-template-areas: 'a a';
}
@media only screen and (max-width: 765px) {
    grid-template-areas: 'a';
}
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
margin-bottom: -10px;
img{
    width: 365px;
height: 275px;
flex-shrink: 0;
border-radius: 10px;
}
`
export const DetailPage=styled.div`
display: flex;
align-items: center;
overflow-x: scroll;
gap: 10px;
img{
    width: 215px;
height: 167px;
border-radius: 10px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}
`
export const DetailsText=styled.div`
display: flex;
flex-direction: column;
background-color: #FAFAFA;
margin-top: 15px;
border-bottom: 1.5px solid rgba(55, 55, 55, 0.20);
h1{
    color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: -1px;
}
.location{
    display: flex;
    align-items: center;
    margin-top: -15px;
    gap: 20px;

    p{
        color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
    };
    button{
        width: 120px;
height: 25px;
flex-shrink: 0;
border-radius: 5px;
border: 1px solid var(--sariq, #FF7A00);
color: var(--sariq, #FF7A00);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
background-color: #FAFAFA;
    }
}
`
export const NumberTime=styled.div`
display: flex;
gap: 80px;
margin-top: 10px;
`
export const NumberTiLeft=styled.div`
display: flex;
flex-direction: column;
.location2{
    display: flex;
    gap: 10px;
    align-items: center;
    p{
        color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
}
`
export const NumberTimeRight=styled.div`
display: flex;
flex-direction: column;
.location2{
    display: flex;
    align-items: center;
    gap: 10px;
    p{
        color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
}
`
export const Description=styled.div`
h1{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
p{
    color: var(--text, #373737);
font-family: Montserrat;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`
export const Map=styled.div`
background-image: url('${map}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 512px;
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: flex-end;
margin-right: -20px;
button{
    width: 35px;
height: 40px;
flex-shrink: 0;
border-radius: 5px;
background: #FFF;
color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
border: none;
margin-right: 20px;
}
`