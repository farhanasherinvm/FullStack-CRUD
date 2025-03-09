import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Task from './Pages/Task';

import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
function App() {
  return (
    


      <Router>
        <div className="App">
       
        <Routes>
          
          <Route path='/register' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='' element={<Task/>}/> 
        </Routes>
        </div>
      </Router>
    
  );
}

export default App;
