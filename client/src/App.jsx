
import './App.css'
import AdminForm from './components/admin/AdminForm';
import AdminHomePage from './components/admin/AdminHomePage';
import AdminRegister from './components/admin/AdminRegister';
import Bin from './components/bin/Bin';
import CreateBin from './components/bin/CreateBin';
import UpdateBin from './components/bin/UpdateBin';
import DriverForm from './components/driver/DriverForm';
import DriverRegister from './components/driver/DriverRegister';
import UserForm from './components/user/UserForm';
import UserRegister from './components/user/UserRegister';
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/adminLogin' element={<AdminForm/>}/>
      <Route path='/adminRegister' element={<AdminRegister/>} />
      <Route path='/adminHomePage' element={<AdminHomePage/>}/>
      <Route path='/userLogin' element={<UserForm/>}/>
      <Route path='/userRegister' element={<UserRegister/>}/>
      <Route path='/driverLogin' element={<DriverForm/>}/>
      <Route path='/driverRegister' element={<DriverRegister/>}/>
      <Route path='/createBin' element={<CreateBin/>}/>
      <Route path='/bin' element={<Bin/>}/>
      <Route path='/updateBin/:id' element={<UpdateBin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
