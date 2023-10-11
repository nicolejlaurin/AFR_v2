import React from 'react';
import { Link }  from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import Img2 from '../images/commercial.jpg';


export default () => (
<div className='portfolio'>
	    <h4>Explore my Portfolio</h4>

    
    <div class="portfolio-div">
        <div class="portfolio-container">
            <h4>Editorial</h4>
            <a class="portfolio-item" href="/editorial"><img src={Img2} alt=""></img></a>
            <p>• Develop project concept, design, and detailed plans.</p>
            <p>• Purchase suitable land for construction.</p>
            <p>• Obtain necessary permits and approvals from local government authorities.</p>
        </div>
        <div class="portfolio-container">
            <h4>Campaign and Commercial Prints</h4>
            <a class="portfolio-item" href="/campaign"><img src={Img2} alt=""></img></a> 
            <p>• Prepare the site, construct foundation and build structural frame.</p>
            <p>• Install exterior and interior features, carry out necessary installations like electrical, plumbing, and HVAC.</p>
            <p>• Arrange for periodic inspections for compliance and finish exterior work including landscaping.</p>
        </div>
        <div class="portfolio-container">
            <h4>Film</h4>
            <a class="portfolio-item" href="/Film"><img src={Img2} alt=""></img></a> 
            <p>• Arrange for a final inspection and obtain an occupancy permit.</p>
            <p>• Address any issues or deficiencies.</p>
            <p>• Provide post-construction services as agreed in contracts.</p>
        </div>
	</div>
</div>
);
