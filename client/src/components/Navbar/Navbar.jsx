
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import ministry from '../assets/ministry.png';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [signUpDropDown, setSignUpDropDown] = useState(false);
  const [signInDropDown, setSignInDropDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const register = [
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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    <div className="bg-green-200 flex justify-between items-center py-2 px-6 mt-0">
      <div className="flex items-center">
        <Link to="/" className="text-black hover:text-blue-400 mr-4 text-5xl flex justify-center" style={{ fontFamily: 'Times New Roman' }}>
          <img className="mt-0  h-16" src={logo} alt="ministry logo" />
          <p className="ml-4 mt-2" style={{ fontFamily: 'Times New Roman' }}>Cleaner</p>
        </Link>

        <button className="md:hidden  text-white hover:text-blue-400 focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {showMenu ? (
              <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
      </div>


      <div className="hidden md:flex">

      <div className="pt-2 pr-1">
      <Link to="/" className="text-black hover:text-blue-400 mr-6 text-2xl" style={{ fontFamily: 'Times New Roman' }}>
          Home
        </Link>
        <Link to="/about" className="text-black hover:text-blue-400 text-2xl" style={{ fontFamily: 'Times New Roman' }}>
          About us
        </Link>
      </div>
        <div className="relative" onMouseEnter={() => setSignUpDropDown(true)} onMouseLeave={() => setSignUpDropDown(false)}>
          <div>
            <Button name="Sign Up" />
          </div>
          {signUpDropDown && (
            <div className="absolute top-full left-0" onMouseEnter={() => setSignUpDropDown(true)} onMouseLeave={() => setSignUpDropDown(false)}>
              <ul className=" w-24 border-2 flex flex-col border-none  bg-blue-300   py-3 rounded-b-md">
                {register.map((items) => (
                  <Link to={items.href} key={items.href} className="cursor-point  text-black  text-center">
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
              <ul className="w-24 py-3 border-2 flex flex-col border-none text-white bg-blue-300 rounded-b-md">
                {login.map((items) => (
                  <Link to={items.href} key={items.href} className="cursor-pointer  text-black text-center">
                    {items.name}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

    

      {showMenu && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              Contact us
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
              About us
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-green-700">
            <div className="px-2 space-y-1">
              <div className="relative">
                <Button name="Sign Up" onClick={() => setSignUpDropDown(!signUpDropDown)} />
                {signUpDropDown && (
                  <div className="mt-2 ">
                    <ul className="w-20 h-16 border-2 flex flex-col border-none ">
                      {register.map((items) => (
                        <Link to={items.href} key={items.href} className="cursor-pointer p-4 hover:text-blue-400 bg-green-600 text-white">
                          {items.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative">
                <Button name="Sign In" onClick={() => setSignInDropDown(!signInDropDown)} />
                {signInDropDown && (
                  <div className="mt-2">
                    <ul className="w-24 h-20 border-2  flex flex-col border-none text-white bg-green-600">
                      {login.map((items) => (
                        <Link to={items.href} key={items.href} className="cursor-pointer hover:text-blue-400">
                          {items.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
  
 
    </div>
    <hr style={{ backgroundColor: 'black', boxShadow: '0 2px 12px rgb(0, 0, 0)' }} />
    </>
  );
};

export default Navbar;