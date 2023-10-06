// 1. Hide the functionality to show form button
// 2. Add the hide form functionality to same button
// 3. Hide form on form completion
// 4. Add delete item functionality
// 5. Sperate components into their own files
// 6. Style components

import { useState } from "react";

const initialList = [
	{
		id: 1,
		title: "Call bank",
		description: "Close accounts",
		due: "30/10/2023",
		status: true,
	},
	{
		id: 2,
		title: "Go to gym",
		description: "Leg day",
		due: "02/10/2023",
		status: true,
	},
	{
		id: 3,
		title: "Clean car",
		description: "Inside and out",
		due: "11/11/2023",
		status: false,
	},
];

export default function App() {
	const [toDoList, setToDoList] = useState(initialList);
	const [showAddItemForm, setShowAddItemForm] = useState(true);

	function handleComplete(id) {
		setToDoList((toDoList) =>
			toDoList.map((item) =>
				item.id === id ? { ...item, status: !item.status } : item
			)
		);
	}

	function handleDelete(id) {
		console.log(id);
	}

	function handleAddItem(item) {
		setToDoList((items) => [...toDoList, item]);
		// Create a toggle for the add item form and call that here, setting it to false
		setShowAddItemForm(!showAddItemForm);
	}

	function handleShowForm() {
		console.log("clicked");
		setShowAddItemForm(() => !showAddItemForm);
	}

	return (
		<>
			{toDoList.length === 0 ? (
				"Use the form to add items to your to-do list"
			) : (
				<div>
					<h1>To do list</h1>
					<List
						toDoList={toDoList}
						onComplete={handleComplete}
						onDelete={handleDelete}
					/>
				</div>
			)}
			<>
				{!showAddItemForm ? (
					<Button onClick={handleShowForm}>Show Add item form</Button>
				) : (
					""
				)}
			</>

			<>
				{showAddItemForm ? (
					<AddItem
						onAddItem={handleAddItem}
						formToggle={showAddItemForm}
						setformToggle={setShowAddItemForm}
					/>
				) : (
					""
				)}
			</>
		</>
	);
}

function Button({ children, onClick }) {
	return <button onClick={onClick}>{children}</button>;
}

function List({ toDoList, onComplete, onDelete }) {
	return (
		<div>
			<ul>
				{toDoList.map((item) => (
					<ListItem
						item={item}
						onComplete={onComplete}
						key={item.id}
						onDelete={onDelete}
					/>
				))}
			</ul>
		</div>
	);
}

function ListItem({ item, onComplete, onDelete }) {
	return (
		<div>
			<li className={!item.status ? "selected" : ""}>
				<input
					type="checkbox"
					onChange={() => onComplete(item.id)}
					checked={item.status ? "" : "checked"}
				/>
				<h2>{item.title}</h2>
				<p>{item.description}</p>
				<p>{item.due}</p>
				<button onClick={() => onDelete(item.id)}>x</button>
			</li>
		</div>
	);
}

function AddItem({ onAddItem }) {
	// create a function where by onSubmit creates a new object stored in const variable named newItem
	// pull in a function from props (contained in App) that adds this to the initalFriends array, or rather, the toDoList array
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [due, setDue] = useState("");

	// const today = new Date();
	// const month = today.getMonth() + 1;
	// const year = today.getFullYear();
	// const date = today.getDate();
	// const currentDate = month + "/" + date + "/" + year;

	// const [dueDate, setDueDate] = useState(currentDate);

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
