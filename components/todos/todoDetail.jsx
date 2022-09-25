import { useRouter } from "next/router";

function TodoDetail(props) {
	const router = useRouter();

	function handleClick() {
		router.push("/");
	}
	return (
		<div className="mx-auto bg-gray-100 rounded-xl shadow-xl max-w-3xl p-8">
			<h1 className="text-3xl font-bold">To do List 1</h1>
			<div className="bg-gray-200 rounded-md p-4 my-4">
				<p className="my-4 text-xl h-[100px]">
					This is a first to do list description
				</p>
			</div>
			<div className="flex justify-end">
				<button onClick={handleClick} className="bottom-0 right-0 border-2 border-teal-500 text-teal-500 rounded-xl px-12 py-2 inline-block font-semibold  hover:bg-teal-500 hover:text-white">
					Back
				</button>
			</div>
		</div>
	);
}
export default TodoDetail;
