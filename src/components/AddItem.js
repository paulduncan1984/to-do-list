import { useState } from "react";
import Button from "./Button";

export default function AddItem({ onAddItem }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [due, setDue] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log(e);
		if (!title || !description || !due) return;

		const id = crypto.randomUUID();
		const newItem = {
			id,
			title,
			description,
			due,
			status: true,
		};

		console.log(newItem.due);

		// Passes new item object to toDoList array
		onAddItem(newItem);

		// Resets fields
		setTitle("");
		setDescription("");
		setDue("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Title</label>
			<input
				type="text"
				value={title}
				placeholder="Insert title here"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<label>Description</label>
			<input
				type="text"
				value={description}
				placeholder="Insert description here"
				onChange={(e) => setDescription(e.target.value)}
			/>
			<label>Due date</label>
			<input type="date" value={due} onChange={(e) => setDue(e.target.value)} />
			<Button>Add item</Button>
		</form>
	);
}
