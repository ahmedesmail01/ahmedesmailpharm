import "./App.css";
import Header from "./componemts/header/Header";
//import Notes from "./componemts/Notes";
import Home from "./componemts/home/Home";
import Graduation from "./componemts/home/graduation/Graduation";
import Experience from "./componemts/home/experience/Experience";
import Interns from "./componemts/interns/Interns";
import Skills from "./componemts/skills/Skills";
import Contact from "./componemts/contact/Contact";
import Footer from "./componemts/footer/Footer";
//import Activities from "./componemts/activities/Activities";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<Graduation />
				<Experience />
				<Interns />
				<Skills />
				<Contact />
				<Footer />
			</main>
		</>
	);
}

export default App;
