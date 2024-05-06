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
       <form>
        <div>
          <label htmlFor="name">Name of Driver</label>
          <input type="text" id='name' name='fullName' onChange={(e)=> handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id='address' name='address' onChange={(e)=> handleChange(e)} />
        </div>
        <div>
          <label htmlFor="contact">Contact</label>
          <input type="text" id='address' name='contact' onChange={(e)=> handleChange(e)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' onChange={(e)=> handleChange(e)} />
          {emailError && <p style={{ color: 'red' }}>Invalid email, add @driver.com</p>}
          
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' name='password' onChange={(e)=> handleChange(e)}/>
        </div>
         <div className='w-24 h-12' onClick={(e)=> handleSubmit(e)}>
         <Button name="submit"/>
         </div>
      </form>   
    </>
  )
}

export default DriverRegister
