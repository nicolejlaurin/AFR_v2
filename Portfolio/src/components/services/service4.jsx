import React from 'react';
import Img1 from '../../images/Window well/building-for-house-basement-concrete-construction-2022-11-12-11-19-04-utc.jpg';
import Img2 from '../../images/Window well/windowswell-on-basement-construction-from-window.jpg';
import Img3 from '../../images/Window well/WindowWell.jpg';
import { Link }  from 'react-router-dom';

export default () => (
	<div className='section3-CN'>
		<div class="service-split">
			<div>
				<h4>Window Well
				</h4>
				<p>Our experts at Affordable Foundation Repair encompass installing, repairing, and maintaining window wells around basement windows. These wells create open space for light and emergency exit. They enhance safety, aesthetics, and protect against water damage and unwanted intruders. Services involve excavation, placement of wells, repairs, cleaning, drainage improvement, and upgrades like covers and safety barriers.
				</p>
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
