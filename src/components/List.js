import ListItem from "../components/ListItem";

export default function List({ toDoList, onComplete, onDelete }) {
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
