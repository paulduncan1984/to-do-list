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
		id: 1,
		title: "Clean car",
		description: "Inside and out",
		due: "11/11/2023",
		status: false,
	},
];

function Button({ children }) {
	return <button>{children}</button>;
}

export default function App() {
	const [toDoList, setToDoList] = useState(initialList);

	function handleComplete(id) {
		console.log(id);
		setToDoList((toDoList) =>
			toDoList.map((item) =>
				item.id === toDoList.id ? { ...toDoList, status: !item.status } : item
			)
		);
	}

	// function handleToggleItem(id) {
	// 	setItems((items) =>
	// 		items.map((item) =>
	// 			item.id === id ? { ...item, packed: !item.packed } : item
	// 		)
	// 	);
	// }

	return (
		<div>
			<h1>To do list</h1>
			<List toDoList={toDoList} onComplete={handleComplete} />
		</div>
	);
}

function List({ toDoList, onComplete }) {
	// const [isActive, setIsActive] = useState(item);

	// function handleComplete() {
	// 	console.log("Checked");
	// 	setIsActive((item) => !item.status);
	// }

	return (
		<div>
			<ul>
				{toDoList.map((item) => (
					<ListItem item={item} onComplete={onComplete} />
				))}
			</ul>
			<Button>Add item</Button>
		</div>
	);
}

function ListItem({ item, onComplete }) {
	// TURN THE 'CHECKED ATTRIBUTE INTO A FUNCTION USING STATE
	function checked() {
		return !item.status ? "selected" : "";
	}
	return (
		<div>
			<li className={checked()}>
				<input
					type="checkbox"
					onChange={() => onComplete(item.id)}
					checked={item.status ? "" : "checked"}
				/>
				<h2>{item.title}</h2>
				<p>{item.description}</p>
				<p>{item.due}</p>
				<button>x</button>
			</li>
		</div>
	);
}
