import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeComponent from './components/home';
import Caravan from './components/caravan';
import Tuning from './components/tuning';
import Usedcar from './components/usedcar';
import Camping from './components/camping';



const RouterComponents = () => {
  return (
    <>
<Navbar />



<Routes>
<Route path='/motor' element={<HomeComponent/>} />
<Route path='/caravan' element={<Caravan/>}/>
<Route path='/tuning' element={<Tuning/>}/>
<Route path='/usedcar' element={<Usedcar/>}/>
<Route path='/camping' element={<Camping/>}/>
</Routes>

</>


  );
};

export default RouterComponents