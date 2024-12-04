import React from 'react'
import { BrandStar, BrandStarPimg, Button1, CarBoxes, CarCollection, FromToButton, MuiButtons, Price } from './motor'
import star from '../../assets/bx_bxs-star (1).svg'
import { motordata } from '../mock/motor'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material'






const HMenuComponent = ({searchData, checkedData, checkedDataPeople,checkedDataCompany, checkedDataLicense, checkedDataLocation}) => {

const searchedDataList = motordata.filter((data)=>{
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
    <CarCollection>
        {searching.length > 0 ? (searching.map((value) => ( 
                  <Link to={`/motor-detail/${value.id}`} style={{textDecoration:'none'}}>
                <CarBoxes key={value.id}>
                    <img src={value.car.photo} alt="car-icon" />
                    <h1>{value.car.name}</h1>
                    <BrandStar>
                    <p>{value.car.company}</p>
                    <BrandStarPimg>
                    <img style={{marginLeft:'75px'}} src={star} alt="star-icon" />
                    <p>{value.car.rate}</p>
                    </BrandStarPimg>
                    </BrandStar>
                    <Price><h1>{value.car.cost}</h1></Price>
                    <FromToButton style={{gap: '12px', justifyContent:'center'}}>
                <Button1 style={{border: '1px solid var(--blue, #006DAB)', width: '95px'}}>Order</Button1>
               <Link to='/compare' style={{textDecoration:'none'}}> <Button1 style={{border: '1px solid var(--blue, #006DAB)', width: '95px'}}>Compare</Button1></Link>
                </FromToButton>
                <MuiButtons>
                <Stack spacing={2} direction="row">
      <Button className='muibutton' variant="contained">ORDER</Button>
      <Button className='muibutton' variant="outlined">VIEW DETAILS</Button>
      </Stack>
    </MuiButtons>
                </CarBoxes>
                </Link>
                ))
            ):(
              <div>NOT FOUND</div>
            )}
       
    


    </CarCollection>
  )
}

export default HMenuComponent