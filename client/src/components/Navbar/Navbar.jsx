
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Button from "../components/button/Button";
import Button  from "../button/Button";
import ministry from '../assets/ministry.png';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [signUpDropDown, setSignUpDropDown] = useState(false);
  const [signInDropDown, setSignInDropDown] = useState(false);

  const register = [
    {
      href: "/adminRegister",
      name: "Admin",
    },
    {
      href: "/userRegister",
      name: "User",
    }
  ];

  const login = [
    {
      href: "/adminLogin",
      name: "Admin",
    },
    {
      href: "/userLogin",
      name: "User",
    },
    {
      href: "/driverLogin",
      name: "Driver",
    },
  ];

  return (
    <div className=" h-20 bg-slate-600 flex justify-between items-center px-6 mt-0">
      <div>
      <Link to="/" className="text-white hover:text-blue-400 mr-4 text-5xl flex justify-center  " style={{ fontFamily: 'Times New Roman' }}>
          <img className=" mt-0 text-white h-16" src={logo} alt="ministry logo" />
          <p className=" ml-4 mt-2 " style={{fontFamily:'Times New Roman'}}>Cleaner</p>
        </Link>
      </div>
      
      <div >
        <Link to="/" className="text-white hover:text-blue-400 mr-12 text-2xl " style={{ fontFamily: 'Times New Roman' }}>
          Home
        </Link>
        <Link to="/contact" className="text-white hover:text-blue-400 mr-12 text-2xl "style={{ fontFamily: 'Times New Roman' }}>
          Contact us
        </Link>
        <Link to="/about" className="text-white hover:text-blue-400 text-2xl" style={{ fontFamily: 'Times New Roman' }}>
          About us
        </Link>
      </div>
      <div className="flex">
        <div className="relative" onMouseEnter={() => setSignUpDropDown(true)} onMouseLeave={() => setSignUpDropDown(false)}>
          <div>
            <Button name="Sign Up" />
          </div>
          {signUpDropDown && (
            <div className="absolute top-full left-0 " onMouseEnter={() => setSignUpDropDown(true)} onMouseLeave={() => setSignUpDropDown(false)}>
              <ul className="w-20 h-16 border-2 flex flex-col border-none mt-4  ">
                {register.map((items) => (
                  <Link
                    to={items.href}
                    key={items.href}
                    className="cursor-pointer hover:text-blue-400 bg-slate-600  text-white"
                  >
                    {items.name}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="relative ml-4" onMouseEnter={() => setSignInDropDown(true)} onMouseLeave={() => setSignInDropDown(false)}>
          <div>
            <Button name="Sign In" />
          </div>
          {signInDropDown && (
            <div className="absolute top-full left-0" onMouseEnter={() => setSignInDropDown(true)} onMouseLeave={() => setSignInDropDown(false)}>
              <ul className="w-24 h-20 border-2 flex flex-col border-none text-white bg-slate-600 mt-4">
                {login.map((items) => (
                  <Link
                    to={items.href}
                    key={items.href}
                    className="cursor-pointer hover:text-blue-400"
                  >
                    {items.name}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
