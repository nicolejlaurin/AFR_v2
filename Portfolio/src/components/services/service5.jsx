import React from 'react';
import Img1 from '../../images/Sump pump/sump-pump-liner-install-lg.jpg';
import Img2 from '../../images/Sump pump/Where-Should-a-Sump-Pump-be-Placed-in-a-Basement.jpeg';

export default () => (
	<div className='section3-CN'>

	<div class="service-split">
		<div>
		<h4>
		Sump Pumps
		</h4>
		<p>Trust Affordable Foundation Repair for complete sump pump services. From installation and maintenance to repairs, we ensure your sump pump operates optimally, effectively removing excess water caused by rain, groundwater, or flooding. Our services even include battery backup system installation for uninterrupted functionality during power outages. Rely on us to protect your property from water damage and offer peace of mind in damp conditions.
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
	</div>
);
