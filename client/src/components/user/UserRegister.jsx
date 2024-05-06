import React, { useState } from 'react'
import Button from '../button/Button'
import { useRegister } from '../../context/RegisterContext'

const UserRegister = () => {
  const {addUser} = useRegister();
  const [data, setData] = useState({
    fullName:"",
    localGoverment:"",
    wardNo:"",
    village:"",
    tollName : "",
    email:"",
    password :""
  })
  const [emailError, setEmailError] = useState(false);
  const handleChange = (e)=>{
    const {name, value} = e.target;
    
    if(name === 'email'){
      const pattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9-]+\.)?user\.com$/;
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
        addUser(data);
  }
  return (
    <>
         <form>
        <div>
          <label htmlFor="name">Enter Your Name</label>
          <input type="text" id='name' name='fullName' onChange={(e)=> handleChange(e)}/>
        </div>
        <div>
          <label htmlFor="address">Enter your local goverment name</label>
          <input type="text" id='address' name='localGoverment' onChange={(e)=> handleChange(e)} />
        </div>
        <div>
          <label htmlFor="ward">Ward No.</label>
          <input type="text" id='ward' name='wardNo' onChange={(e)=> handleChange(e)} />
        </div>
        <div>
          <label htmlFor="village">Village</label>
          <input type="text" id='village' name='village' onChange={(e)=> handleChange(e)} />
        </div>
        <div>
          <label htmlFor="tollName">Toll Name</label>
          <input type="text" id='tollName' name='tollName' onChange={(e)=> handleChange(e)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email' onChange={(e)=> handleChange(e)} />
          {emailError && <p style={{ color: 'red' }}>Invalid email, add @user.com</p>}
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

export default UserRegister
