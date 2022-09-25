import Link from "next/link";

function Navbar() {
	return (
		<div className="bg-teal-500">
			<div className="flex justify-between items-center h-20 max-w-[1240px] lg:mx-auto mx-3 px-3 text-white">
				{/* logo */}
				<h1 className="text-white text-3xl font-bold">Todo App</h1>

				{/* Menu */}
				<div className="flex items-center">
					<ul className="flex p-4 gap-6 font-bold text-lg">
						<li className="hover:cursor-pointer">
							<Link href="/">To Do List</Link>
						</li>
						<li className="hover:cursor-pointer">
							<Link href="/">Add New Todo</Link>
						</li>
						<li className="hover:cursor-pointer">
							<Link href="/signIn">Sign In</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
