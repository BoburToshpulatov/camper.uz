import React from 'react'
import { BrandStar, BrandStarPimg, Button, CarBoxes, CarCollection, FromToButton, Price } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { caravans } from './mock/mock';
import { Link } from 'react-router-dom';



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
                <Button style={{border: '1px solid var(--blue, #006DAB)', width: '87px'}}>Order</Button>
                <Button style={{border: '1px solid var(--blue, #006DAB)', width: '87px'}}>Compare</Button>
                </FromToButton>
                </CarBoxes>
                </Link>
              );
       })}
                
    </CarCollection>
  )
}

export default HMenuComponent