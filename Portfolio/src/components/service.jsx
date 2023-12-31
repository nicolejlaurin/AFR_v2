import React from 'react';
import Img1 from '../images/waterproof.jpeg';
import Img2 from '../images/crack.jpeg';
import Img3 from '../images/pump.png';
import Img4 from '../images/underpinning.png';
import Img5 from '../images/rubble.jpeg';
import { Link }  from 'react-router-dom';

export default () => (
	<div class="service">
	<div class="service-text">
		<h4 class='animated reveal fade-bottom'>Services</h4>
		<p class='animated reveal fade-bottom'>
		Welcome to Affordable Foundation Repair, where your construction needs meet unparalleled expertise and unbeatable value. What sets our team apart is the unwavering commitment we have in delivering top-notch services without breaking the bank. With a focus on foundation repair, we've mastered the art of combining cost-effectiveness with uncompromising quality. At Affordable Foundation Repair, we understand that a solid foundation is essential for any structure, metaphorically and literally. That's why we believe in building more than just structures; we build trust and satisfaction. With us, you'll discover that affordability doesn't mean sacrificing excellence. As, your construction needs are our priority, and we're dedicated to exceeding your expectations every time, by delivering results that speak for themselves.
		</p>
	</div>
		<div class="container">
		<div class="inner-container">
		<h4>Interior Waterproofing</h4>
    <div class="item pre animated reveal fade-bottom"> <span class="icon feature_box_col_one"></span>
		<img src={Img1} alt=""></img>
		<p>Keep your home safe and dry with our expert interior waterproofing solutions, guarding against moisture and leaks to protect your property.</p>
	</div>
		</div>
		<div class="inner-container">
		<h4>Crack Repair</h4>
    <div class="item present animated reveal fade-bottom"> <span class="icon feature_box_col_two"></span>
		<img src={Img2} alt=""></img>
		<p>Say goodbye to unsightly cracks in your walls and floors. Our crack repair service restores the integrity of your surfaces, ensuring a smooth and flawless appearance.</p>
    </div>
		</div>
				<div class="inner-container">
		<h4>Basement Lowering</h4>
    <div class="item present animated reveal fade-bottom"> <span class="icon feature_box_col_two"></span>
		<img src={Img3} alt=""></img>
		<p>Transform your basement into a more functional space by lowering the floor. Our basement lowering service provides you with extra room height for a range of creative possibilities.</p>
    </div>
		</div>
		<div class="inner-container">
		<h4>Sewer Backups</h4>
    <div class="item post animated reveal fade-bottom"> <span class="icon feature_box_col_three"></span>
		<img src={Img4} alt=""></img>
		<p padding-top={'3rem'}>Don't let sewer backups disrupt your life. Our specialized service tackles sewer issues, preventing costly and messy backups that can damage your property.</p>
    </div>
		</div>
		<div class="inner-container">
		<h4>Wall Replacement</h4>
    <div class="item pre animated reveal fade-bottom"> <span class="icon feature_box_col_one"></span>
		<img src={Img5} alt=""></img>
		<p>Upgrade the look and stability of your space with our professional wall replacement service. Out with the old, in with the new, for a revitalized and modern environment.</p>
    </div>
		</div>
		<div class="inner-container">
		<h4>Basement Finishing</h4>
    <div class="item pre animated reveal fade-bottom"> <span class="icon feature_box_col_one"></span>
		<img src={Img5} alt=""></img>
		<p>Maximize your living space with our basement finishing expertise. From concept to completion, we'll turn your basement into a comfortable and stylish living area.</p>
    </div>
		</div>

		</div>
		<Link to='/servicepage'>
			<button className="service-button">See More Services</button>
		</Link>	
	</div>
);
