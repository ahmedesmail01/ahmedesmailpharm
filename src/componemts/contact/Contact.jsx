import React from "react";
import "./contact.css";

const Contact = () => {
	return (
		<div id="contact" className="contact">
			<h1>Get In Touch</h1>
			<div className="container">
				<div className="contact_holder">
					<div className="apps">
						<div className="mail">
							<i class="uil uil-envelopes app_icon"></i>
							<p>ahmedesmail34180@gmail.com</p>
							<a
								href="mailto:ahmedesmail34180@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								write to me <i class="uil uil-arrow-right app_arow"></i>
							</a>
						</div>
						<div className="whatsapp">
							<i class="uil uil-whatsapp app_icon"></i>
							<p>+20 01025698192</p>
							<a
								href="https://api.whatsapp.com/send?phone=2001025698192&text=Hi DR/Ahmed Esmail, how do you do?"
								target="_blank"
								rel="noopener noreferrer"
							>
								write to me <i class="uil uil-arrow-right app_arow"></i>
							</a>
						</div>
					</div>
					{/* 					<div className="contact_form">
						<form action="" method="post"></form>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Contact;
