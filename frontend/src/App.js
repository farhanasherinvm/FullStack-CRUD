import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Task from './Pages/Task';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tasklist' element={<Task/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
