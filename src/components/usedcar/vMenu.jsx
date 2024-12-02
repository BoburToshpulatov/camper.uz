import React from 'react'
import { BrandStarV, Button2, CarCollectionVmenu, MiniBox1, MiniBox2, MiniBox2Container, MiniBox2Container1, MiniBox2Container2, VMenucarBoxes } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { usedVehicles } from './mock/mock'
import { Link } from 'react-router-dom'


const VMenuComponent = ({searchData, checkedData, checkedDataPeople,checkedDataCompany, checkedDataLicense, checkedDataLocation}) => {

  const searchedDataList = usedVehicles.filter((data)=>{
  const name = checkedData && checkedData.length > 0 ? checkedData.includes(data.car.name) : true;
  const people = checkedDataPeople && checkedDataPeople.length > 0 ? checkedDataPeople.includes(data.car.people) : true;
  const company = checkedDataCompany && checkedDataCompany.length > 0 ? checkedDataCompany.includes(data.car.company) : true;
  const license = checkedDataLicense && checkedDataLicense.length > 0 ? checkedDataLicense.includes(data.car.license) : true;
  const location = checkedDataLocation && checkedDataLocation.length > 0 ? checkedDataLocation.includes(data.car.location) : true;
  return name && people && company && license && location;
  })
  
  
  const searching = searchedDataList.filter ((data) =>
  data.car.name.toLowerCase().includes(searchData.toLowerCase())
  );
    return (
      <CarCollectionVmenu>
           {searching.length > 0 ? (searching.map((value) =>(
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
  ))
):(
  <div>NOT FOUND</div>
)}
  
      </CarCollectionVmenu>
    )
  }
  

export default VMenuComponent