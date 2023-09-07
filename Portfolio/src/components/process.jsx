import React from 'react';
import Cycle from '../images/process2.jpg';

export default () => (
	<div className='process'>
  <div class='process-split animated reveal fade-bottom'>
    <div class='process-split-inner'>
  		<h4>
  		Development Process
  		</h4>
  		<p>1. Land Acquisition</p>
      <p>2. Pre-application advise</p>
      <p>3. Design and Scoping</p>
      <p>4. Planning and engagement</p>
      <p>5. Construction</p>
      <p>6. Operation</p>
      <br></br>
      <br></br>
    </div>

    <img class="process-img" src={Cycle}></img>
  </div>
  </div>

);
