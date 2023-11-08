import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import LogedPage from './pages/LogedPage';
import PrivateRoute from '../PrivateRoute';
import Forgot from './pages/Forgot';
import UpdatePassword from './pages/UpdatePassword';
import Verify from './pages/Verify';
import SuccessPage from './pages/SuccessPage';
import Info from './pages/Info';
import Nav from './componant/nav';
import Add from "./componant/Add";
import Fashion from "./componant/Fashion";
import Electronics from "./componant/electronics";
import Furnitures from "./componant/Furnitures";
//import appstyles from "../App.module.css";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index path='/' element={<PrivateRoute element={<LogedPage/>}/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/updatePassword' element={<UpdatePassword/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path="/nav" element={<Nav />} />
        <Route path="/add" element={<Add />} />
        <Route path="/furnitures" element={<Furnitures />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/fashion" element={<Fashion />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App