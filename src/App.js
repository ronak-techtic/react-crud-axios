import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Read from './components/read';
import Create from './components/create';
import Update from './components/update';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <h2 className="main-header">React CRUD Operations</h2>
          <div>
          <Routes>
            <Route path='/read' element={<Read />} />
            <Route path='/create' element={<Create />} />
            <Route path='/update' element={<Update />} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
