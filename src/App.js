import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Reviews from './Components/Reviews/Reviews';
import bootstrap from 'bootstrap';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path = '/reviews' element={<Reviews></Reviews>}></Route>
         <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
         <Route path='/about' element={<About></About>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
