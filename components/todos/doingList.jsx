import Cards from "../layout/cards";
import { BsPlusCircleFill } from "react-icons/bs";
import TodoItem from "./todoItem";

function DoingList(props) {
	return (
		<Cards>
			<h1 className="text-black text-xl font-bold text-center mb-4">Doing</h1>
			<ul className="mb-16">
				{props.todo.map((value) => (
					<TodoItem key={value.id} id={value.id} title={value.title} />
				))}
			</ul>
			<BsPlusCircleFill className="absolute bottom-0 right-0 text-4xl m-4 hover:cursor-pointer" />
		</Cards>
	);
}
export default DoingList;
