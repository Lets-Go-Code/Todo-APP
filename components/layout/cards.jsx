function Cards(props) {
	return (
		<div className="relative bg-gray-100 rounded-md shadow-xl w-1/4 p-2">
            {props.children}
        </div>
	);
}
export default Cards;
