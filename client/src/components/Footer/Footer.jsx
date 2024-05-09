import React from 'react';
import instagram_icon from '../assets/instagram_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';
import mail from '../assets/mail.png';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <p className='mx-auto flex justify-center items-center text-4xl mb-4' style={{ fontFamily: 'Times New Roman' }}>Contact us</p>
            <div className="container mx-auto flex justify-center items-center">
                
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={instagram_icon} alt="Instagram" className="h-8 bg-slate-800" />
                </a>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={whatsapp_icon} alt="WhatsApp" className="h-8 bg-slate-800" />
                </a>
                <a href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img  src={mail} alt="gmail" className="h-8 bg-slate-800" />
                </a>
            </div>
            <div>
            <p className='flex justify-center mt-4'>
                    Email: wastemanagementbkmc@gmail.com<br />
                    Phone: +1234567890<br />
                    Address: Bhaktapur,Nepal
                </p>
                <p className='flex justify-center mt-2'>
                    If you have any queries or complain  <a href="/Contact" className="text-blue-500 hover:underline mr-2"> <p className='ml-2'> Click Here</p>   </a> 
                </p>
            </div>
        </footer>
    );
};

export default Footer;
