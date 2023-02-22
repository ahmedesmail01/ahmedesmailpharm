import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
const Header = () => {
	const [toggle, showMenu] = useState(false);

	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav__logo">
					<img className="img__logo" src={logo} alt="logo" />
				</a>
				<span className="my_name">Ahmed Esmail</span>
				<div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
					<ul className="nav__list">
						<li className="nav__item">
							<a href="#home" className="nav__link active__link">
								<i className="uil uil-estate nav__icon"></i> Home
							</a>
						</li>
						<li className="nav__item">
							<a href="#education" className="nav__link">
								<i className="uil uil-graduation-cap nav__icon"></i> Education
							</a>
						</li>
						<li className="nav__item">
							<a href="#experience" className="nav__link">
								<i className="uil uil-file-alt nav__icon"></i> Experience
							</a>
						</li>
						<li className="nav__item">
							<a href="#interns" className="nav__link">
								<i className="uil uil-briefcase-alt nav__icon"></i> Internships
							</a>
						</li>
						<li className="nav__item">
							<a href="#skills" className="nav__link">
								<i className="uil uil-scenery nav__icon"></i> Skills
							</a>
						</li>
						<li className="nav__item">
							<a href="#contact" className="nav__link">
								<i className="uil uil-message nav__icon"></i> Contact
							</a>
						</li>
					</ul>

					<i
						className="uil uil-times nav__close"
						onClick={() => showMenu(!toggle)}
					></i>
				</div>
				<div className="nav__toggle" onClick={() => showMenu(!toggle)}>
					<i className="uil uil-apps"></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
