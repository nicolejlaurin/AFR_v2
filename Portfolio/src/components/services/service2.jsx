import React from 'react';
import { Link }  from 'react-router-dom';
import Img1 from '../../images/Basement lowering/underpinning-example.jpeg';
import Img2 from '../../images/Basement lowering/bench-footing-lowering.jpg';
import Img3 from '../../images/Basement lowering/empty-under-construction-view-on-concrete-floor-co-2022-11-12-11-25-17-utc.jpg';
export default () => (
	<div className='section3-CN'>
		<div class="service-split">
		<div>
		<h4>
		Basement Lowering
		</h4>
		<p>
		Maximize comfort with Affordable Foundation Repair's expert basement lowering solutions. Our dedicated team excels in crafting more spacious and inviting living areas by lowering basement levels. Elevate your home's functionality and comfort with this transformative service.	</p>
	</div>
	</div>
	<div className='editorial-template'>
		<hr className="editorial-underline"></hr>
		<div class="project-split">
		<img class="service-split-img" src={Img1}></img>
		<img class="service-split-img" src={Img2}></img>
		<img class="service-split-img" src={Img3}></img>
	</div>
</div>
<Link to='/servicepage'>
			<button className="see-more-button">See More Services</button>
	</Link>
	</div>
);
