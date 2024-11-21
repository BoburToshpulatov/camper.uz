import React from 'react'
import { BrandStarV, Button2, CarCollectionVmenu, MiniBox1, MiniBox2, MiniBox2Container, MiniBox2Container1, MiniBox2Container2, VMenucarBoxes } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { usedVehicles } from './mock/mock'
import { Link } from 'react-router-dom'


const VMenuComponent = () => {
    console.log(usedVehicles);
    return (
      <CarCollectionVmenu>
          {usedVehicles.map((value, index) => {
                  return ( 
                    <Link to={`/usedcar-detail/${value.id}`} style={{textDecoration:'none'}}>
  <VMenucarBoxes>
      <MiniBox1><img src={value.car.photo} alt="car-icon" /></MiniBox1>
      <MiniBox2>
          <MiniBox2Container>
          <h1>{value.car.name}</h1>
         <h1 style={{color: ' #006DAB'}}> {value.car.cost }</h1>
         </MiniBox2Container>
         <MiniBox2Container1>
          <p>{value.car.company}</p>
          <BrandStarV>
          <img src={star} alt="star-icon" />
          <p>{value.car.rate}</p>
          </BrandStarV>
          </MiniBox2Container1>
          <MiniBox2Container2>
          <Button2>Order</Button2>
          <Button2>Compare</Button2>
          </MiniBox2Container2>
          </MiniBox2>
      
  </VMenucarBoxes>
  
  </Link>
  );
  })
  }
  
      </CarCollectionVmenu>
    )
  }
  

export default VMenuComponent