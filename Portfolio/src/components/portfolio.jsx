import React from 'react';
import { Link }  from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import Img1 from '../images/editorial.jpg';
import Img2 from '../images/commercial.jpg';
import Img3 from '../images/film2.jpg';


export default () => (
	<div className='project'>
	<h4>Explore my Portfolio</h4>
	<Link to='/aboutpage'>
		<button className="button2" >View more <BsArrowRight class= "arrow-image" width={'2rem'}></BsArrowRight> </button>
	</Link>
	<div class="project-div">
		<div class="project-container">
		<h4>Editorial</h4>
    <div class="item pre animated reveal fade-bottom"> <span class="icon feature_box_col_one"></span>
		<img src={Img1} alt=""></img>
		<p>• Develop project concept, design, and detailed plans.</p>
		<p>• Purchase suitable land for construction.</p>
		<p>• Obtain necessary permits and approvals from local government authorities.</p>
    </div>
		</div>
		<div class="inner-container">
		<h4>Art Direction</h4>
    <div class="item present animated reveal fade-bottom"> <span class="icon feature_box_col_two"></span>
		<img src={Img2} alt=""></img>
		<p>• Prepare the site, construct foundation and build structural frame.</p>
		<p>• Install exterior and interior features, carry out necessary installations like electrical, plumbing, and HVAC.</p>
		<p>• Arrange for periodic inspections for compliance and finish exterior work including landscaping.</p>
    </div>
		</div>
		<div class="inner-container">
		<h4>Commercial Styling</h4>
    <div class="item post animated reveal fade-bottom"> <span class="icon feature_box_col_three"></span>
		<img src={Img3} alt=""></img>
		<p padding-top={'3rem'}>• Arrange for a final inspection and obtain an occupancy permit.</p>
		<p>• Address any issues or deficiencies.</p>
		<p>• Provide post-construction services as agreed in contracts.</p>
    </div>
		</div>
		<div class="inner-container">
		<h4>Personal Styling</h4>
    <div class="item pre animated reveal fade-bottom"> <span class="icon feature_box_col_one"></span>
		<img src={Img1} alt=""></img>
		<p>• Develop project concept, design, and detailed plans.</p>
		<p>• Purchase suitable land for construction.</p>
		<p>• Obtain necessary permits and approvals from local government authorities.</p>
    </div>
		</div>
		</div>
	</div>
);
