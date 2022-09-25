import DoingList from "../components/todos/doingList";
import DoneList from "../components/todos/doneList";
import TodoList from "../components/todos/todoList";

const DUMMY_LIST =[
    {
        id: '1',
        title: 'To Do List 1',
        description: 'This is the first to do list'
    },
    {
        id: '2',
        title: 'To Do List 2',
        description: 'This is the second to do list'
    },
    {
        id: '3',
        title: 'To Do List 3',
        description: 'This is the third to do list'
    },
]

function HomePage() {
    return (
    <div className="flex justify-between">
        <TodoList todo={DUMMY_LIST}/>
        <DoingList todo={DUMMY_LIST}/>
        <DoneList todo={DUMMY_LIST}/>
    </div>
    )
}
export default HomePage;