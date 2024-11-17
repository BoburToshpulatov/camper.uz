import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import caruselimg from "../../assets/camperlogoimg.svg"
import caruselimg1 from "../../assets/camperlogoimg/carousel1.png"
import caruselimg2 from "../../assets/camperlogoimg/carousel2.png"
import { BackgroundImgMini, BackgroundImgMini2, BackgroundImgMini3, BackgroundImgMini4, BackgroundImgMini5, BackgroundImgMini6, Blog, MainContainerImages, MainContainerImagesLeft, MainContainerImagesLeft2, MainContainerImagesRight, Recommend, VideoBoxes, VideoBoxes2, VideoBoxes3, VideoBoxes4, VideoBoxes5, VideoBoxes6, VideoBoxes7, VideoBoxes8, VideoContainer, Videos } from './CamperStylelogo'
import playbtn from '../../assets/camperlogoimg/Ellipse 5 (1).svg'
import playbtn2 from '../../assets/camperlogoimg/play.svg'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MultiCarousel from './multiCarousel'
import Typography from '@mui/material/Typography';





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  border: 'none'
  };




export const CamperLogo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
 
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  const [open6, setOpen6] = React.useState(false);
  const handleOpen6 = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);

  const [open7, setOpen7] = React.useState(false);
  const handleOpen7 = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);
  
  return ( <>
    <Carousel  autoPlay transitionTime="1000" interval="4000" showThumbs={false} infiniteLoop={true} showStatus={false}>
 
    <div>
        <img src={caruselimg}  alt='img-carusel'/>
    </div>
    <div>
        <img src={caruselimg}  alt='img-carusel'/>
    </div>
    <div>
        <img  src={caruselimg}  alt='img-carusel'/>
    </div>
    
</Carousel>

<Recommend>
<h1>Recommend</h1>
</Recommend>

<MultiCarousel/>

<Videos style={{marginTop:'70px'}}>
<h1>Videos</h1>
</Videos>

<VideoContainer>

<VideoBoxes onClick={handleOpen}>
   <img src={playbtn} alt="" />
   <img src={playbtn2} alt=""style={{marginLeft: '-40px'}}/>
  </VideoBoxes>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:'15px',background:'#FFF',width:"540px" ,height:"330px",border:'none' }} >
        <Typography sx={{marginBottom:'10px',marginTop:'-25px',marginLeft:'-10px'}} id="modal-modal-title" variant="h6" component="h2">
        DS9eR+a
    </Typography>
    <Box sx={{marginLeft:'-10px'}}>
    <iframe   width="560" height="320" src="https://www.youtube.com/embed/9NpSU-j6eV8?si=mQsaMuR_I8dxFYoS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Box>
        </Box>
      </Modal>
    
      

      <VideoBoxes2 onClick={handleOpen1}>
   <img src={playbtn} alt="" />
   <img src={playbtn2} alt=""style={{marginLeft: '-40px'}}/>
  </VideoBoxes2>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={{...style,borderRadius:'15px',background:'#FFF',width:"540px" ,height:"330px" }} >
        <Typography sx={{marginBottom:'10px',marginTop:'-25px',marginLeft:'-10px'}} id="modal-modal-title" variant="h6" component="h2">
        위드원모터스
    </Typography>
    <Box sx={{marginLeft:'-10px'}}>
    <iframe width="560" height="320" src="https://www.youtube.com/embed/WwPyPlX0hJA?si=gpDo9rfH1tYk_Rx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Box>
        </Box>
      </Modal>

      <VideoBoxes3 onClick={handleOpen2}>
   <img src={playbtn} alt="" />
   <img src={playbtn2} alt=""style={{marginLeft: '-40px'}}/>
  </VideoBoxes3>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:'15px',background:'#FFF',width:"540px" ,height:"330px" }} >
        <Typography sx={{marginBottom:'10px',marginTop:'-25px',marginLeft:'-10px'}} id="modal-modal-title" variant="h6" component="h2">
        르벤투스 차박S
    </Typography>
    <Box sx={{marginLeft:'-10px'}}>
    <iframe  width="560" height="320" src="https://www.youtube.com/embed/sThvM5wfCOQ?si=pZ3UhQUBQENTjBGr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Box>
        </Box>
      </Modal>
     
       <VideoBoxes4 onClick={handleOpen3}>
   <img src={playbtn} alt="" />
   <img src={playbtn2} alt=""style={{marginLeft: '-40px'}}/>
  </VideoBoxes4>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:'15px',background:'#FFF',width:"540px" ,height:"330px" }} >
        <Typography sx={{marginBottom:'10px',marginTop:'-25px',marginLeft:'-10px'}} id="modal-modal-title" variant="h6" component="h2">
        Result
    </Typography>
    <Box sx={{marginLeft:'-10px'}}>
    <iframe width="560" height="320" src="https://www.youtube.com/embed/yAR9jn47CIo?si=E0sigxpqJ9RkMqWp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Box>
        </Box>
      </Modal>
      
       <VideoBoxes5 onClick={handleOpen4}>
   <img src={playbtn} alt="" />
   <img src={playbtn2} alt=""style={{marginLeft: '-40px'}}/>
  </VideoBoxes5>
      <Modal
        open={open4}
        onClose={handleClose4}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:'15px',background:'#FFF',width:"540px" ,height:"330px" }} >
        <Typography sx={{marginBottom:'10px',marginTop:'-25px',marginLeft:'-10px'}} id="modal-modal-title" variant="h6" component="h2">
        트레블라인 550
    </Typography>
    <Box sx={{marginLeft:'-10px'}}>
    <iframe width="560" height="320" src="https://www.youtube.com/embed/1KCsqaZEohU?si=xm1uPHiPH7Gpnj6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Box>
        </Box>
      </Modal>
      
       <VideoBoxes6 onClick={handleOpen5}>
   <img src={playbtn} alt="" />
   <img src={playbtn2} alt=""style={{marginLeft: '-40px'}}/>
  </VideoBoxes6>
      <Modal
        open={open5}
        onClose={handleClose5}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:'15px',background:'#FFF',width:"540px" ,height:"330px" }} >
        <Typography sx={{marginBottom:'10px',marginTop:'-25px',marginLeft:'-10px'}} id="modal-modal-title" variant="h6" component="h2">
        미스터캠퍼
    </Typography>
    <Box sx={{marginLeft:'-10px'}}>
    <iframe  width="560" height="320" src="https://www.youtube.com/embed/yAR9jn47CIo?si=hP9rz2ug6igX2QMJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Box>
        </Box>
      </Modal>
      
      <VideoBoxes7 onClick={handleOpen6}>
   <img src={playbtn} alt="" />
   <img src={playbtn2} alt=""style={{marginLeft: '-40px'}}/>
  </VideoBoxes7>
      <Modal
        open={open6}
        onClose={handleClose6}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:'15px',background:'#FFF',width:"540px" ,height:"330px" }} >
        <Typography sx={{marginBottom:'10px',marginTop:'-25px',marginLeft:'-10px'}} id="modal-modal-title" variant="h6" component="h2">
        Azure
    </Typography>
    <Box sx={{marginLeft:'-10px'}}>
    <iframe width="560" height="320" src="https://www.youtube.com/embed/IdoCvQTlU28?si=kjdXKoQxwroOuE4N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Box>
        </Box>
      </Modal>
      
      <VideoBoxes8 onClick={handleOpen7}>
   <img src={playbtn} alt="" />
   <img src={playbtn2} alt=""style={{marginLeft: '-40px'}}/>
  </VideoBoxes8>
      <Modal
        open={open7}
        onClose={handleClose7}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style,borderRadius:'15px',background:'#FFF',width:"540px" ,height:"330px" }} >
        <Typography sx={{marginBottom:'10px',marginTop:'-25px',marginLeft:'-10px'}} id="modal-modal-title" variant="h6" component="h2">
        HWC620DL
    </Typography>
    <Box sx={{marginLeft:'-10px'}}>
    <iframe  width="560" height="320" src="https://www.youtube.com/embed/jUE8zKpLsic?si=joV3BEXoWLIGdctk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Box>
        </Box>
      </Modal>
      
</VideoContainer>

<Blog>
<h1>Blogs</h1>
</Blog>

<MainContainerImages>
<MainContainerImagesLeft>
<h1>Camper</h1>
<h3>@camper_1</h3>
<p>Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.</p>
</MainContainerImagesLeft>
<MainContainerImagesLeft2>
<h1>Lorem ipsum</h1>
<h3>@Lorem ipsum</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat platea mauris at turpis. Volutpat, morbi sit vitae id. Aliquam eleifend aenean neque in in a quam vivamus</p>
</MainContainerImagesLeft2>
<MainContainerImagesRight>
<BackgroundImgMini></BackgroundImgMini>
<BackgroundImgMini2></BackgroundImgMini2>
<BackgroundImgMini3></BackgroundImgMini3>
<BackgroundImgMini4></BackgroundImgMini4>
<BackgroundImgMini5></BackgroundImgMini5>
<BackgroundImgMini6></BackgroundImgMini6>
</MainContainerImagesRight>
</MainContainerImages>
</>
  )
}
export default CamperLogo