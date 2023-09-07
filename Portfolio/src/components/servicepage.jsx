import React from 'react';
import { FaCaretRight, FaChevronRight} from 'react-icons/fa';
import Img from '../images/underpinning.png';

export default () => (
	<div className='Service-CN'>
		<h4>
		OUR SERVICES
		</h4>
		<p>
		The company offers a comprehensive range of services aimed at enhancing the integrity and functionality of residential properties. These services include basement waterproofing to prevent water seepage, foundation lowering to maximize space utilization, crack injection repair to address structural vulnerabilities, window well installation for increased light and safety, sump pump installation to manage water accumulation, weeping tile installation to facilitate proper drainage, and basement window solutions. The company also specializes in structural repairs, including basement and wall lowering, addressing issues like bowing walls, concrete repair, wall replacement, and tackling sewer backups and cracked waterproofing. Their expertise lies in creating structurally sound, dry, and secure basements for homeowners.		
		</p>

	
		<div class="service-split" id='anchor1'>
			<img class="service-split-img" src={Img}></img>
			<div>
				<h4>
				Foundation WaterProofing
				</h4>
				<p>
				Experience effective protection with our Affordable Foundation Repair basement waterproofing services. Our skilled team employs a variety of techniques, such as surface sealing, drainage system installation, waterproof coatings, and crack repairs. Safeguard your foundation from water damage and potential structural issues with our comprehensive solutions.
				</p>
			</div>
		</div>
		<div class="service-split" id='anchor2'>
			<img class="service-split-img" src={Img}></img>
			<div>
				<h4>
				Foundation WaterProofing
				</h4>
				<p>
				Experience effective protection with our Affordable Foundation Repair basement waterproofing services. Our skilled team employs a variety of techniques, such as surface sealing, drainage system installation, waterproof coatings, and crack repairs. Safeguard your foundation from water damage and potential structural issues with our comprehensive solutions.
				</p>
			</div>
		</div>

	</div>
);
