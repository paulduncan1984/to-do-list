// 1. Hide the functionality to show form button - DONE
// 2. Add the hide form functionality to same button - Not required
// 3. Hide form on form completion - Done
// 4. Add delete item functionality - Done
// 5. Sperate components into their own files - DONE
// 6. Style components

import { useState } from "react";
// components
import Button from "./components/Button";
import List from "./components/List";
import AddItem from "./components/AddItem";

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
	const [showAddItemForm, setShowAddItemForm] = useState(false);

	function handleComplete(id) {
		setToDoList((toDoList) =>
			toDoList.map((item) =>
				item.id === id ? { ...item, status: !item.status } : item
			)
		);
	}

	function handleDelete(id) {
		console.log(id);
		setToDoList((toDoList) => toDoList.filter((item) => item.id !== id));
		console.log(toDoList);
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
