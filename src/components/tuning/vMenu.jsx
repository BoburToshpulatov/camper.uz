import React from 'react'
import { BrandStarV, Button, CarCollectionVmenu, MiniBox1, MiniBox2, MiniBox2Container, MiniBox2Container1, MiniBox2Container2, VMenucarBoxes } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { tuning } from './mock/mock';
import { Link } from 'react-router-dom';

const VMenuComponent = () => {
    console.log(tuning);
    return (
      <CarCollectionVmenu>
          {tuning.map((value, index) => {
                  return ( 
                    <Link to={`/tuning-detail/${value.id}`} style={{textDecoration:'none'}}>
  <VMenucarBoxes>
      <MiniBox1><img src={value.car.photo} alt="car-icon" /></MiniBox1>
      <MiniBox2>
          <MiniBox2Container>
          <h1>{value.car.name}</h1>
         <h1 style={{fontSize:'20px',color: ' #006DAB'}}> {value.car.cost }</h1>
         </MiniBox2Container>
         <MiniBox2Container1>
          <p>{value.car.company}</p>
          <BrandStarV>
          <img src={star} alt="star-icon" />
          <p>{value.car.rate}</p>
          </BrandStarV>
          </MiniBox2Container1>
          <MiniBox2Container2>
          <Button style={{border: '1.5px solid var(--blue, #006DAB)', width: '253px' , height:'33px'}}>Order</Button>
          <Button style={{border: '1.5px solid var(--blue, #006DAB)', width: '253px' , height:'33px'}}>Compare</Button>
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