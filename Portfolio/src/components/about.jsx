import React from 'react';
import Img from '../images/about_img.png';
import SecondPage from './aboutpage';
import Arrow from '../images/arrow.png';
import { Link }  from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import './scroll'


export default function About() {
  return (
	<div className='about-section' id='about'>
    <div class='about-split animated reveal fade-bottom'>
      <div class='about-split-left'>
        <h4>
        Getting to know Affordable Foundation Repair!
        </h4>
    		<p>
          At Affordable Foundation Repair, we understand the critical role a strong and stable foundation plays in ensuring the safety and longevity of your property. With years of experience in the industry, we have built a solid reputation for providing top-notch foundation repair services at competitive prices.
        </p>
        <Link to='/aboutpage'>
          <button className="button2" >Learn more <BsArrowRight class= "arrow-image" width={'2rem'}></BsArrowRight> </button>
        </Link>
      </div>
      <img class= "about-image" src={Img}></img>
    </div>
  </div>


);
}
