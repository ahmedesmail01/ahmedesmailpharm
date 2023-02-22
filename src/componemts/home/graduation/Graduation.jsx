import React, { useState, useEffect } from "react";
import "./graduation.css";
import { motion } from "framer-motion";

//
const NUM_IMAGES = 3;

const Graduation = () => {
	const [image, setImage] = useState("party02");

	/* 	const icon = {
		hidden: {
			pathLength: 0,
			fill: "rgba(255, 255, 255, 0)",
		},
		visible: {
			pathLength: 1,
			fill: "rgba(255, 255, 255, 1)",
		},
		transition: {
			delay: 2.5,
		},
	};
 */
	useEffect(() => {
		const intervalId = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * NUM_IMAGES);
			setImage(`party0${randomIndex + 1}`);
		}, 5000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div
			id="education"
			className="grad"
			style={{ backgroundImage: `url("./media/${image}.jpg")` }}
		>
			<div className="text_holder">
				<div className="data">
					<motion.h1
						initial={{
							y: 20,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							delay: 1,
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						Graduation
					</motion.h1>
					<motion.p
						initial={{
							y: 20,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							delay: 1.3,
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						Faculty of Pharmacy
					</motion.p>
					<motion.p
						initial={{
							y: 20,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							delay: 1.6,
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						Bachelor Degree
					</motion.p>
					<motion.p
						initial={{
							y: 20,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							delay: 1.9,
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						Pharmaceutical science
					</motion.p>
					<motion.p
						initial={{
							y: 20,
							opacity: 0,
						}}
						whileInView={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							delay: 2.2,
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						2021
					</motion.p>
				</div>
			</div>

			{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<motion.path
					d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
					variants={icon}
					initial="hidden"
					animate="visible"
				/>
			</svg> */}
		</div>
	);
};

export default Graduation;
