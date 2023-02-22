import React from "react";
import { motion } from "framer-motion";

const Social = () => {
	return (
		<>
			<motion.div
				initial={{
					y: 20,
					opacity: 0,
				}}
				whileInView={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1,
				}}
				className="home__social"
			>
				<a
					href="https://linkedin.com/in/ahmed-esmail-893660162/"
					className="home__social-icon"
					target="_blank"
				>
					<i className="uil uil-linkedin"></i>
				</a>

				<a
					href="https://github.com/ahmedesmail01"
					className="home__social-icon"
					target="_blank"
				>
					<i className="uil uil-github"></i>
				</a>
			</motion.div>
		</>
	);
};

export default Social;
