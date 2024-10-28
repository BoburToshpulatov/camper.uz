import styled from "styled-components";





export const NavContainer = styled.div`
height: 60px;
display: flex;
justify-content: space-around;
align-items: center;
padding: 5px 0px;



`
export const Logodiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
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
font-size: 36px;
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
font-size: 14px;
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
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const Icons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
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
