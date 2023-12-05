import Home from './Pages/Home/Home';
import Login from './Components/Login/Login';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import Timeline from './Components/ChatArea/Timeline';
import Users from './Components/Users/Users';
import UGroup from './Components/Users/UGroup';
import Groups from './Components/CreateGroups/Groups';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}/> 
        <Route path='/' element={<Login register/>} />
        <Route path="app" element={<Home />}> 
          <Route path='welcome' element={<Welcome/>}></Route>
          <Route path='timeline' element={<Timeline/>}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='ugroup' element={<UGroup/>}></Route>
          <Route path='create-grp' element={<Groups/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
