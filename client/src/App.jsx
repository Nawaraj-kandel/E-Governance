import "./App.css";
import ContactUs from "./components/Contact/ContactUs";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import AdminForm from "./components/admin/AdminForm";
import AdminHomePage from "./components/admin/AdminHomePage";
import AdminRegister from "./components/admin/AdminRegister";
import ProtectedAdmin from "./components/auth/ProtectedAdmin";
import ProtectedDriver from "./components/auth/ProtectedDriver";
import ProtectedUser from "./components/auth/ProtectedUser";
import Bin from "./components/bin/Bin";
import CreateBin from "./components/bin/CreateBin";
import UpdateBin from "./components/bin/UpdateBin";
import Display from "./components/complaint/Display";
import DriverForm from "./components/driver/DriverForm";
import DriverHomePage from "./components/driver/DriverHomePage";
import DriverRegister from "./components/driver/DriverRegister";
import ViewDriver from "./components/driver/ViewDriver";
import UserForm from "./components/user/UserForm";
import UserHomePage from "./components/user/UserHomePage";
import UserRegister from "./components/user/UserRegister";
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Map from "./components/map/Map";

function App() {
  return (
    <>
      <BrowserRouter>
     {/* <Navbar/> */}
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path ="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/adminLogin" element={<AdminForm />} />
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/adminHomePage" element={ <ProtectedAdmin><AdminHomePage /></ProtectedAdmin> } />
          <Route path="/userLogin" element={<UserForm />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/userHomePage" element={<ProtectedUser><UserHomePage/></ProtectedUser>}/>
          <Route path="/driverLogin" element={<DriverForm />} />
          <Route path="/driverRegister" element={<ProtectedAdmin><DriverRegister /></ProtectedAdmin>} />
          <Route path="/driverHomePage" element={<ProtectedDriver><DriverHomePage/></ProtectedDriver>} />
          <Route path="/createBin" element={<ProtectedAdmin><CreateBin /></ProtectedAdmin> } />
          <Route path="/bin" element={ <ProtectedAdmin><Bin /></ProtectedAdmin>} />
          <Route path="/updateBin/:id" element={<ProtectedAdmin><UpdateBin /></ProtectedAdmin>} />
          <Route path="/viewDriver" element={<ProtectedAdmin><ViewDriver /></ProtectedAdmin>} />
          <Route path="/displayComplaint" element={<ProtectedAdmin><Display/></ProtectedAdmin>}/>
        </Routes>
        {/* <Footer/> */}
        
      </BrowserRouter>
    </>
  );
}

export default App;
