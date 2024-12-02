import React from 'react'
import { CarNamePrice, LocationPayment, LocationPaymentMini, Myorders, OrderBoxes, OrderBoxesMini1, OrderBoxesMini2, Orders, Videos } from './CamperStylelogo'
import defcaravan from '../../assets/camperlogoimg/defaultCaravan.svg'

const CartComponent = () => {
  return (
    <Orders>
        <Myorders style={{margin:'0'}}><h1>My orders </h1></Myorders>
<h2>№ 23</h2>

<OrderBoxes>
    <OrderBoxesMini1><img src={defcaravan} alt="car-icon" /></OrderBoxesMini1>
    <OrderBoxesMini2>
<CarNamePrice>
    <h1>Name of the car</h1>
    <h1 style={{color:'#006DAB'}}>250 $</h1>
    </CarNamePrice>
    <p>Brand name</p>

    <LocationPayment>
        <LocationPaymentMini><p>Location: <span>Korea , Seul</span></p></LocationPaymentMini>
        <LocationPaymentMini><p>Payment: <span>Credit card</span></p></LocationPaymentMini>
    </LocationPayment>
    </OrderBoxesMini2>
    
</OrderBoxes>

<OrderBoxes style={{marginTop:'20px'}}>
    <OrderBoxesMini1><img src={defcaravan} alt="car-icon" /></OrderBoxesMini1>
    <OrderBoxesMini2>
<CarNamePrice>
    <h1>Name of the car</h1>
    <h1 style={{color:'#006DAB'}}>250 $</h1>
    </CarNamePrice>
    <p>Brand name</p>

    <LocationPayment>
        <LocationPaymentMini><p>Location: <span>Korea , Seul</span></p></LocationPaymentMini>
        <LocationPaymentMini><p>Payment: <span>Credit card</span></p></LocationPaymentMini>
    </LocationPayment>
    </OrderBoxesMini2>
    
</OrderBoxes>
    </Orders>
  )
}

export default CartComponent