import './App.css';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoInput />
      <Todos />
    </div>
  );
}

export default App;
