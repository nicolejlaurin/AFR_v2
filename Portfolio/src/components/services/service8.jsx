import React from 'react';
import Img1 from '../../images/Structural repair /Structural-Reinforcement.jpg';
import { Link }  from 'react-router-dom';

export default () => (
	<div className='section3-CN'>

	<div class="service-split">
		<div>
		<h4>
		Structural Repairs
		</h4>
		<p>Elevate Your Foundation with Our Affordable Structural Repair Services! Experience the difference of our budget-friendly solutions that reinforce and restore the structural integrity of your property. Trust our experts at Affordable foundation repair.
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
