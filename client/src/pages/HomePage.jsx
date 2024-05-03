import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [signUpDropDown, setSignUpDropDown] = useState(false);
    const [signInDropDown, setSignInDropDown] = useState(false);

    return (
        <div className='w-full h-16 bg-slate-600 flex gap-10'>
            <div>
                <button className='w-24 h-12 bg-red-200 rounded-md border-none text-base' onMouseEnter={() => setSignUpDropDown(!signUpDropDown)}>Sign up</button>
                {signUpDropDown && (
                    <div onMouseLeave={() => setSignUpDropDown(false)}>
                        <ul className='w-24 h-20 border-2 border-red-800'>
                            <li className='cursor-pointer hover:text-blue-400'>Admin</li>
                            <li className='cursor-pointer hover:text-blue-400'>Driver</li>
                            <li className='cursor-pointer hover:text-blue-400'>User</li>
                        </ul>
                    </div>
                )}
            </div>
            <div>
                <button className='w-24 h-12 bg-red-200 rounded-md border-none text-base' onMouseEnter={() => setSignInDropDown(!signInDropDown)}>Sign in</button>
                {signInDropDown && (
                    <div onMouseLeave={() => setSignInDropDown(false)}>
                        <ul className='w-24 h-20 border-2 border-red-800'>
                            <Link to="/adminLogin" className='cursor-pointer hover:text-blue-400'>Admin</Link>
                            <li className='cursor-pointer hover:text-blue-400'>Driver</li>
                            <li className='cursor-pointer hover:text-blue-400'>User</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
