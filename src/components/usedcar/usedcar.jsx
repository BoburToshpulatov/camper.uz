import React, { useState } from 'react'
import { BackgroundUsedcar } from '../styled'
import hamburger from '../../assets/icon-park-outline_hamburger-button.svg'
import vImg from "../../assets/vButton.svg"
import hImg from "../../assets/hButton.svg"
import HMenuComponent from './hMenu'
import VMenuComponent from './vMenu'
import minicars from '../../assets/image.png'
import { BlueButton, BrandSelect, Button, CancelButton, CarCollectionSidebar, CheckboxInput, ClickButtons, Container, FromTo, FromToButton, FromToText, Hamburger, InputBox, Menu, MenuLeft, MenuRight, SelectButton, Sidebar } from './motor'
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
  function handleHmenu(){
    setActive(true)
  }
  function handleVmenu(){
    setActive(false)
  }
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
      <label htmlFor="">Sort by</label>
      <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 255 ,height: 45}}
      size='small'
      renderInput={(params) => <TextField {...params} label="Company"  />}
    />
     </SelectButton>
     <Autocomplete
      disablePortal
      options={Numbers}
      sx={{ width: 85 ,height: 45}}
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
  
  <Accordion>
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
    <FormControlLabel control={<Checkbox  />} label="Aidal" />
    <FormControlLabel control={<Checkbox  />} label="Knal" />
    <FormControlLabel control={<Checkbox  />} label="Escape" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

  </InputBox>

  <InputBox>
  
  <Accordion>
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
    <FormControlLabel control={<Checkbox  />} label="Escape" />
    <FormControlLabel control={<Checkbox  />} label="Aidal" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

  </InputBox>

  <InputBox>
  
  <Accordion>
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
    <FormControlLabel control={<Checkbox  />} label="1 year" />
    <FormControlLabel control={<Checkbox  />} label="2 years" />
    <FormControlLabel control={<Checkbox  />} label="1.5 year" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

  </InputBox>
  
  <InputBox>
  
  <Accordion>
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
    <FormControlLabel control={<Checkbox  />} label="2" />
    <FormControlLabel control={<Checkbox  />} label="3-4" />
    <FormControlLabel control={<Checkbox  />} label="5+" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

  </InputBox>

  <InputBox>
  
  <Accordion>
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
    <FormControlLabel control={<Checkbox />} label="Seoul" />
    <FormControlLabel control={<Checkbox  />} label="Daegu" />
    <FormControlLabel control={<Checkbox  />} label="Pusan" />
    </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

  </InputBox>

  <CancelButton>
    <BlueButton style={{background:'#FF7A00'}}>Cancel</BlueButton>
    <BlueButton>Search</BlueButton>
  </CancelButton>
  <img style={{marginTop:'30px'}} src={minicars} alt="cars-icon" />
  <BlueButton style={{marginTop:'15px',marginLeft:'117px'}}>Compare</BlueButton>
</Sidebar>
{ 
  active ?    <HMenuComponent/>: <VMenuComponent/>
}


</CarCollectionSidebar>
</Container>
</>
  )
}

export default Usedcar