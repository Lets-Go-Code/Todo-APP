import DoingList from "../components/todos/doingList";
import DoneList from "../components/todos/doneList";
import TodoList from "../components/todos/todoList";


function HomePage(props) {
    return (
        <div className="flex justify-around">
            <TodoList todo={props.data} />
            <DoingList todo={props.data} />
            <DoneList todo={props.data} />
        </div>
    )
}

export async function getStaticProps() {
    let res = await fetch("http://localhost:3001")
    let data = await res.json()
    return {
        props: {
            data: data.map(e => ({
                title : e.title,
                description : e.description
            }))
        }
    }
}
export default HomePage;