import React, { useState } from "react";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [title, setTitle] = useState("");
	const [data, setData] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title !== "" && data !== "") {
			setTodos([
				...todos,
				{
					title,
					data,
					status: false,
				},
			]);
			setTitle("");
			setData("");
		} else {
			window.alert("you must complete all data and title");
		}
	};
	return (
		<div>
			<h1>Todo App</h1>
			<hr />
			{todos?.map((todo, index) => {
				return (
					<div key={todo.title + index}>
						<>
							<div className="max-w-sm rounded overflow-hidden shadow-lg mt:10">
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2">{todo.title}</div>
									<p className="text-gray-700 text-base">{todo.data}</p>
									<p className="text-gray-700 text-base">
										{todo.status ? "Done" : "not yet"}
									</p>
									{todo.status ? null : (
										<button
											class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
											onClick={() => {
												const updatedTodos = [...todos];
												updatedTodos[index].status = true;
												const suTodo = updatedTodos.filter(
													(todo) => todo.status === false
												);
												console.log(suTodo);
												setTodos(suTodo);
											}}
										>
											add to succeded todos
										</button>
									)}
								</div>
							</div>
						</>

						<hr />
					</div>
				);
			})}
			<h1>Add New one</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					name="todo-title"
					id="todo-title"
					value={title}
					placeholder="set title"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="text"
					name="todo-data"
					id="todo-data"
					placeholder="set Data"
					value={data}
					onChange={(e) => setData(e.target.value)}
				/>
				<input type="submit" value="ADD" />
			</form>
		</div>
	);
};

export default Todo;
