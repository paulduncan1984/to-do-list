export default function ListItem({ item, onComplete, onDelete }) {
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
