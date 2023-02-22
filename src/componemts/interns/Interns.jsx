import React from "react";
import "./interns.css";

//
const Interns = () => {
	const images = [
		{
			logo: "eva-logo.png",
			title: "Eva-Pharma summer Internship",
			date: "27-August 2020",
			src: "./media/eva-graduation.jpeg",
			link: "https://drive.google.com/file/d/1UAORham3zviycg2cMwhmXUT5rdBMDtU8/view?usp=share_link",
		},
		{
			logo: "sandoz-logo.png",
			title: "Sandoz Egypt Summer Training",
			date: "22-september 2020",
			src: "./media/sandoz.png",
			link: "https://drive.google.com/file/d/1GMf3FsZGKX4lMAYUYZGBO_gJJM1rZNQZ/view?usp=share_link",
		},
		{
			logo: "rameda-logo.jpg",
			title: "Rameda Learning and Development Internship",
			date: "3-August 2021",
			src: "./media/rameda-internship.jpeg",
			link: "https://drive.google.com/file/d/1cxde6vBojYqlNWt6VN7pPEHaQ462LgJL/view?usp=share_link",
		},
	];

	return (
		<>
			<div id="interns" className="intern">
				<h1>Internships</h1>
				<div className="container">
					<div className="logos_holder">
						{images.map((image, index) => {
							return (
								<div key={index} className="intern_logo">
									<img
										key={image.link}
										src={`./media/${image.logo}`}
										alt={image.logo}
									/>
								</div>
							);
						})}
					</div>
					<div className="cert_holder">
						{images.map((image) => {
							return (
								<a
									key={image.link}
									className="cert_card"
									href={image.link}
									target="_blank"
								>
									<img src={image.src} alt={image.logo} />
									<h3>{image.title}</h3>
									<span>{image.date}</span>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Interns;
