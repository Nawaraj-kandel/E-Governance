import React from 'react';
import instagram_icon from '../assets/instagram_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';
import mail from '../assets/mail.png';

const Footer = () => {
    return (
        <footer className="bg-green-600 text-white py-4">
            <p className='text-center text-2xl mb-4' style={{ fontFamily: 'Times New Roman' }}>Contact us</p>
           
            <div className='flex flex-col justify-center items-center mt-4'>
                <ul className='text-center'>
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
