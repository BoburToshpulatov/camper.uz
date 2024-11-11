import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import MotorComponent from './components/motor/index';
import Caravan from './components/caravan/caravan';
import Tuning from './components/tuning/tuning';
import Usedcar from './components/usedcar/usedcar';
import Camping from './components/camping';
import Footer from './components/footer';
import CamperLogo from './components/CamperLogo/Camper-logo';
import MotorDetail from './components/motor/motor-detail';





const RouterComponents = () => {
  return (
    <>
<Navbar />



<Routes>
<Route path='/motor' element={<MotorComponent/>} />
<Route path='/caravan' element={<Caravan/>}/>
<Route path='/tuning' element={<Tuning/>}/>
<Route path='/usedcar' element={<Usedcar/>}/>
<Route path='/camping' element={<Camping/>}/>
<Route path='/' element={<CamperLogo/>}/>
<Route path='/motor-detail/:id' element={<MotorDetail/>}/>
</Routes>
<Footer/>
</>


  );
};

export default RouterComponents