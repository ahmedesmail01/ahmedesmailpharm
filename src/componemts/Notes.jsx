import React, { useState, useEffect } from "react";

const Notes = () => {
	const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title !== "" && details !== "") {
			const newNotes = [...notes, { title, details, status: false }];
			setNotes(newNotes);
			localStorage.setItem("notes", JSON.stringify(newNotes));
			setTitle("");
			setDetails("");
		} else {
			window.alert("you must complete all Details and title");
		}
	};
	//

	//
	useEffect(() => {
		const storedNotes = localStorage.getItem("notes");
		if (storedNotes) {
			setNotes(JSON.parse(storedNotes));
		}
	}, []);

	return (
		<div className="container notes">
			<h1>Note app</h1>
			{notes?.map((note, index) => {
				return (
					<div key={index + note.title}>
						<h2 className={note.status ? "line" : "wait"}>{note.title}</h2>
						<p>{note.details}</p>
						<span>{note.status}</span>
						{notes.status ? null : (
							<button
								onClick={() => {
									const updatedNotes = [...notes];
									updatedNotes[index].status = !updatedNotes[index].status;
									const waitedNotes = updatedNotes.filter(
										(note) => note.status === false
									);
									localStorage.setItem("notes", JSON.stringify(waitedNotes));
									setNotes(waitedNotes);
								}}
							>
								{note.status ? "done" : "on work"}
							</button>
						)}
						<hr />
					</div>
				);
			})}
			<hr />
			<h2>Add Note</h2>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					name="note-title"
					id="note-title"
					value={title}
					placeholder="Title"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="text"
					name="details"
					id="details"
					value={details}
					placeholder="Details"
					onChange={(e) => setDetails(e.target.value)}
				/>
				<input type="submit" value="Add" />
			</form>
		</div>
	);
};

export default Notes;
