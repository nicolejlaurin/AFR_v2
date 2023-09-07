import React from 'react';
import { Link }  from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import Img1 from '../images/trees.jpg';
import Img2 from '../images/cars.jpg';
import Img3 from '../images/contact3.jpg';
import Img4 from '../images/film.jpg';
import Img5 from '../images/transition.jpg';
import Img6 from '../images/process2.jpg';


export default () => (
	<div className='campaign'>
	<h4>Campaign and Commercial Prints</h4>
	<Link to='/aboutpage'>
		<button className="button2" >View more <BsArrowRight class= "arrow-image" width={'2rem'}></BsArrowRight> </button>
	</Link>
		<div class="campaign-split">
		<a class="campaign-item" href="/campaign/campaign1"><img class="campaign-img" src={Img1}></img></a>
		<a class="campaign-item" href="/campaign/campaign2"><img class="campaign-img" src={Img2}></img></a>
		<a class="campaign-item" href="/campaign/campaign3"><img class="campaign-img" src={Img3}></img></a>

				<img class="project-img" src={Img4}></img>
				<img class="project-img" src={Img5}></img>
				<img class="project-img" src={Img6}></img>
	</div>
	</div>
);
