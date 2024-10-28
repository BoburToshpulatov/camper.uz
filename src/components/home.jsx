import React from 'react'
import "../components/homeStyle.css"
import minicar1 from "../assets/image.png"
import hamburger from "../assets/icon-park-outline_hamburger-button.svg"
import btn1 from "../assets/clarity_grid-view-solid.svg"
import btn2 from "../assets/ic_round-view-list.svg"
import firstcar from "../assets/first-cara.svg"
import star from "../assets/bx_bxs-star.svg"
import secondcar from "../assets/secondcar.svg"
import thirdcar from "../assets/thirdcar.svg"
import fourthcar from "../assets/fourthcar.svg"
import fifthcar from "../assets/fifthcar.svg"


const HomeComponent = () => {
  return (<div>

<div className='backimg'>
    <h3>Home / Motors</h3>
    <h2>Our ranges</h2>
    <h1>Motors</h1>
</div>
<div className='mainwrapper'>
<div className='sidebar'>
<h1>Cost of car</h1>
<div className='box-1'> 
    <div className='box1-top'>
    <p>from</p>
    <p>to</p>
    </div> 
    <div className="box1-bottom">
        <button></button>
        <button></button>
    </div>
</div>
<div className='box-2'>
    <select name="" id=""><option>Brand</option></select>
    <div className='checkbox'>
    <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">Aidal</label>
     </div>
     <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">knal</label>
     </div>
     <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">escape</label>
     </div>
     </div>
</div>
<div className='box-2'>
    <select name="" id=""><option>Company</option></select>
    <div className='checkbox'>
    <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">escape</label>
     </div>
     <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">Aidal</label>
     </div>
     </div>
</div>
<div className='box-2'>
    <select name="" id=""><option>License type</option></select>
    <div className='checkbox'>
    <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">1 year</label>
     </div>
     <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">2 years</label>
     </div>
     <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">1.5 year</label>
     </div>
     </div>
</div>
<div className='box-2'>
    <select name="" id=""><option>Number of travelers</option></select>
    <div className='checkbox'>
    <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">2</label>
     </div>
     <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">3-4</label>
     </div>
     <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">5+</label>
     </div>
     </div>
</div>

<div className='box-2'>
    <select name="" id=""><option>Location</option></select>
    <div className='checkbox'>
    <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">Seoul</label>
     </div>
     <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">Korea</label>
     </div>
     <div className='check1'>
    <input type="checkbox" />
     <label htmlFor="">Pusan</label>
     </div>
     </div>
</div>
<div className='sidebar-btn'>
    <button className='orange-btn'>Cancel</button>
    <button className='blue-btn'>Search</button>
</div>

<div className='compare-cars'>
    <p>Compare</p>
    <div className='car-img'>
     <img src={minicar1} alt="car-icon" />
     </div>
</div>
<div className='last-btn'>
<button className='blue-btn'>Compare</button>
</div>
</div>
<div className='mainwrapper-right'>
    <div className='top-right'>
        <div className='item'> 
            <img src={hamburger} alt="hamburger-icon" />
            <p>Item <span className='bluee'>25.156</span></p>
        </div>
        <div className='sort'>
            <label htmlFor="">Sort by</label>
            <select name="" id="" ><option>Select</option></select>
        </div>
        <div className='select-btn'>
<select name="" id=""><option>60</option></select>
        </div>
        <div className='signs'>
<button className='square-btn2'><img src={btn1} alt="btn-icon" /></button>
<button className='square-btn'><img src={btn2} alt="btn-icon" /></button>
        </div>
    </div>
    <div className='bottom-right'>
        <div className='car-box1'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={secondcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={thirdcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={fourthcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={thirdcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={fifthcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={fourthcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={secondcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box1'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box2'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box2'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box3'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box3'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box3'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box3'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box3'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>
        <div className='car-box3'>
            <img src={firstcar} alt="car-icon" />
            <h1>Name of the car</h1>
            <div className='star'>
                <p>Brand name</p>
                <img src={star} alt="star-icon" />
                <p>5.3</p>
            </div>
            <div className='car-price'><h1>250 $</h1></div>
            <div class="car-btn">
                <button>Order</button>
                <button>Compare</button>
            </div>
        </div>

        
        
    </div>
</div>
</div>
</div>
  )
}

export default HomeComponent