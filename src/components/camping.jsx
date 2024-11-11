import React from 'react'
import { BackgroundCamping, CampingSites, SitesBackgroundImg, SitesBox } from './campingStyle'

const Camping = () => {
  return (<>
    <BackgroundCamping>
    <h3>Home / Camping Place</h3>
    <h1 >Camping Place</h1>
 </BackgroundCamping>

<CampingSites>
<SitesBox>
<SitesBackgroundImg></SitesBackgroundImg>
  <h3>Camping place name</h3>
  <p>Location</p>
</SitesBox>

<SitesBox>
<SitesBackgroundImg></SitesBackgroundImg>
  <h3>Camping place name</h3>
  <p>Location</p>
</SitesBox>

<SitesBox>
<SitesBackgroundImg></SitesBackgroundImg>
  <h3>Camping place name</h3>
  <p>Location</p>
</SitesBox>

</CampingSites>




 </>
  )
}

export default Camping