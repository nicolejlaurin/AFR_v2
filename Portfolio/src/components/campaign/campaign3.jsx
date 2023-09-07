import React from 'react';
import { Link }  from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import Img1 from '../../images/trees.jpg';
import Img2 from '../../images/cars.jpg';
import Img3 from '../../images/contact3.jpg';
import Img4 from '../../images/film.jpg';
import Img5 from '../../images/transition.jpg';
import Img6 from '../../images/process2.jpg';


export default () => (
	<div className='editorial-template'>
	<h4>Campaign - Project 3 </h4>
	<p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non 
        provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum 
        fuga.  </p>

	<hr className="editorial-underline"></hr>

	<p> Fashion Stylist - Susann Kilduff </p>
	<p> Assistant stylist - Ashleigh Williamson </p>
	<p> Photographer - Kaison Annema </p>
	<p> Model - Zuleima Sargsyan </p>

		<div class="project-split">
				<img class="project-img" src={Img1}></img>
				<img class="project-img" src={Img2}></img>
				<img class="project-img" src={Img3}></img>
				<img class="project-img" src={Img4}></img>
				<img class="project-img" src={Img5}></img>
				<img class="project-img" src={Img6}></img>
	</div>
	</div>
);
