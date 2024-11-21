import React from 'react'
import { BrandStar, BrandStarPimg, Button1, CarBoxes, CarCollection, FromToButton, MuiButtons, Price } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { motordata } from '../mock/motor'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material'



const HMenuComponent = () => {
    console.log(motordata);
  return ( 
    <CarCollection>
        {motordata.map((value, index) => {
                return ( 
                  <Link to={`/motor-detail/${value.id}`} style={{textDecoration:'none'}}>
                <CarBoxes key={value.id}>
                    <img src={value.car.photo} alt="car-icon" />
                    <h1>{value.car.name}</h1>
                    <BrandStar>
                    <p>{value.car.company}</p>
                    <BrandStarPimg>
                    <img style={{marginLeft:'75px'}} src={star} alt="star-icon" />
                    <p>{value.car.rate}</p>
                    </BrandStarPimg>
                    </BrandStar>
                    <Price><h1>{value.car.cost}</h1></Price>
                    <FromToButton style={{gap: '12px', justifyContent:'center'}}>
                <Button1 style={{border: '1px solid var(--blue, #006DAB)', width: '87px'}}>Order</Button1>
                <Button1 style={{border: '1px solid var(--blue, #006DAB)', width: '87px'}}>Compare</Button1>
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
            })
        }
    


    </CarCollection>
  )
}

export default HMenuComponent