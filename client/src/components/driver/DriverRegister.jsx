import React , {useState} from 'react'
import Button from '../button/Button';
import { useRegister } from '../../context/RegisterContext';

const DriverRegister = () => {
  const {addDriver} = useRegister();
  const [data, setData] = useState({
    fullName:"",
    address:"",
    contact:"",
    email:"",
    password:""
  });
  const [emailError, setEmailError] = useState(false);
  const handleChange = (e)=>{
    const {name, value} = e.target;
    
    if(name === 'email'){
      const pattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9-]+\.)?driver\.com$/;
      if (!pattern.test(value)) {
        setEmailError(true);
      }
      else{
        setEmailError(false);
      }
    }

    setData({
      ...data,
      [name] : value
    })
 
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    addDriver(data);
  }
  return (
    <>
        <div className="bg-green-200 min-h-screen flex justify-center flex-col items-center">
          <h1 className='text-2xl font-bold m-5'>Add Driver</h1>
      <form className="bg-green-200 border-2 border-black rounded-lg shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name of Driver
          </label>
          <input
            type="text"
            id="name"
            name="fullName"
            onChange={(e)=> handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={(e)=> handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            onChange={(e)=> handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e)=> handleChange(e)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              emailError ? 'border-red-500' : ''
            }`}
          />
          {emailError && <p className="text-red-500 text-xs italic">Invalid email, add @driver.com</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e)=> handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className=" w-24 h-12 flex justify-center" onClick={(e)=> handleSubmit(e)}>
          <Button name="Submit"  />
        </div>
      </form>
    </div>  
    </>
  )
}

export default DriverRegister
