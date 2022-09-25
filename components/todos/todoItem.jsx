import { useRouter } from "next/router";

function TodoItem(props) {
    const router = useRouter()

    function handleClick() {
        router.push('/' + props.id)
    }

	return (
		<li
			onClick={handleClick}
			className="bg-gray-200 font-semibold text-md m-2 p-2 rounded-lg hover:cursor-pointer hover:bg-gray-300"
		>
			<button>{props.title}</button>
		</li>
	);
}
export default TodoItem;
