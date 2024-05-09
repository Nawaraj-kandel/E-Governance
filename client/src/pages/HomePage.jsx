
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "../components/button/Button";
import Hero from "../components/Hero/Hero";
// import Footer from "../components/Footer/Footer";

const HomePage = () => {
  // const [signUpDropDown, setSignUpDropDown] = useState(false);
  // const [signInDropDown, setSignInDropDown] = useState(false);

  // const register = [
  //   {
  //     href: "/adminRegister",
  //     name: "Admin",
  //   },
  //   {
  //     href: "/userRegister",
  //     name: "User",
  //   }
  // ];

  // const login = [
  //   {
  //     href: "/adminLogin",
  //     name: "Admin",
  //   },
  //   {
  //     href: "/userLogin",
  //     name: "User",
  //   },
  //   {
  //     href: "/driverLogin",
  //     name: "Driver",
  //   },
  // ];

  return (
  //   <div className="w-full h-20 bg-slate-600 flex justify-between items-center px-6 mt-0">
  //     <div>
  //     <Link to="/" className="text-white hover:text-blue-400 mr-4 text-3xl ">
  //         Cleaner
  //       </Link>
  //     </div>
  //     <div >
  //       <Link to="/" className="text-white hover:text-blue-400 mr-12">
  //         Home
  //       </Link>
  //       <Link to="/contact" className="text-white hover:text-blue-400 mr-12">
  //         Contact us
  //       </Link>
  //       <Link to="/about" className="text-white hover:text-blue-400">
  //         About us
  //       </Link>
  //     </div>
  //     <div className="flex">
  //       <div className="relative" onMouseEnter={() => setSignUpDropDown(true)} onMouseLeave={() => setSignUpDropDown(false)}>
  //         <div>
  //           <Button name="Sign Up" />
  //         </div>
  //         {signUpDropDown && (
  //           <div className="absolute top-full left-0 " onMouseEnter={() => setSignUpDropDown(true)} onMouseLeave={() => setSignUpDropDown(false)}>
  //             <ul className="w-20 h-16 border-2 flex flex-col border-none mt-4 ">
  //               {register.map((items) => (
  //                 <Link
  //                   to={items.href}
  //                   key={items.href}
  //                   className="cursor-pointer hover:text-blue-400 bg-none text-black"
  //                 >
  //                   {items.name}
  //                 </Link>
  //               ))}
  //             </ul>
  //           </div>
  //         )}
  //       </div>
  //       <div className="relative ml-4" onMouseEnter={() => setSignInDropDown(true)} onMouseLeave={() => setSignInDropDown(false)}>
  //         <div>
  //           <Button name="Sign In" />
  //         </div>
  //         {signInDropDown && (
  //           <div className="absolute top-full left-0" onMouseEnter={() => setSignInDropDown(true)} onMouseLeave={() => setSignInDropDown(false)}>
  //             <ul className="w-24 h-20 border-2 flex flex-col border-none  bg-none mt-4">
  //               {login.map((items) => (
  //                 <Link
  //                   to={items.href}
  //                   key={items.href}
  //                   className="cursor-pointer hover:text-blue-400"
  //                 >
  //                   {items.name}
  //                 </Link>
  //               ))}
  //             </ul>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
<div>
  <Hero/>
  {/* <Footer/> */}
</div>   
);
};

export default HomePage;
