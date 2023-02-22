import React from "react";
import "./experience.css";

//
/* import { makeStyles } from "@mui/material";
import Card from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
}); */
//

const samples = [
	{
		title: "fadic-collagen",
		link: "https://fadic.net/benefits-of-collagen-pros-and-cons/",
		text: "Collagen: The Pros and Cons of Incorporating...",
	},
	{
		title: "fadic-corticosteroids",
		link: "https://fadic.net/most-common-allergic-systemic-corticosteroids/",
		text: "Corticosteroids Common Drug List, Side Effects...",
	},
	{
		title: "fadic-google-drive",
		link: "https://fadic.net/google-drive-tips-and-tricks/",
		text: "Google Drive Tips and Tricks...",
	},
];
const Experience = () => {
	return (
		<div id="experience" className="container exp">
			<div className="exp_heading">
				<h1>Experience</h1>
				<p>previous Jobs</p>
			</div>
			<div className="fadic">
				<div className="fadic_image"></div>
				<div className="fadic_text">
					<h2>Medical Writing</h2>
					<p>
						Working as Medical writer and researcher at{" "}
						<a href="https://fadic.net/">Fadic Academy</a>
					</p>
					<p className="time">started 2020</p>
					<div className="fadic_samples">
						{samples.map((sample, index) => {
							return (
								<div key={sample.link} className="fadic_sample">
									<div
										className="sample_image"
										style={{
											backgroundImage: `url("./media/${sample.title}.jpg")`,
										}}
									></div>
									<div className="sample_link">
										<a href={sample.link}>{sample.text}</a>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
