import React from 'react';
import Img1 from '../../images/Basement finishing/Basement-Renovation-1.jpg';
import Img2 from '../../images/Basement finishing/Basement-Renovation-2.jpg';
import Img3 from '../../images/Basement finishing/Basement-Renovation-3.png';

export default () => (
	<div className='section3-CN'>

	<div class="service-split">
		<div>
		<h4>
		Basement Finishing
		</h4>
		<p>
		Unlock the full potential of your home with our professional basement finishing services. At Affordable Foundation Repair, we specialize in transforming underutilized basements into inviting and functional spaces. Whether you're dreaming of a cozy family room, a home office, a game room, or a stylish entertainment area, our skilled team is here to bring your vision to life.		
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
	</div>
);
