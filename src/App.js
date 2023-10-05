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

	function handleComplete(id) {
		setToDoList((toDoList) =>
			toDoList.map((item) =>
				item.id === id ? { ...item, status: !item.status } : item
			)
		);
	}

	return (
		<div>
			<h1>To do list</h1>
			<List toDoList={toDoList} onComplete={handleComplete} />
		</div>
	);
}

function Button({ children }) {
	return <button>{children}</button>;
}

function List({ toDoList, onComplete }) {
	return (
		<div>
			<ul>
				{toDoList.map((item) => (
					<ListItem item={item} onComplete={onComplete} key={item.id} />
				))}
			</ul>
			<Button>Add item</Button>
		</div>
	);
}

function ListItem({ item, onComplete }) {
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
				<button>x</button>
			</li>
		</div>
	);
}
