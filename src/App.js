import './App.css';

//components import statements--
import Header from './components/header'
import Todoform from './components/todoform'
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header />
      <Todoform />
      <Todos/>
    </div>
  );
}

export default App;
