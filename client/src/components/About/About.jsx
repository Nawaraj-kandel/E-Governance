
import React from 'react';
import about from '../assets/about.png';

const About = () => {
    return (
        <div className='bg-green-200 p-8 flex flex-col md:flex-row'>
            <div className="md:w-3/4 pr-0 md:pr-16">
                <h1 className='font-bold text-3xl mb-4' style={{ fontFamily: 'Times New Roman' }}>About us:</h1>
                <p className='text-lg mb-4' style={{ fontFamily: 'Times New Roman' }}>
                    Imagine a seamless waste management system at your service, courtesy of the government. Through a user-friendly digital platform, citizens gain access to a comprehensive suite of services aimed at enhancing convenience and efficiency in waste disposal. 
                    Firstly, citizens can schedule waste pickups with ease, selecting preferred time slots that align with their daily routines. This empowers individuals to plan ahead, ensuring their waste is promptly collected without disrupting their schedules. Through real-time updates, users receive notifications, enabling them to prepare their bins for pickup, fostering a collaborative effort in maintaining cleanliness within communities.
                </p>
                <p className='text-lg mb-4' style={{ fontFamily: 'Times New Roman' }}>
                    Furthermore, should any issues arise, citizens can swiftly lodge complaints or report concerns through the platform. Whether it's a missed collection or a bin in need of repair, the system facilitates rapid communication with relevant authorities, ensuring timely resolution and improving overall service quality.
                    Behind the scenes, an efficient allocation system assigns drivers to designated routes based on demand and availability. This optimization minimizes wait times for citizens while maximizing the productivity of waste management personnel. By harnessing technology, the government optimizes resource allocation, fostering a more sustainable and responsive waste management infrastructure.
                </p>
                <p className='text-lg' style={{ fontFamily: 'Times New Roman' }}>
                    In essence, this digital waste management system revolutionizes the citizen experience, offering unparalleled convenience and transparency. By providing visibility into waste collection schedules, facilitating complaint resolution, and optimizing resource allocation, the government empowers individuals to actively participate in maintaining clean and healthy communities. Together, through seamless collaboration between citizens and authorities, we pave the way for a cleaner, greener future.
                </p>
            </div>
            <div className="md:w-1/4">
                <img className='h-48 md:h-auto mt-8 md:mt-0' src={about} alt="picture of environment with waste" />
            </div>
        </div>
    );
};

export default About;
