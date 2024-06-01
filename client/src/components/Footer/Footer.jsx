import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-green-500 text-white py-4">
            <p className='text-center text-2xl mb-4' style={{ fontFamily: 'Times New Roman' }}>Contact us</p>
           
            <div className='flex flex-col items-center mt-2'>
                <ul className='flex space-x-4'>
                    <li>Email: wastemanagementbkmc@gmail.com</li>
                    <li>Phone: +1234567890</li>
                    <li>Address: Bhaktapur, Nepal</li>
                </ul>
            </div>
            <div className='flex justify-center mt-2'>
                <p>
                    If you have any queries or complaints 
                    <a href="/Contact" className="text-blue-800 font-bold hover:underline ml-2"> 
                        Click Here
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
