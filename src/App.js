import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Logout from './Components/Logout';
import Login from './Components/Login';
import Home from './Components/Home';
import PrivateComponent from './utils/PrivateComponent';
import UserInfo from './Components/UserInfo';


function App() {
  const auth=localStorage.getItem('token');
  return (
    <div className="App">
      {auth && <Navbar />}
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/userInfo:id' element={< UserInfo />}></Route>
        </Route>
        <Route exact path="/logout" element={<Logout />}></Route>
        <Route exact path='/login' element={<Login />} ></Route>
      </Routes>
    </div >
  );
}

export default App;
