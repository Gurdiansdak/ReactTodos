import './App.css';
import Header from "./components/Header/Header"
import CreateToDo from './components/createTodo/CreateToDo';
import ToDo from './components/Todo/Todo';

const todosArray = [
  {
    id: 1,
    title: "Купить бананы",
    status: false
  },
  {
    id: 2,
    title: "Купить пепси",
    status: true
  },
  {
    id: 3,
    title: "Купить соль",
    status: false
  }
]



function App() {
  const newTodos = todosArray.map((item) => <ToDo title={item.title} status={item.status} />)
  const compleateTodos = todosArray.reduce((acc, item) => acc + item.status, 0)
  return (
    <div className="App">
      <Header todos={todosArray.length} compleateTodos={compleateTodos} />
      <div className='content'>
        <CreateToDo />
        <div className='todosWrapper'>
          {/* Todo ({title: "Купить соль", id="1"}) */}
          {newTodos}
        </div>
      </div>
    </div>
  );
}

export default App;


