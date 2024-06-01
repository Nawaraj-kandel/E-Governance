import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-green-200  text-black ">
            <hr style={{ backgroundColor: 'black', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.753)' }} />

            <div className='flex flex-col items-center mt-1 '>
                <ul className='flex space-x-4 py-8'>
                    <li>Email: wastemanagementdng@gmail.com</li>
                    <li>Phone: +1234567890</li>
                    <li>Address: Lamahi-Dang, Nepal</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
