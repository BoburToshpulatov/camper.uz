import React, { useState } from 'react'
import { BackgroundTuning } from '../styled'
import { BlueButton, Button, CancelButton, CarCollectionSidebar, ClickButtons, Container, FromTo, FromToButton, FromToText, Hamburger, InputBox, Menu, MenuLeft, MenuRight, SelectButton, Sidebar } from './motor'
import hamburger from '../../assets/icon-park-outline_hamburger-button.svg'
import vImg from "../../assets/vButton.svg"
import hImg from "../../assets/hButton.svg"
import HMenuComponent from './hMenu'
import VMenuComponent from './vMenu'
import minicars from '../../assets/image.png'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';
import Numbers from './numbers'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Popover from '@mui/material/Popover';


const Tuning = () => {
  const [active, setActive] = useState(true)
const [searchData, setSearchData] = useState('');
const [checkedData, setCheckedData] =useState([]);
const [checkedDataPeople, setCheckedDataPeople] = useState([]);
const [checkedDataCompany, setCheckedDataCompany] = useState([]);
const [checkedDataLicense, setCheckedDataLicense] = useState([]);
const [checkedDataLocation, setCheckedDataLocation] = useState([]);

const handleCheckbox = (e, setState) => {
  const {value, checked} = e.target;

  if(checked) {
    setState ((prev) => [...prev, value]);
}
else {
  setState((prev) => prev.filter((data) => data !== value));
}
}

  function handleHmenu(){
    setActive(true)
  }
  function handleVmenu(){
    setActive(false)
  }
  
  const [isFocused, setIsFocused] = useState(false);
  
  return (<div>
    <BackgroundTuning>
    <h3>Home / Tuning</h3>
    <h2>Our ranges</h2>
    <h1>Tuning</h1>
</BackgroundTuning>

<Container>
<Menu>
<MenuLeft>
  <h1>Cost of car</h1>
</MenuLeft>
<MenuRight>
  <Hamburger>
    <img src={hamburger} alt="hamburger-icon"/>
    <h1>Item <span style={{color : '#006DAB'}}>25.156</span></h1>
    </Hamburger>
    <SelectButton>
    <input type="text"  placeholder='Search your CAMPER here'
      value={searchData}
      onChange={(e) => setSearchData(e.target.value)}
      style={{
        border: `2px solid ${isFocused ? "#006DAB" : "#ccc"}`,
        outline: "none",
        padding: "8px",
        borderRadius: "4px",
        transition: "border-color 0.3s ease",
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      />
     </SelectButton>
     <Autocomplete className='autocomplete2'
      disablePortal
      options={Numbers}
      sx={{ width: 100 ,height: 45}}
      size='small'
      renderInput={(params) => <TextField {...params} label=""  />}
    />
     <ClickButtons>
      <button onClick={handleHmenu}><img src={vImg} alt="button-img" /></button>
      <button onClick={handleVmenu} style={{borderRadius: '0px 5px 5px 0px'}}><img src={hImg} alt="button-img" /></button>
     </ClickButtons>
</MenuRight>
</Menu>
<CarCollectionSidebar>
<Sidebar>
  <FromTo>
    <FromToText>
    <h1>from</h1><h1>to</h1>
    </FromToText>
    <FromToButton>
    <Button></Button>
    <Button></Button>
    </FromToButton>
  </FromTo>

  <InputBox>
  
  <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
  <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
          <FormControlLabel control={<Checkbox value="Luxury Off-Roader" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Luxury Off-Roader" />
    <FormControlLabel control={<Checkbox value="Eco Cruiser Caravan" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Eco Cruiser Caravan" />
    <FormControlLabel control={<Checkbox value="Adventure Motor X" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Adventure Motor X" />
    <FormControlLabel control={<Checkbox value="Turbo Caravan Deluxe" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Turbo Caravan Deluxe" />
    <FormControlLabel control={<Checkbox value="Rugged Terrain Explorer" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Rugged Terrain Explorer" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

  </InputBox>

  <InputBox>
  
  <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
  <Typography>Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
          <FormControlLabel control={<Checkbox value="Jeju Caravan Rentals" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Jeju Caravan Rentals" />
          <FormControlLabel control={<Checkbox value="Busan Camper Tuning" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Busan Camper Tuning" />
          <FormControlLabel control={<Checkbox value="Seoul Tuned Campers" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Seoul Tuned Campers" />
          <FormControlLabel control={<Checkbox value="Gyeonggi Nomads" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Gyeonggi Nomads" />
          <FormControlLabel control={<Checkbox value="Han-Vang River Motors" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Han-Vang River Motors" />
          <FormControlLabel control={<Checkbox value="Daegu Tuned Campers" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Daegu Tuned Campers" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

  </InputBox>

  <InputBox>
  
  <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
  <Typography>License type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
          <FormControlLabel control={<Checkbox value="TCD-1234" onChange={(e) => handleCheckbox(e, setCheckedDataLicense)}/>} label="TCD-1234" />
          <FormControlLabel control={<Checkbox value="AMX-5678" onChange={(e) => handleCheckbox(e, setCheckedDataLicense)}/>} label="AMX-5678" />
          <FormControlLabel control={<Checkbox value="LO-3456" onChange={(e) => handleCheckbox(e, setCheckedDataLicense)}/>} label="LO-3456" />
          <FormControlLabel control={<Checkbox value="ECC-7890" onChange={(e) => handleCheckbox(e, setCheckedDataLicense)}/>} label="ECC-7890" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

  </InputBox>
  
  <InputBox>
  
  <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
  <Typography>Number of travelers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
          <FormControlLabel control={<Checkbox value="3" onChange={(e) => handleCheckbox(e, setCheckedDataPeople)}/>} label="3" />
          <FormControlLabel control={<Checkbox value="4" onChange={(e) => handleCheckbox(e, setCheckedDataPeople)}/>} label="4" />
          <FormControlLabel control={<Checkbox value="5" onChange={(e) => handleCheckbox(e, setCheckedDataPeople)}/>} label="5" />
          <FormControlLabel control={<Checkbox value="6" onChange={(e) => handleCheckbox(e, setCheckedDataPeople)}/>} label="6" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

  </InputBox>

  <InputBox>
  
  <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
  <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormGroup>
          <FormControlLabel control={<Checkbox value="Seoul" onChange={(e) => handleCheckbox(e, setCheckedDataLocation)}/>} label="Seoul" />
          <FormControlLabel control={<Checkbox value="Busan" onChange={(e) => handleCheckbox(e, setCheckedDataLocation)}/>} label="Busan" />
          <FormControlLabel control={<Checkbox value="Jeju" onChange={(e) => handleCheckbox(e, setCheckedDataLocation)}/>} label="Jeju" />
          <FormControlLabel control={<Checkbox value="Daegu" onChange={(e) => handleCheckbox(e, setCheckedDataLocation)}/>} label="Daegu" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

  </InputBox>

  <CancelButton>
    <BlueButton style={{background:'#FF7A00'}}>Cancel</BlueButton>
    <BlueButton>Search</BlueButton>
  </CancelButton>
  <img style={{marginTop:'30px',width:'261px'}} src={minicars} alt="cars-icon" />
  <BlueButton style={{marginTop:'15px',marginLeft:'132px'}}>Compare</BlueButton>
</Sidebar>
{ 
  active ?    <HMenuComponent searchData={searchData} checkedData={checkedData} checkedDataPeople={checkedDataPeople} checkedDataCompany={checkedDataCompany} checkedDataLicense={checkedDataLicense} checkedDataLocation={checkedDataLocation}/>
  : <VMenuComponent searchData={searchData} checkedData={checkedData} checkedDataPeople={checkedDataPeople} checkedDataCompany={checkedDataCompany} checkedDataLicense={checkedDataLicense} checkedDataLocation={checkedDataLocation}/>
}


</CarCollectionSidebar>
</Container>
</div>
  )
}

export default Tuning