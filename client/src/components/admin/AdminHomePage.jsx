import React from 'react'
import Box from '../box/Box'

const AdminHomePage = () => {
  const items = [
    {
      icon:"",
      name:"Create Bin",
      href:"/createBin"
    },
    {
      icon:"",
      name:"Update Bin",
      href:"/bin"
    },
    {
       icon:"",
       name:"Add Driver",
       href:"/driverRegister"

    },
    {
      icon:"",
      name:"View Driver",
      href:"/viewDriver",
    },
    {
      icon:"",
      name:"Complaint",
      href:"/displayComplaint",
    },{
      icon:"",
      name:"View Work Report",
      href:""
    }

  ]
  return (
  <>
  <h1 className='text-center font-semibold text-2xl pt-10'>Admin Panel</h1>
      <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-full max-w-screen-lg">
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <Box key={index} icon={item.icon} name={item.name} link={item.href} />
          ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default AdminHomePage
