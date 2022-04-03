import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
         <Route></Route>
         <Route></Route>
      </Routes>
      
    </div>
  );
}

export default App;
