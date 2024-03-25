import React from 'react';
import Img1 from '../../images/Bowing walls/Bowing-Foundation-Wall-Repair.jpg';
import { Link }  from 'react-router-dom';

export default () => (
	<div className='section3-CN'>

	<div class="service-split">
		<div>
		<h4>
		Bowing Walls
		</h4>
		<p>Secure Foundation with Affordable Foundation Repair our expert service for fixing bowed walls. Our specialists strengthen foundations, ensuring your property's stability and your family's safety. Trust our proven solutions for worry-free results.
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
