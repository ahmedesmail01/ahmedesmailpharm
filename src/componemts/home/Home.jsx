import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./home.css";
import ScrollDown from "./ScrollDown";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<>
			<section className="home section" id="home">
				<div className="home__container container grid">
					<div className="home__content grid">
						<Social />
						<motion.div
							initial={{
								y: 20,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								delay: 1,
								duration: 1,
							}}
							className="home__img"
						></motion.div>
						<Data />
					</div>
					<ScrollDown />
				</div>
			</section>
		</>
	);
};

export default Home;
