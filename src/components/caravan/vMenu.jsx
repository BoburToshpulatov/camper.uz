import React from 'react'
import { BrandStarV, Button2, CarCollectionVmenu, MiniBox1, MiniBox2,  MiniBox2Container,  MiniBox2Container1,  MiniBox2Container2,  VMenucarBoxes } from './motor'
import { Link } from 'react-router-dom';
import star from '../../assets/bx_bxs-star (1).svg'
import { caravans } from './mock/mock';



const VMenuComponent = () => {
    console.log(caravans);
    return (
      <CarCollectionVmenu>
          {caravans.map((value, index) => {
                  return ( 
                    <Link to={`/caravan-detail/${value.id}`} style={{textDecoration:'none'}}>      
  <VMenucarBoxes>
      <MiniBox1><img src={value.photo} alt="car-icon" /></MiniBox1>
      <MiniBox2>
          <MiniBox2Container>
          <h1>{value.name}</h1>
         <h1 style={{color: ' #006DAB'}}> {value.cost_krw }</h1>
         </MiniBox2Container>
         <MiniBox2Container1>
          <p>{value.company}</p>
          <BrandStarV>
          <img src={star} alt="star-icon" />
          <p>{value.star_rate}</p>
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