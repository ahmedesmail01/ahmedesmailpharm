import React from "react";
import "./skills.css";

const Skills = () => {
	const skills = [
		{
			title: "SALES SKILLS",
			points: [
				"Sales prospecting",
				"Consultative selling",
				"Negotiation skills",
				"Closing techniques",
				"Relationship building",
			],
		},
		{
			title: "HEALTHCARE KNOWLEDGE",
			points: [
				"Anatomy and physiology",
				"Pharmacology",
				"Medical terminology",
				"Healthcare regulations and policies",
				"Understanding of disease and treatment options",
			],
		},
		{
			title: "COMMUNICATION SKILLS",
			points: [
				"Active listening",
				"Verbal and written communication",
				"Presentation skills",
				"Public speaking",
				"Interpersonal skills",
			],
		},
		{
			title: "Organizational skills",
			points: [
				"Time management",
				"Prioritization",
				"Planning and forecasting",
				"Territory management",
			],
		},
		{
			title: "Computer skills",
			points: [
				"Programming languages",
				"Technical problems solving",
				"Email and calendar management",
				"Customer relationship management (CRM) software",
				"Microsoft & Linux Office Suite",
				"Online research skills",
			],
		},
	];

	return (
		<div id="skills" className="skills">
			<h1>Skills</h1>
			<div className="container">
				<div className="skills_holder">
					{skills.map((skill, index) => {
						return (
							<div key={skill.title} className="skill">
								<h2>{skill.title}</h2>
								{skill.points.map((point, index) => {
									return <p key={point}>{point}</p>;
								})}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;
