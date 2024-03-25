import React from 'react';
import Img1 from '../../images/Basement window/basement-window-replacement-inserts.jpg';
import { Link }  from 'react-router-dom';

export default () => (
	<div className='section3-CN'>

	<div class="service-split">
		<div>
		<h4>
		Basement Window
		</h4>
		<p>Unveil the potential of your basement windows with Affordable Foundation Repair's window repair services. Our experts skillfully repair frames, replace shattered glass, address leaks, and enhance insulation. Elevate the functionality of your basement windows while maintaining structural integrity.
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
