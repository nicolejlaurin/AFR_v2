import React from 'react';
import Img1 from '../../images/Waterproofing/foundationg-waterproofing.jpg';
import Img2 from '../../images/Waterproofing/foundationg-waterproofing2.jpg';
import Img3 from '../../images/Waterproofing/waterproofing-exterior-waterproofing-work-basement.jpg';
import { Link }  from 'react-router-dom';
export default () => (
	<div className='section3-CN' >
		<div class="service-split">
			<div>
				<h4>
				Foundation WaterProofing
				</h4>
				<p>
				Experience effective protection with our Affordable Foundation Repair basement waterproofing services. Our skilled team employs a variety of techniques, such as surface sealing, drainage system installation, waterproof coatings, and crack repairs. Safeguard your foundation from water damage and potential structural issues with our comprehensive solutions.
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
