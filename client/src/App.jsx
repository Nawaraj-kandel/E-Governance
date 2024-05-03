
import './App.css'
import AdminForm from './components/admin/AdminForm';
import DriverForm from './components/driver/DriverForm';
import UserForm from './components/user/UserForm';
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/adminLogin' element={<AdminForm/>}/>
      <Route path='/userLogin' element={<UserForm/>}/>
      <Route path='/driverLogin' element={<DriverForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
