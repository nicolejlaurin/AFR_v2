import React from 'react';
import { Link }  from 'react-router-dom';
import 'animate.css';
import Video from './drake.mp4';
import logo_v1 from '../images/AFR_Logo_V1.png';
import logo_v2 from '../images/AFR_Logo_V2.png';


export default () => (
	<div className='landing'>
		<div className='info'>

	

<div class="overlay">
		<a href="/" aria-current="page" class="w-inline-block w--current">
         <img class="logo" src={logo_v2} href='/' alt="Image"></img>
         </a>
			<p class="animated fadeInUp"></p>
			<Link to='/contactpage'>
			<button className="button1">Call Now (613) 860-5454</button>
			</Link>
		</div>
		</div>
	</div>
);
