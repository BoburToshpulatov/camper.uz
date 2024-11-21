import React from 'react'
import { BrandStarV, Button2, CarCollectionVmenu, MiniBox1, MiniBox2, MiniBox2Container, MiniBox2Container1, MiniBox2Container2, VMenucarBoxes } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { motordata } from '../mock/motor'
import { Link } from 'react-router-dom'


const VMenuComponent = () => {
    console.log(motordata);
  return (
    <CarCollectionVmenu>
        {motordata.map((value, index) => {
                return ( 
                  <Link to={`/motor-detail/${value.id}`} style={{textDecoration:'none'}}>
<VMenucarBoxes>
    <MiniBox1><img src={value.car.photo} alt="car-icon" /></MiniBox1>
    <MiniBox2>
        <MiniBox2Container>
        <h1>{value.car.name}</h1>
       <h1 className='price' style={{color: ' #006DAB'}}> {value.car.cost }</h1>
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