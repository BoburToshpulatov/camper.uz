import React from 'react'
import { BrandStar, Button, CarBoxes, CarCollection, FromToButton, Price } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { tuning } from './mock/mock'



const HMenuComponent = () => {
    console.log(tuning);
  return ( 
    <CarCollection>
        {tuning.map((value, index) => {
                return ( 
                <CarBoxes key={value.id}>
                    <img src={value.car.photo} alt="car-icon" />
                    <h1>{value.car.name}</h1>
                    <BrandStar>
                    <p>{value.car.company}</p>
                    <img style={{marginLeft:'75px'}} src={star} alt="star-icon" />
                    <p>{value.car.rate}</p>
                    </BrandStar>
                    <Price><h1>{value.car.cost}</h1></Price>
                    <FromToButton style={{gap: '12px', justifyContent:'center'}}>
                <Button style={{border: '1px solid var(--blue, #006DAB)', width: '87px'}}>Order</Button>
                <Button style={{border: '1px solid var(--blue, #006DAB)', width: '87px'}}>Compare</Button>
                </FromToButton>
                </CarBoxes>
                );
            })
        }
    


    </CarCollection>
  )
}

export default HMenuComponent