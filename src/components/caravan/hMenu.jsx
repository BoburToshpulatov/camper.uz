import React from 'react'
import { BrandStar, Button, CarBoxes, CarBoxes2, CarBoxes3, CarCollection, FromToButton, Price } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { caravans } from './mock/mock';




const HMenuComponent = () => {
    console.log(caravans);
  return ( 
    <CarCollection>
       {caravans.map ((value, index) =>{
        return(
           <CarBoxes >
                    <img src={value.photo} alt="car-icon" />
                    <h1>{value.name}</h1>
                    <BrandStar>
                    <p>{value.company}</p>
                    <img style={{marginLeft:'75px'}} src={star} alt="star-icon" />
                    <p>{value.star_rate}</p>
                    </BrandStar>
                    <Price><h1>{value.cost_krw}</h1></Price>
                    <FromToButton style={{gap: '12px', justifyContent:'center'}}>
                <Button style={{border: '1px solid var(--blue, #006DAB)', width: '87px'}}>Order</Button>
                <Button style={{border: '1px solid var(--blue, #006DAB)', width: '87px'}}>Compare</Button>
                </FromToButton>
                </CarBoxes>
              );
       })}
                
    </CarCollection>
  )
}

export default HMenuComponent