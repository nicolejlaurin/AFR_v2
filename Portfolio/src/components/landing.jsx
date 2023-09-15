import React from 'react';
import { Link }  from 'react-router-dom';
import 'animate.css';
import Video from './drake.mp4';
import logo_v2 from '../images/AFR_Logo_V2.png';


export default () => (
	<div className='landing'>
		<div className='info'>

	

<div class="overlay">
		<a href="/" aria-current="page" class="w-inline-block w--current"></a>
		<div class="landing-info">
		 <img className="logo" src={logo_v2} href='/' alt="Image"></img>
		 <h2>Secure Foundation, Secure Home</h2>
		 </div>
			<p class="animated fadeInUp"></p>
			<Link to='/contactpage'>
			<button className="button1">Call Now (613) 860-5454</button>
			</Link>
		</div>
		</div>
	</div>
);
