import React from 'react'
import { useParams } from 'react-router-dom'
import { Best, CarDetails, CarDetailsLeft, CarDetailsRight, CompanyLicense, CompanyLicenseLeft, CompanyLicenseRight, Description, DescriptionLeft, DescriptionRight, DescriptionRight1, DescriptionRight2, DescriptionRight3, DescriptionRight4, DetailBackground, Infbox1, Infbox2, Infbox3, ItemReview, ItemReviewInformation, NumberEmail, Questions, QuestionsLeft, QuestionsLeftBottom, QuestionsLeftTop, QuestionsRight, RightNamePrice, TabOptions } from './motor';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { caravans } from './mock/mock';




function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const CaravanDetailNew = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    let{id} = useParams();
    const dataById=caravans.find((data)=>data.id===parseInt(id));
  return (
    <div>
        <DetailBackground>
          <h1>{dataById.company}</h1>
          <Stack style={{marginTop:'-10px'}} spacing={2} direction="row">
      <Button style={{width:'150px'}} variant="contained">ADD TO CART</Button>
      <Button style={{width:'150px',border:'1.5px solid white',color:'white'}} variant="outlined">COMPARE</Button>
       </Stack>
        </DetailBackground>

        <CarDetails>
        <CarDetailsLeft><img src={dataById.photo} alt="" /></CarDetailsLeft>
        <CarDetailsRight>
        <RightNamePrice>
          <h1 style={{fontSize:'24px',color:'black'}}>{dataById.name}</h1>
          <h1>{dataById.cost}</h1>
        </RightNamePrice>
        <CompanyLicense>
          <CompanyLicenseLeft>
            <p>Company</p>
            <p>People</p>
            <p>License type</p>
          </CompanyLicenseLeft>
          <CompanyLicenseRight >
            <p>{dataById.company}</p>
            <p>{dataById.people}</p>
            <p>{dataById.license}</p>
          </CompanyLicenseRight>
        </CompanyLicense>
       </CarDetailsRight> 
        </CarDetails>

        <Description>
       <DescriptionLeft>
        <h1>Comfort</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
        </DescriptionLeft> 
        <DescriptionRight></DescriptionRight>
       </Description>

       <Description>
        <DescriptionRight1></DescriptionRight1>
       <DescriptionLeft>
        <h1 style={{marginRight:'80px'}}>Tidying away is child’s play!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet, pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis risus, id in proin sed proin iaculis mi.</p>
        </DescriptionLeft> 
       </Description>

       <Description>
       <DescriptionLeft>
        <h1 style={{marginRight:'229px'}}>Ventilated , Lit up</h1>
        <p>In our vans and motorhomes, all our body lighting is 100% LED: a guarantee of energy efficiency and durability. <br />
As for ventilation, we also often offer double ventilation in the bathroom (Skylight + window), which is very popular with our customers… <br />
Camper relies on legendary Seitz windows. They offer the best insulation and are also the easiest to use and safest because they can’t be removed from the outside.												
					</p>
        </DescriptionLeft> 
        <DescriptionRight2></DescriptionRight2>
       </Description>

       <Description>
        <DescriptionRight3></DescriptionRight3>
       <DescriptionLeft>
        <h1 style={{marginRight:'322px'}}>Easy access</h1>
        <p>We add little touches that your joints will thank you for… <br />
All our motorhomes are equipped with a built-in step to facilitate entry to the vehicle. <br />
All our vans are equipped with an electric step.</p>
        </DescriptionLeft> 
       </Description>

       <Description>
       <DescriptionLeft>
        <h1 style={{marginRight:'166px',marginTop:'50px'}}>Heating when driving</h1>
        <p>Fuel heating is now very popular in the industry, but this was not always the case; Camper (once again) led the way in this area over 15 years ago. <br />
        One of the advantages it offers is that it can heat up your vehicle while you drive, for a more comfortable arrival.
					</p>
          <Stack style={{marginTop:'10px',marginRight:'180px'}} spacing={2} direction="row">
      <Button style={{width:'150px'}} variant="contained">ADD TO CART</Button>
      <Button style={{width:'150px',border:'1.5px solid'}} variant="outlined">COMPARE</Button>
       </Stack>
        </DescriptionLeft> 
        <DescriptionRight4></DescriptionRight4>
       </Description>

<TabOptions>
<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',background: 'rgba(0, 109, 171, 0.20)' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{marginLeft:'34px'}} label="Item reviews" {...a11yProps(0)} />
          <Tab label="Q&A" {...a11yProps(1)} />
          <Tab label="FAQ" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ItemReview>
          <Best>
          <h1>Premium Review <span style={{color:'#006DAB'}}>35</span></h1>
          <Autocomplete
          size='small'
      disablePortal
      options={top100Films}
      sx={{ width: 180 }}
      renderInput={(params) => <TextField {...params} label="Best" />}
    />
    </Best>
    {caravans.map((value, index) => {
                return ( 
                  <ItemReviewInformation>
                  <Infbox1>
                    <img src={value.photo} alt="car-icon" />
                  </Infbox1>
                  <Infbox2>
                    <h1>{value.name}</h1>
                    <p style={{marginTop:'-5px'}}>{value.company}</p>
                    <p style={{color:'#373737'}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                  </Infbox2>
                  <Infbox3>
                    <p>ID: <span style={{color:'#373737'}}>{value.id}</span></p>
                    <p>Date: <span style={{color:'#373737'}}>{value.date}</span></p>
                    <p>Viewed: <span style={{color:'#373737'}}>{value.cost}</span></p>
                  </Infbox3>
                </ItemReviewInformation>
                );
            })
        }
    
        </ItemReview>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Questions>
          <QuestionsLeft>
          <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
      noValidate
      autoComplete="off"
    >
     <TextField id="standard-basic" label="Name" variant="standard" defaultValue="Question Lorem ipsum dolor sit amet ?"/>
    </Box>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '60ch'} }}
      noValidate
      autoComplete="off"
    >
     <TextField id="standard-basic" label="Name" variant="standard" defaultValue="Question Lorem ipsum dolor sit amet ?"/>
    </Box>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
      noValidate
      autoComplete="off"
    >
     <TextField id="standard-basic" label="Name" variant="standard" defaultValue="Question Lorem ipsum dolor sit amet ?"/>
    </Box>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
      noValidate
      autoComplete="off"
    >
     <TextField id="standard-basic" label="Name" variant="standard" defaultValue="Question Lorem ipsum dolor sit amet ?" />
    </Box>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '60ch' } }}
      noValidate
      autoComplete="off"
      
    >
     <TextField id="standard-basic" label="Name" variant="standard" defaultValue="Question Lorem ipsum dolor sit amet ?" />
    </Box>
          </QuestionsLeft>
          <QuestionsRight>
            <h1>Send a question</h1>
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '43ch' } }}
      noValidate
      autoComplete="off"
      size='small'
    >
      <TextField id="filled-basic" label="Your name" variant="filled" />
    </Box>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '43ch' } }}
      noValidate
      autoComplete="off"
      size='small'
    >
      <TextField id="filled-basic" label="Your email" variant="filled" />
    </Box>
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '43ch' } }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label="Your question"
          multiline
          rows={4}
          variant="filled"
        />
        </Box>
        <Button style={{width:'373px',height:'45px',marginTop:'20px'}} variant="contained">Send your question</Button>
          </QuestionsRight>
        </Questions>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Questions>
          <QuestionsLeft>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          width='150px'
        >
         Frequently asked questions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          width='150px'
        >
         Frequently asked questions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          width='150px'
        >
         Frequently asked questions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          width='150px'
        >
         Frequently asked questions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          width='150px'
        >
         Frequently asked questions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          width='150px'
        >
         Frequently asked questions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          width='150px'
        >
         Frequently asked questions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
          </QuestionsLeft>
          <QuestionsRight>
            <h1>Have you got a question?</h1>
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '43ch' } }}
      noValidate
      autoComplete="off"
      size='small'
    >
      <TextField id="filled-basic" label="Your name" variant="filled" />
    </Box>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '43ch' } }}
      noValidate
      autoComplete="off"
      size='small'
    >
      <TextField id="filled-basic" label="Your email" variant="filled" />
    </Box>
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '43ch' } }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label="Your question"
          multiline
          rows={4}
          variant="filled"
        />
        </Box>
        <Button style={{width:'373px',height:'45px',marginTop:'20px'}} variant="contained">Send your question</Button>
          </QuestionsRight>
        </Questions>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Questions>
          <QuestionsLeft style={{gap:'20px'}}>
            <QuestionsLeftTop></QuestionsLeftTop>
            <QuestionsLeftBottom>
              <NumberEmail>
                <p>Phone number:</p>
                <h1>+7 237 181 181</h1>
                <h1 style={{marginTop:'-8px'}}>+7 210 181 191</h1>
              </NumberEmail>
              <NumberEmail>
                <p>E-mail:</p>
                <h1>logo.uz</h1>
              </NumberEmail>
            </QuestionsLeftBottom>
          </QuestionsLeft>
        <QuestionsRight>
            <h1>Have you got a question?</h1>
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '43ch' } }}
      noValidate
      autoComplete="off"
      size='small'
    >
      <TextField id="filled-basic" label="Your name" variant="filled" />
    </Box>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '43ch' } }}
      noValidate
      autoComplete="off"
      size='small'
    >
      <TextField id="filled-basic" label="Your email" variant="filled" />
    </Box>
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '43ch' } }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="filled-multiline-static"
          label="Your question"
          multiline
          rows={4}
          variant="filled"
        />
        </Box>
        <Button style={{width:'373px',height:'45px',marginTop:'20px'}} variant="contained">Send your question</Button>
          </QuestionsRight>
        </Questions>
      </CustomTabPanel>
    </Box>
</TabOptions>
       
       
       
    </div>
  )
}
export default CaravanDetailNew