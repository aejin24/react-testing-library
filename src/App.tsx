import Todo from "./components/Todo";
import { TODO_LIST } from "./data/todo";

function App() {
  return <Todo list={TODO_LIST} />;
}

export default App;
