import React from 'react';
import Img1 from '../../images/Crack repair/IMG_0326.jpg';
import Img2 from  '../../images/Crack repair/epoxy-foundation-repair.jpg';


export default () => (
	<div className='section3-CN'>

	<div class="service-split">
		<div>
		<h4>
		Crack Injection Repair
		</h4>
		<p>
		Choose Affordable Foundation Repair for expert crack injection repair services. Our professionals skillfully inject epoxy or polyurethane into concrete cracks, forming strong bonds that prevent water infiltration, reinforce structures, and restore integrity. This cost-effective and efficient solution is ideal for foundation walls, basement floors, and other concrete surfaces.
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
