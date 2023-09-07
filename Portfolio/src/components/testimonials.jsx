import React from 'react';
import Img1 from '../images/testimony1.png';
import Img2 from '../images/testimony2.png';
import Img3 from '../images/testimony3.png';
import { FaQuoteLeft} from 'react-icons/fa'

export default () => (
	<div className='animated reveal fade-bottom testimonials'>
		<h4>Client Testimonials</h4>
    <div class="test-container">
      <div class="test-div animated reveal fade-bottom">
			<div class="pic">
				<img class="testimony-pic" src={Img1} alt=""></img>
			</div>
			<FaQuoteLeft className="testimonial-icons"></FaQuoteLeft>
      <p>
			My working experience in working with the New Wave folks has been outstanding.
			The communication chain between their architect and consultants to the GC was exceptional.
			I look forward to working with their team in the future.
      </p>
      <h5>Ronald March</h5>
      </div>

      <div class="test-div animated reveal fade-bottom">
			<div class="pic">
				<img class="testimony-pic" src={Img2} alt=""></img>
			</div>
			<FaQuoteLeft className="testimonial-icons"></FaQuoteLeft>
      <p>
			As a small business owner, the biggest problem I have in the market place is people's sense of urgency.
			The team at New Wave are all over it, they have a sense of urgency and their follow up skills are terrific.
			I could not be more pleased with New Wave.
			</p>
      <h5>Renters Warehouse</h5>
      </div>

      <div class="test-div animated reveal fade-bottom">
			<div class="pic">
				<img class="testimony-pic"  src={Img3} alt=""></img>
			</div>
			<FaQuoteLeft className="testimonial-icons"></FaQuoteLeft>
      <p>
			I have almost 20 years of experience in working with real estate developers and I firmly believe the New Wave
			Property's group team is unrivaled in knowledge, attention to detail, execution, and above all integrity.
			 </p>
      <h5>Peal Property</h5>
      </div>
    </div>
  </div>

);
