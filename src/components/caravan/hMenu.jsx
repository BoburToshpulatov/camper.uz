import React from 'react'
import { BrandStar, BrandStarPimg, Button1, CarBoxes, CarCollection, FromToButton, MuiButtons, Price } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { caravans } from './mock/mock';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material'



const HMenuComponent = () => {
    console.log(caravans);
  return ( 
    <CarCollection>
       {caravans.map ((value, index) =>{
        return(
          <Link to={`/caravan-detail/${value.id}`} style={{textDecoration:'none'}}>
           <CarBoxes >
                    <img src={value.photo} alt="car-icon" />
                    <h1>{value.name}</h1>
                    <BrandStar>
                    <p>{value.company}</p>
                    <BrandStarPimg>
                    <img style={{marginLeft:'75px'}} src={star} alt="star-icon" />
                    <p>{value.star_rate}</p>
                    </BrandStarPimg>
                    </BrandStar>
                    <Price><h1>{value.cost_krw}</h1></Price>
                    <FromToButton style={{gap: '12px', justifyContent:'center'}}>
                <Button1 style={{border: '1px solid var(--blue, #006DAB)', width: '95px'}}>Order</Button1>
                <Button1 style={{border: '1px solid var(--blue, #006DAB)', width: '95px'}}>Compare</Button1>
                </FromToButton>
                <MuiButtons>
                <Stack spacing={2} direction="row">
      <Button className='muibutton' variant="contained">ORDER</Button>
      <Button className='muibutton' variant="outlined">VIEW DETAILS</Button>
      </Stack>
    </MuiButtons>
                </CarBoxes>
                </Link>
              );
       })}
                
    </CarCollection>
  )
}

export default HMenuComponent