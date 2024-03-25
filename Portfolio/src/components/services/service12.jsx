import React from 'react';
import Img1 from '../../images/Wall replacment/wall-replacement1.jpg';
import Img2 from '../../images/Wall replacment/wall-replacement2.jpg';
import { Link }  from 'react-router-dom';

export default () => (
	<div className='section3-CN'>

	<div class="service-split">
		<div>
		<h4>
		Wall Replacement
		</h4>
		<p>Count on Affordable Foundation Repair for dependable wall replacement services. Our professionals restore structural integrity, ensuring the stability and longevity of your property. Safeguard your investment with our high-quality solutions.
		</p>
		</div>
	</div>
	<div className='editorial-template'>
		<hr className="editorial-underline"></hr>
		<div class="project-split">
		<img class="service-split-img" src={Img1}></img>
		<img class="service-split-img" src={Img2}></img>
	</div>
</div>
<Link to='/servicepage'>
			<button className="see-more-button">See More Services</button>
	</Link>
	</div>
);
