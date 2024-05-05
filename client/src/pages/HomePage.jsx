import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

const HomePage = () => {
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
    },
    {
      href: "/driverRegister",
      name: "Driver",
    },
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
    <div className="w-full h-16 bg-slate-600 flex gap-10">
      <div>
        <div className="w-24 h-12"  onMouseEnter={() => setSignUpDropDown(!signUpDropDown)}>
        <Button name="Sign Up"  />
        </div>
        {signUpDropDown && (
          <div onMouseLeave={() => setSignUpDropDown(false)}>
            <ul className="w-24 h-20 border-2 flex flex-col border-red-800">
              {register.map((items) => {
                return (
                  
                    <Link
                      to={items.href}
                      key={items.href}
                      className="cursor-pointer hover:text-blue-400"
                    >
                    
                      {items.name}
                    </Link>
                  
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div>
      <div className="w-24 h-12" onMouseEnter={() => setSignInDropDown(!signInDropDown)}>
      <Button name="Sign In" />
      </div>
        {signInDropDown && (
          <div onMouseLeave={() => setSignInDropDown(false)}>
            <ul className="w-24 h-20 border-2 flex flex-col border-red-800">
              {login.map((items) => {
                return (
                  
                    <Link
                      to={items.href}
                      key={items.href}
                      className="cursor-pointer hover:text-blue-400"
                    >
                     {items.name}
                    </Link>
                  
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
