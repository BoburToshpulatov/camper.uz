import React from 'react'
import { BackgroundCamping, CampingSites, SitesBackgroundImg, SitesBox } from './campingStyle'
import { campingPlaces } from './mock/placesmock'
import { Link } from 'react-router-dom'

const Camping = () => {
  console.log(campingPlaces)
  return (<>
    <BackgroundCamping>
    <h3>Home / Camping Place</h3>
    <h1 >Camping Place</h1>
 </BackgroundCamping>
 <CampingSites>
{campingPlaces.map((value,index) =>{
  return(
    <Link to={`/camping-detail/${value.id}`} style={{textDecoration:'none'}}>  
<SitesBox key={value.id}>
<SitesBackgroundImg><img src={value.place.photo} alt="sites-icon" /></SitesBackgroundImg>
  <h3>{value.place.name}</h3>
  <p>{value.place.location}</p>
</SitesBox>
</Link>
) 
}
)}

</CampingSites>




 </>
  )
}

export default Camping