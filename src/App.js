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

	return (
		<div>
			<h1>To do list</h1>
			<List toDoList={toDoList} />
		</div>
	);
}

function List({ toDoList }) {
	return (
		<div>
			<ul>
				{toDoList.map((item) =>
					item.status ? <ListItem item={item} /> : null
				)}
			</ul>
			<Button>Add item</Button>
		</div>
	);
}

function ListItem({ item }) {
	// const [isActive, setIsActive] = useState(item);
	return (
		<div>
			<li>
				<input type="checkbox" />
				<h2>{item.title}</h2>
				<p>{item.description}</p>
				<p>{item.due}</p>
				<button>x</button>
			</li>
		</div>
	);
}
