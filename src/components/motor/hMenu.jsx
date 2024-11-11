import React from 'react'
import { BrandStar, Button, CarBoxes, CarBoxes2, CarBoxes3, CarCollection, FromToButton, Price } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { motordata } from '../mock/motor'
import { Link } from 'react-router-dom'



const HMenuComponent = () => {
    console.log(motordata);
  return ( 
    <CarCollection>
        {motordata.map((value, index) => {
                return ( 
                  <Link to={`/motor-detail/${value.id}`} style={{textDecoration:'none'}}>
                <CarBoxes key={value.id}>
                    <img src={value.car.photo} alt="" />
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
                </Link>
                );
            })
        }
    


    </CarCollection>
  )
}

export default HMenuComponent