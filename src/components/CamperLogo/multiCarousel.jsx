import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../CamperLogo/slick.css'
import { MultiCarouselDiv } from './CamperStylelogo';
import car1 from '../../assets/camperlogoimg/car1.svg'
import car2 from '../../assets/camperlogoimg/car2.svg'
import car3 from '../../assets/camperlogoimg/car3.svg'
import car4 from '../../assets/camperlogoimg/car4.svg'


const MultiCarousel = () => {
    var settings = {
        dots: true,
        nextArrow: (
            <div>
              <div className="next-slick-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
              </div>
            </div>
          ),
      
          prevArrow: (
            <div>
              <div className="next-slick-arrow rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
              </div>
            </div>
          ),
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="slider-container" style={{margin:'20px 60px'}}>
          <Slider {...settings}>
            <div>
              <MultiCarouselDiv>
                <img src={car1} alt="car-img" />
                <h1>Knaus</h1>
                <button><p>Discover the range</p></button>
                <select name="" id=""><option>Choose a model</option></select>
              </MultiCarouselDiv>
            </div>
            <div>
            <MultiCarouselDiv>
            <img src={car2} alt="car-img" />
                <h1>Knaus</h1>
                <button><p>Discover the range</p></button>
                <select name="" id=""><option>Choose a model</option></select>
            </MultiCarouselDiv>
            </div>
            <div>
            <MultiCarouselDiv>
            <img src={car3} alt="car-img" />
                <h1>Knaus</h1>
                <button><p>Discover the range</p></button>
                <select name="" id=""><option>Choose a model</option></select>
            </MultiCarouselDiv>
            </div>
            <div>
            <MultiCarouselDiv>
            <img src={car4} alt="car-img" />
                <h1>Knaus</h1>
                <button><p>Discover the range</p></button>
                <select name="" id=""><option>Choose a model</option></select>
            </MultiCarouselDiv>
            </div>
            <div>
            <MultiCarouselDiv>
            <img src={car1} alt="car-img" />
                <h1>Knaus</h1>
                <button><p>Discover the range</p></button>
                <select name="" id=""><option>Choose a model</option></select>
            </MultiCarouselDiv>
            </div>
            <div>
            <MultiCarouselDiv>
            <img src={car2} alt="car-img" />
                <h1>Knaus</h1>
                <button><p>Discover the range</p></button>
                <select name="" id=""><option>Choose a model</option></select>
            </MultiCarouselDiv>
            </div>
            <div>
            <MultiCarouselDiv>
            <img src={car3} alt="car-img" />
                <h1>Knaus</h1>
                <button><p>Discover the range</p></button>
                <select name="" id=""><option>Choose a model</option></select>
            </MultiCarouselDiv>
            </div>
            <div>
            <MultiCarouselDiv>
            <img src={car4} alt="car-img" />
                <h1>Knaus</h1>
                <button><p>Discover the range</p></button>
                <select name="" id=""><option>Choose a model</option></select>
            </MultiCarouselDiv>
            </div>
          </Slider>
        </div>
      );
    }



export default MultiCarousel