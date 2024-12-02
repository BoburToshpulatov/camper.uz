import React, { useState } from 'react'
import { Background } from '../styled'
import { BlueButton, Button, CancelButton, CarCollectionSidebar, ClickButtons, Container, FromTo, FromToButton, FromToText, Hamburger, InputBox, Menu, MenuLeft, MenuRight, SelectButton, Sidebar } from './motor'
import hamburger from '../../assets/icon-park-outline_hamburger-button.svg'
import vImg from "../../assets/vButton.svg"
import hImg from "../../assets/hButton.svg"
import HMenuComponent from './hMenu'
import VMenuComponent from './vMenu'
import minicars from '../../assets/image.png'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Numbers from './numbers'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';





const MotorComponent = () => {
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
    <Background>
    <h3>Home / Motors</h3>
    <h2>Our ranges</h2>
    <h1>Motors</h1>
</Background>


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
      renderInput={(params) => <TextField {...params} />}
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
    <FormControlLabel control={<Checkbox value="르벤투스S+" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="르벤투스S+" />
    <FormControlLabel control={<Checkbox value="ST-7" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="ST-7" />
    <FormControlLabel control={<Checkbox value="ACIER 790R" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="ACIER 790R" />
    <FormControlLabel control={<Checkbox value="르벤투스 차박S" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="르벤투스 차박S" />
    <FormControlLabel control={<Checkbox value="르벤투스680" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="르벤투스680" />
    <FormControlLabel control={<Checkbox value="DS9eR+a" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="DS9eR+a" />
    <FormControlLabel control={<Checkbox value="HWC560DL" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="HWC560DL" />
    <FormControlLabel control={<Checkbox value="HWC620DL" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="HWC620DL" />
    <FormControlLabel control={<Checkbox value="트레블라인 550" onChange={(e) => handleCheckbox(e, setCheckedData)}/>} label="트레블라인 550" />
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
          <FormControlLabel control={<Checkbox value="다온티앤티" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="다온티앤티" />
          <FormControlLabel control={<Checkbox value="Azure" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Azure" />
          <FormControlLabel control={<Checkbox value="제일모빌" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="제일모빌" />
          <FormControlLabel control={<Checkbox value="Result" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="Result" />
          <FormControlLabel control={<Checkbox value="스타모빌" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="스타모빌" />
          <FormControlLabel control={<Checkbox value="영남캠핑카" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="영남캠핑카" />
          <FormControlLabel control={<Checkbox value="한울캠핑카" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="한울캠핑카" />
          <FormControlLabel control={<Checkbox value="훼미리캠핑카" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="훼미리캠핑카" />
          <FormControlLabel control={<Checkbox value="에이스캠퍼" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="에이스캠퍼" />
          <FormControlLabel control={<Checkbox value="월든모빌" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="월든모빌" />
          <FormControlLabel control={<Checkbox value="미스터캠퍼" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="미스터캠퍼" />
          <FormControlLabel control={<Checkbox value="드림캠핑카" onChange={(e) => handleCheckbox(e, setCheckedDataCompany)}/>} label="드림캠핑카" />
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
          <FormControlLabel control={<Checkbox value="1종 보통" onChange={(e) => handleCheckbox(e, setCheckedDataLicense)}/>} label="1종 보통" />
          <FormControlLabel control={<Checkbox value="2종 보통" onChange={(e) => handleCheckbox(e, setCheckedDataLicense)}/>} label="2종 보통" />
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
          <FormControlLabel control={<Checkbox value="3인" onChange={(e) => handleCheckbox(e, setCheckedDataPeople)}/>} label="3인" />
          <FormControlLabel control={<Checkbox value="4인" onChange={(e) => handleCheckbox(e, setCheckedDataPeople)}/>} label="4인" />
          <FormControlLabel control={<Checkbox value="5인" onChange={(e) => handleCheckbox(e, setCheckedDataPeople)}/>} label="5인" />
          <FormControlLabel control={<Checkbox value="6인" onChange={(e) => handleCheckbox(e, setCheckedDataPeople)}/>} label="6인" />
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
          <FormControlLabel control={<Checkbox value="수도권" onChange={(e) => handleCheckbox(e, setCheckedDataLocation)}/>} label="수도권" />
          <FormControlLabel control={<Checkbox value="경상권" onChange={(e) => handleCheckbox(e, setCheckedDataLocation)}/>} label="경상권" />
          <FormControlLabel control={<Checkbox value="충청권" onChange={(e) => handleCheckbox(e, setCheckedDataLocation)}/>} label="충청권" />
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

export default MotorComponent
