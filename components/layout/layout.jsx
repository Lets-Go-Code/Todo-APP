import Navbar from "./navbar";

function Layout(props) {
	return (
		<div cla>
			<Navbar />
			<main className="mx-[4rem] my-[3rem]">
				{props.children}
			</main>
		</div>
	);
}

export default Layout;
