import React from 'react';
import Img1 from '../../images/Sewer backups/basement-flooding.jpg';
import Img2 from '../../images/Sewer backups/basement-water-backup-3.jpg';
import Img3 from '../../images/Sewer backups/Sewer-Backup-Problem.png';


export default () => (
	<div className='section3-CN'>

	<div class="service-split">
		<div>
		<h4>
		Sewer Backups
		</h4>
		<p>Experience swift restoration with Affordable Foundation Repair's efficient sewer backup service. Our team promptly restores normalcy, providing a clean and worry-free environment. Trust us to handle the situation professionally and expertly.
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
