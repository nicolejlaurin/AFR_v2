import React from 'react';
import Img1 from '../../images/Crack water proofing/cracked-waterproofing.jpg';
import { Link }  from 'react-router-dom';

export default () => (
	<div className='section3-CN'>

	<div class="service-split">
		<div>
		<h4>
		Cracked Waterproofing
		</h4>
		<p>Address cracked waterproofing effectively with Affordable Foundation Repair. Our solutions include fixing cracks, enhancing waterproofing for surfaces like basements, roofs, and concrete. Prevent leaks, water damage, and benefit from structural analysis and drainage improvements.
		</p>
		</div>
	</div>
	<div className='editorial-template'>
		<hr className="editorial-underline"></hr>
		<div class="project-split">
		<img class="service-split-img" src={Img1}></img>
	</div>
</div>
<Link to='/servicepage'>
			<button className="see-more-button">See More Services</button>
	</Link>
	</div>
);
