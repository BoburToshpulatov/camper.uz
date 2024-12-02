import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import MotorComponent from './components/motor/index';
import Caravan from './components/caravan/caravan';
import Tuning from './components/tuning/tuning';
import Usedcar from './components/usedcar/usedcar';
import Camping from './components/campingPlaces/camping';
import Footer from './components/footer';
import CamperLogo from './components/CamperLogo/Camper-logo';
import MotorDetail from './components/motor/motor-detail';
import CaravanDetailNew from './components/caravan/caravan-detail'
import TuningDetail from './components/tuning/tuning-detail';
import UsedcarDetail from './components/usedcar/usedcar-detail';
import CampingDetail from './components/campingPlaces/campingDetail';
import SigninComponent from './components/CamperLogo/signin';
import RegistrationComponent from './components/CamperLogo/registration';
import CartComponent from './components/CamperLogo/cart';






const RouterComponents = () => {
  let location = useLocation();

  const hiddenNavbar =
  location.pathname !=='/' && location.pathname !=='/registration';
  return (
    <>
{hiddenNavbar && <Navbar />}



<Routes>
<Route path='/motor' element={<MotorComponent/>} />
<Route path='/caravan' element={<Caravan/>}/>
<Route path='/tuning' element={<Tuning/>}/>
<Route path='/usedcar' element={<Usedcar/>}/>
<Route path='/camping' element={<Camping/>}/>
<Route path='/camper-logo' element={<CamperLogo/>}/>
<Route path='/motor-detail/:id' element={<MotorDetail/>}/>
<Route path='/caravan-detail/:id' element={<CaravanDetailNew/>}/>
<Route path='/tuning-detail/:id' element={<TuningDetail/>}/>
<Route path='/usedcar-detail/:id' element={<UsedcarDetail/>}/>
<Route path='/camping-detail/:id' element={<CampingDetail/>}/>
<Route path='/' element={<SigninComponent/>}/>
<Route path='/registration' element={<RegistrationComponent/>}/>
<Route path='/cart' element={<CartComponent/>}/>
</Routes>
{hiddenNavbar && <Footer/>}
</>


  );
};

export default RouterComponents