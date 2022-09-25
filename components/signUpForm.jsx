import { useRouter } from "next/router";

import {
	FaFacebookF,
	FaLinkedinIn,
	FaGoogle,
	FaRegEnvelope,
} from "react-icons/fa";

import { MdLockOutline } from "react-icons/md";

function SignUpForm() {
	const router = useRouter();

	function handleClick() {
		router.push("/signIn");
	}
    
	return (
		<div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl mx-auto my-24 text-center">
			{/* Sign in Section */}
			<div className="w-3/5 p-5">
				<div className="text-left font-bold">
					<span className="text-teal-500">ToDo</span>App
				</div>
				<div className="py-10">
					<h2 className="text-3xl font-bold text-teal-500 mb-2">
						Make A New Account
					</h2>
					<div className="border-2 w-10 border-teal-500 inline-block mb-2"></div>
					{/* social icon */}
					<div className="flex justify-center my-2">
						<a
							href="#"
							className="border-2 border-gray-300 rounded-full p-3 mx-1"
						>
							<FaFacebookF className="text-sm" />
						</a>
						<a
							href="#"
							className="border-2 border-gray-300 rounded-full p-3 mx-1"
						>
							<FaLinkedinIn className="text-sm" />
						</a>
						<a
							href="#"
							className="border-2 border-gray-300 rounded-full p-3 mx-1"
						>
							<FaGoogle className="text-sm" />
						</a>
					</div>
					<p className="text-gray-400 my-3">or use your email account</p>
					<div className="flex flex-col items-center gap-4">
						<div className="bg-gray-200 w-64 p-2 flex items-center">
							<FaRegEnvelope className="text-gray-400 m-2" />
							<input
								type="email"
								placeholder="Email"
								className="bg-gray-200 outline-none text-sm flex-1"
							/>
						</div>
						<div className="bg-gray-200 w-64 p-2 mb-5 flex items-center">
							<MdLockOutline className="text-gray-400 m-2" />
							<input
								type="password"
								placeholder="Password"
								className="bg-gray-200 outline-none text-sm flex-1"
							/>
						</div>
						<a
							href="#"
							className="border-2 border-teal-500 text-teal-500 rounded-full px-12 py-2 inline-block font-semibold  hover:bg-teal-500 hover:text-white"
						>
							Sign Up
						</a>
					</div>
				</div>
			</div>

			{/* Sign up Section */}
			<div className="w-2/5 bg-teal-500 text-white rounded-tr-3xl rounded-br-2xl py-36 px-12">
				<h1 className="text-3xl font-bold mb-2">Welcome!</h1>
				<div className="border-2 w-10 border-white inline-block mb-2"></div>
				<p className="mb-10">
					Make a List with the new to do app list maker.
				</p>
				<button
					onClick={handleClick}
					className="border-2 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-teal-500"
				>
					Sign In
				</button>
			</div>
		</div>
	);
}
export default SignUpForm;
