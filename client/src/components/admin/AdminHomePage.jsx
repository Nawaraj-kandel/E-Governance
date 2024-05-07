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
      name:"Compalint",
      href:"/displayComplaint",
    },{
      icon:"",
      name:"View Work Report",
      href:""
    }

  ]
  return (
    <div>
         {items.map((item)=>{
          return(
            <Box key={item.index} icon={item.icon} name={item.name} link={item.href}/>
          )
         })}
    </div>
  )
}

export default AdminHomePage
