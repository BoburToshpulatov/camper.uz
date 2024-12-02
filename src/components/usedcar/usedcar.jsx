import React, { useState } from 'react'
import { BackgroundUsedcar } from '../styled'
import hamburger from '../../assets/icon-park-outline_hamburger-button.svg'
import vImg from "../../assets/vButton.svg"
import hImg from "../../assets/hButton.svg"
import HMenuComponent from './hMenu'
import VMenuComponent from './vMenu'
import minicars from '../../assets/image.png'
import { BlueButton, Button, CancelButton, CarCollectionSidebar,ClickButtons, Container, FromTo, FromToButton, FromToText, Hamburger, InputBox, Menu, MenuLeft, MenuRight, SelectButton, Sidebar } from './motor'
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

const Usedcar = () => {
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
  return (<>
    <BackgroundUsedcar>
    <h3>Home / Used Car</h3>
    <h2>Our ranges</h2>
    <h1>Used Car</h1>
</BackgroundUsedcar>


<Container>
<Menu>
<MenuLeft>
  <h1>Cost of car</h1>
</MenuLeft>
<MenuRight>
  <Hamburger>
    <img src={hamburger} alt="hamburger-icon" />
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
          <FormControlLabel control={<Checkbox value="Eco Caravan Compact" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Eco Caravan Compact" />
    <FormControlLabel control={<Checkbox value="Trail Blazer Motor" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Trail Blazer Motor" />
    <FormControlLabel control={<Checkbox value="Family Adventure" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Family Adventure" />
    <FormControlLabel control={<Checkbox value="Urban Explorer" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Urban Explorer" />
    <FormControlLabel control={<Checkbox value="Sunset Rider" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Sunset Rider" />
    <FormControlLabel control={<Checkbox value="Classic Camper" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="Classic Camper" />
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
          <FormControlLabel control={<Checkbox value="Seoul New Caravans" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Seoul New Caravans" />
          <FormControlLabel control={<Checkbox value="Han-Li River Motors" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Han-Li River Motors" />
          <FormControlLabel control={<Checkbox value="Busan Super Motors" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Busan Super Motors" />
          <FormControlLabel control={<Checkbox value="Jeju Caravan Rentals" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Jeju Caravan Rentals" />
          <FormControlLabel control={<Checkbox value="Gangnam Camping" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Gangnam Camping" />
          <FormControlLabel control={<Checkbox value="Daegu Car Ventures" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Daegu Car Ventures" />
          <FormControlLabel control={<Checkbox value="Gyeonggi Local Nomads" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Gyeonggi Local Nomads" />
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
          <FormControlLabel control={<Checkbox value="A-class" onChange={(e) => handleCheckbox(e, setCheckedDataLicense)}/>} label="A-class" />
          <FormControlLabel control={<Checkbox value="B-class" onChange={(e) => handleCheckbox(e, setCheckedDataLicense)}/>} label="B-class" />
          <FormControlLabel control={<Checkbox value="C-class" onChange={(e) => handleCheckbox(e, setCheckedDataLicense)}/>} label="C-class" />
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
          <FormControlLabel control={<Checkbox value="Daegu" onChange={(e) => handleCheckbox(e, setCheckedDataLocation)}/>} label="Daegu" />
          <FormControlLabel control={<Checkbox value="Jeju" onChange={(e) => handleCheckbox(e, setCheckedDataLocation)}/>} label="Jeju" />
          <FormControlLabel control={<Checkbox value="Incheon" onChange={(e) => handleCheckbox(e, setCheckedDataLocation)}/>} label="Incheon" />
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
</>
  )
}

export default Usedcar