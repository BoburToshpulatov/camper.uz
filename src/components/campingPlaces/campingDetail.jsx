import React from 'react'
import { campingPlaces } from './mock/placesmock';
import { useParams } from 'react-router-dom';
import { Description, DetailPage, DetailsText, Map, NumberTiLeft, NumberTime, NumberTimeRight } from './campingStyle';
import locationIcon from '../../assets/campingPlaces/carbon_location.svg'
import phoneIcon from '../../assets/campingPlaces/carbon_phone.svg'
import clockIcon from '../../assets/campingPlaces/bi_clock.svg'
import websiteIcon from '../../assets/campingPlaces/codicon_home.svg'
import { Link } from 'react-router-dom';


const CampingDetail = () => {
    let{id} = useParams();
    const dataById=campingPlaces.find((data)=>data.id===parseInt(id));
  return (
    <div style={{background: '#FAFAFA',padding:'30px 65px'}}>
        <DetailPage>
        {campingPlaces.map((value, index) => {
                return ( 
                    <Link to={`/camping-detail/${value.id}`} style={{textDecoration:'none'}}> 
                    <img src={value.place.photo} alt="camping" />
                    </Link>
                   );
            })
        }
</DetailPage>
<DetailsText>
    <h1>{dataById.place.name}</h1>
    <div className='location'>
        <p>Location</p>
        <button>Copy map</button>
    </div>
</DetailsText>
<NumberTime>
    <NumberTiLeft>
        <div className='location2'>
            <img src={locationIcon} alt="location-icon" />
            <p style={{marginLeft:'1px'}}>{dataById.place.location}</p>
        </div>
        <div className='location2' style={{marginTop:'-5px'}}>
            <img src={phoneIcon} alt="phone-icon" />
            <p>{dataById.place.phone}</p>
        </div>
    </NumberTiLeft>
    <NumberTimeRight>
    <div className='location2'>
            <img src={clockIcon} alt="location-icon" />
            <p style={{marginLeft:'1.5px'}}>from <span style={{color:'#FF7A00'}}>{dataById.place.hours.open}</span> to <span style={{color:'#FF7A00'}}>{dataById.place.hours.close}</span></p>
        </div>
        <div className='location2' style={{marginTop:'-5px'}}>
            <img src={websiteIcon} alt="phone-icon" />
            <p>{dataById.place.website}</p>
        </div>
    </NumberTimeRight>
</NumberTime>
<Description>
    <h1>Description</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien senectus feugiat in vitae consequat libero placerat nascetur ultrices. Aenean mattis sapien a donec urna,
bibendum. Maecenas mattis phasellus nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis bibendum convallis commodo enim.Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Sapien senectus feugiat in vitae consequat libero placerat nascetur ultrices. Aenean mattis sapien a donec urna, <br />
bibendum. Maecenas mattis phasellus nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis bibendum convallis commodo enim.</p>
</Description>

<Map>
 <button style={{height:'46px',marginTop:'20px'}}>+</button>
 <button style={{marginTop:'-6px',borderTop:'1px solid rgba(55, 55, 55, 0.80)',borderRadius:'0px 0px 5px 5px'}}>-</button>
</Map>
    </div>
  )
}

export default CampingDetail