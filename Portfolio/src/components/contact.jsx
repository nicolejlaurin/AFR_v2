import React from 'react';
import ReactDOM from 'react-dom';

export default () => (
	<div class="contact">
		<div class="contact-split animated reveal fade-bottom">
			<div class="contact-split-left">
				<h3>Contact Us</h3>
				<p className="contact-msg">We would love to hear from you.</p>
				<div className="input-row2">
					<div className='input-group2'>
						<p class="top">  </p>
					</div>
				</div>
			</div>
	  <form
			id="contact"
			encType="multipart/form-data"
			autoComplete="off"
			action="https://formsubmit.co/coldglobalenterprises@gmail.com"
			method="POST"
			data-netlify-recaptcha="true"
			 data-netlify="true"
			 onSubmit="submit"
			data-netlify-honeypot="bot-field">
			<input type="hidden" name="_subject" value="New email from Portfolio!"></input>
					<input type="hidden" name="_captcha" value="false"></input>
					<input type="hidden" name="_next" value="https://coldglobalenterprises.com/thankyou"></input>

			<div hidden>
				<input name="bot-field"></input>
			</div>

	    <fieldset>
	      <input placeholder="Your name" tabindex="1"   name="name"
					type="text"
				 required autofocus></input>
	    </fieldset>
	    <fieldset>
	      <input placeholder="Your Email Address"   name="email"
					type="text"
				tabindex="2" required></input>
	    </fieldset>
	    <fieldset>
	      <input placeholder="Your Phone Number" type="tel" tabindex="3"></input>
	    </fieldset>
	    <fieldset>
	      <textarea placeholder="Type your Message Here...." tabindex="5"   name="message"

					required></textarea>
	    </fieldset>
	    <fieldset>
	      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
	    </fieldset>
	  </form>
		</div>
	</div>

);
