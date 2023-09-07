import React from 'react';

export default () => (
	<div class="contact-div">
		<div class="contact-split">
			<div class="contact-split-left">
				<h3>Contact Us</h3>
				<p className="contact-msg">We would love to hear from you.</p>
					<div className="input-row2">
						<div className='input-group2'>
							<p class="top"> </p>
							<iframe className="map"  scrolling={"no"}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179333.23933418764!2d-75.84866540998563!3d45.38751939769016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1690248677679!5m2!1sen!2sca"></iframe>
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
