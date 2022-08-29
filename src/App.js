import logo from './logo.svg';
import './App.css';
import Create from './components/create';

function App() {
  return (
    <div className="App">
      <div className="main">
        <h2 className="main-header">React CRUD Operations</h2>
        <div><Create /></div>
      </div>
    </div>
  );
}

export default App;
