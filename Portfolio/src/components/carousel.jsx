import React from 'react';
import ReactDOM from "react-dom";
import { Link }  from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import Img4 from '../images/CN-6.jpg';
import Img5 from '../images/CN-6.jpg';
import Img6 from '../images/CN-6.jpg';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  return ( 
    <div className='carousel-div'>
    <Carousel>
      <div >
        <img src={Img4} />
        <p className="legend" style={{background:'#B8DDFF', width:'30rem'}}>Interior Waterproofing</p>
      </div>
      <div>
        <img src={Img4} />
        <p className="legend" style={{background:'#B8DDFF', width:'30rem'}}>Crack Repair</p>
      </div>
      <div>
        <img src={Img4} />
        <p className="legend" style={{background:'#B8DDFF', width:'30rem'}}>Basement Lowering</p>
      </div>
      <div>
        <img src={Img4} />
        <p className="legend" style={{background:'#B8DDFF', width:'30rem'}}>Sewer Backups</p>
      </div>
      <div>
        <img src={Img4} />
        <p className="legend" style={{background:'#B8DDFF', width:'30rem'}}>Wall Replacement</p>
      </div>
      <div>
        <img src={Img4} />
        <p className="legend" style={{background:'#B8DDFF', width:'30rem'}}>Basement Finishing</p>
      </div>
    </Carousel>
    </div>
  );
};

export default CarouselPage;