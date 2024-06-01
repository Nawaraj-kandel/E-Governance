
import React from 'react';
import Box from '../box/Box';
import bin from '../assets/bin.png';
import driver from '../assets/driver.png';
import complaint from '../assets/complaint.png';

const AdminHomePage = () => {
  const items = [
   
    {
      icon: bin,
      name: "Create Bin",
      href: "/createBin"
    },
    {
      icon: bin,
      name: "View Bin",
      href: "/bin"
    },
    {
      icon: driver,
      name: "Add Driver",
      href: "/driverRegister"
    },
    {
      icon: driver,
      name: "View Driver",
      href: "/viewDriver",
    },
    {
      icon: complaint,
      name: "Complaint",
      href: "/displayComplaint",
    }
  ];

  return (
    <>
      <h1 className='bg-green-200 text-center font-semibold text-2xl pt-10'>Admin Dashboard</h1>
      <div className="bg-green-200 w-full h-[65vh] flex justify-center items-center">
        <div className="w-full max-w-screen-lg">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  justify-items-center">
            {items.map((item, index) => (
              <Box key={index} icon={item.icon} name={item.name} link={item.href} small />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
