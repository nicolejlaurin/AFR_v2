import React from 'react';
import { FaCaretRight, FaChevronRight} from 'react-icons/fa';
import { Link }  from 'react-router-dom';
import Img from '../images/services/Service14.jpg';
import Img2 from '../images/services/Service1.jpg';
import Img3 from '../images/services/Service2.jpg';
import Img4 from '../images/services/Service13.jpg';
import Img5 from '../images/services/Service12.jpg';
import Img6 from '../images/services/Service11.jpg';
import Img7 from '../images/services/Service10.jpg';
import Img8 from '../images/services/Service9.jpg';
import Img9 from '../images/services/Service8.jpg';
import Img10 from '../images/services/Service7.jpg';
import Img11 from '../images/services/Service6.jpg';
import Img12 from '../images/services/Service5.jpg';
import Img13 from '../images/services/Service4.jpg';
import Img14 from '../images/services/Service3.jpg';


export default () => (
	<div className='Services'>
		<h4>
		OUR SERVICES
		</h4>
		<p>
		The company offers a comprehensive range of services aimed at enhancing the integrity and functionality of residential properties. These services include basement waterproofing to prevent water seepage, foundation lowering to maximize space utilization, crack injection repair to address structural vulnerabilities, window well installation for increased light and safety, sump pump installation to manage water accumulation, weeping tile installation to facilitate proper drainage, and basement window solutions. The company also specializes in structural repairs, including basement and wall lowering, addressing issues like bowing walls, concrete repair, wall replacement, and tackling sewer backups and cracked waterproofing. Their expertise lies in creating structurally sound, dry, and secure basements for homeowners.		
		</p>

	
	<div className='sectionpage-div' >

		<div class="service-split" id="service1">
		<Link to='/services/service1' class='service-link-img' >
		<img class="service-page-img" src={Img}></img>
			</Link>
			<div>
			<Link to='/services/service1' class='service-link' >
			<h4>
			Foundation WaterProofing
			</h4>
			</Link>
			<p>
			Experience effective protection with our Affordable Foundation Repair basement waterproofing services. Our skilled team employs a variety of techniques, such as surface sealing, drainage system installation, waterproof coatings, and crack repairs. Safeguard your foundation from water damage and potential structural issues with our comprehensive solutions.			
			</p>	
			</div>
		</div>

		<div class="service-split">
			<Link to='/services/service2' class='service-link-img' >
			<img class="service-page-img" src={Img2}></img>
			</Link>
			<div>
			<Link to='/services/service2' class='service-link' >	
			<h4>
			Basement Lowering
			</h4>
			</Link>
			<p>
			Maximize comfort with Affordable Foundation Repair's expert basement lowering solutions. Our dedicated team excels in crafting more spacious and inviting living areas by lowering basement levels. Elevate your home's functionality and comfort with this transformative service.
			</p>
			</div>
		</div>

		<div class="service-split">
			<Link to='/services/service3' class='service-link-img' >
			<img class="service-page-img" src={Img3}></img>
			</Link>
			<div>
			<Link to='/services/service3' class='service-link'>	
			<h4>
			Crack Injection Repair
			</h4>
			</Link>
			<p>
			Choose Affordable Foundation Repair for expert crack injection repair services. Our professionals skillfully inject epoxy or polyurethane into concrete cracks, forming strong bonds that prevent water infiltration, reinforce structures, and restore integrity. This cost-effective and efficient solution is ideal for foundation walls, basement floors, and other concrete surfaces.
			</p>
			</div>
		</div>

		<div class="service-split">
			<Link to='/services/service4' class='service-link-img' >
			<img class="service-page-img" src={Img4}></img>
			</Link>
			<div>
			<Link to='/services/service4' class='service-link'>	
				<h4>Window Well
				</h4>
			</Link>
				<p>Our experts at Affordable Foundation Repair encompass installing, repairing, and maintaining window wells around basement windows. These wells create open space for light and emergency exit. They enhance safety, aesthetics, and protect against water damage and unwanted intruders. Services involve excavation, placement of wells, repairs, cleaning, drainage improvement, and upgrades like covers and safety barriers.
				</p>
			</div>
		</div>


	<div class="service-split">
		<Link to='/services/service5' class='service-link-img' >
		<img class="service-page-img" src={Img5}></img>
		</Link>
		<div>
		<Link to='/services/service5' class='service-link'>
		<h4>
		Sump Pumps
		</h4>
		</Link>
		<p>Trust Affordable Foundation Repair for complete sump pump services. From installation and maintenance to repairs, we ensure your sump pump operates optimally, effectively removing excess water caused by rain, groundwater, or flooding. Our services even include battery backup system installation for uninterrupted functionality during power outages. Rely on us to protect your property from water damage and offer peace of mind in damp conditions.
		</p>
		</div>
	</div>

	<div class="service-split">
		<Link to='/services/service6' class='service-link-img' >
		<img class="service-page-img" src={Img6}></img>
		</Link>
		<div>
		<Link to='/services/service6' class='service-link'>
		<h4>
		Weeping Tiles
		</h4>
		</Link>
		<p>Specializing in weeping tile services, Affordable Foundation Repair excels in drainage system installation and maintenance. Our expertise extends to porous pipe installation around foundations, redirecting water away from basements and foundation walls. Interior drainage solutions are also available to combat seepage, preventing water damage and foundation issues. Count on us for a dry, structurally sound foundation that safeguards your property.</p>
		</div>
	</div>

	<div class="service-split">
		<Link to='/services/service7' class='service-link-img' >
		<img class="service-page-img" src={Img7}></img>
		</Link>
		<div>
		<Link to='/services/service7' class='service-link'>
		<h4>
		Basement Window
		</h4>
		</Link>
		<p>Unveil the potential of your basement windows with Affordable Foundation Repair's window repair services. Our experts skillfully repair frames, replace shattered glass, address leaks, and enhance insulation. Elevate the functionality of your basement windows while maintaining structural integrity.
		</p>	
		</div>
	</div>

	<div class="service-split">
		<Link to='/services/service8' class='service-link-img' >
		<img class="service-page-img" src={Img8}></img>
		</Link>
		<div>
		<Link to='/services/service8' class='service-link'>
		<h4>
		Structural Repairs
		</h4>
		</Link>
		<p>Elevate Your Foundation with Our Affordable Structural Repair Services! Experience the difference of our budget-friendly solutions that reinforce and restore the structural integrity of your property. Trust our experts at Affordable foundation repair.
		</p>	
		</div>
	</div>

	<div class="service-split">
		<Link to='/services/service9' class='service-link-img' >
		<img class="service-page-img" src={Img9}></img>
		</Link>
		<div>
		<Link to='/services/service9' class='service-link'>
		<h4>
		Basement Finishing
		</h4>
		</Link>
		<p>
		Unlock the full potential of your home with our professional basement finishing services. At Affordable Foundation Repair, we specialize in transforming underutilized basements into inviting and functional spaces. Whether you're dreaming of a cozy family room, a home office, a game room, or a stylish entertainment area, our skilled team is here to bring your vision to life.
		</p>	
		</div>
	</div>

	<div class="service-split">
		<Link to='/services/service10' class='service-link-img' >
		<img class="service-page-img" src={Img10}></img>
		</Link>
		<div>
		<Link to='/services/service10' class='service-link'>
		<h4>
		Bowing Walls
		</h4>
		</Link>
		<p>Secure Foundation with Affordable Foundation Repair our expert service for fixing bowed walls. Our specialists strengthen foundations, ensuring your property's stability and your family's safety. Trust our proven solutions for worry-free results.
		</p>	
		</div>
	</div>

	<div class="service-split">
		<Link to='/services/service11' class='service-link-img' >
		<img class="service-page-img" src={Img11}></img>
		</Link>
		<div>
		<Link to='/services/service11' class='service-link'>
		<h4>
		Concrete Repair
		</h4>
		</Link>
		<p>Address concrete damage effectively with our concrete repair services. We assess and repair concrete structures, addressing cracks, spalls, and more. Reinforcement and joint repair are also part of our offerings, enhancing strength and functionality. Our goal is to prolong the lifespan of concrete elements, saving you time and money in the long run.
		</p>	
		</div>
	</div>

	<div class="service-split">
		<Link to='/services/service12' class='service-link-img' >
		<img class="service-page-img" src={Img12}></img>
		</Link>
		<div>
		<Link to='/services/service12' class='service-link'>	
		<h4>
		Wall Replacement
		</h4>
		</Link>
		<p>Count on Affordable Foundation Repair for dependable wall replacement services. Our professionals restore structural integrity, ensuring the stability and longevity of your property. Safeguard your investment with our high-quality solutions.
		</p>	
		</div>
	</div>

	<div class="service-split">
		<Link to='/services/service13' class='service-link-img' >
		<img class="service-page-img" src={Img13}></img>
		</Link>
		<div>
		<Link to='/services/service13' class='service-link'>	
		<h4>
		Sewer Backups
		</h4>
		</Link>
		<p>Experience swift restoration with Affordable Foundation Repair's efficient sewer backup service. Our team promptly restores normalcy, providing a clean and worry-free environment. Trust us to handle the situation professionally and expertly.
		</p>	
		</div>
	</div>

	<div class="service-split">
		<Link to='/services/service14' class='service-link-img' >
		<img class="service-page-img" src={Img14}></img>
		</Link>
		<div>
		<Link to='/services/service14' class='service-link'>	
		<h4>
		Cracked Waterproofing
		</h4>
		</Link>
		<p>Address cracked waterproofing effectively with Affordable Foundation Repair. Our solutions include fixing cracks, enhancing waterproofing for surfaces like basements, roofs, and concrete. Prevent leaks, water damage, and benefit from structural analysis and drainage improvements.
		</p>
		</div>
	</div>
	</div>
	</div>
);
