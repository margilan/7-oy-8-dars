import React, { useRef, useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

function Register() {

  const [isLoading , setIsLoading] = useState(false);

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const repassword = useRef();

  const navigate = useNavigate();

    function validate( username , email , password , repassword){


          return true
    }

  function handleLogin(e){
    e.preventDefault();
    const isValid = validate();
    if(isValid){
      const user = {
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
      }
      setIsLoading(true)
      fetch(`${import.meta.env.VITE_AUTH_API}/signup` , {
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
          if(data.message == 'User registered successfully!'){
            navigate('/login')
          }

          if(data.message == 'Failed! Email is already in use!'){
            alert(data.message)
            return
          }
          if(data.message == 'Failed! Username is already in use!'){
            alert(data.message)
            return
          }
      })
      .catch(err => {
        console.log(err);
      })
      .finally( ()=>{
        setIsLoading(false)
      })
    }
  }
  return (
    <div className='wrapper'>
      <div class="form-container">
        <h1>Register</h1>
      <form class="form">
        <div class="form-group">
          <label for="email">Username</label>
          <input ref={username} required="" name="email" id="email" type="text" placeholder='Enter your username ...'/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input ref={email} required="" name="email" id="email" type="text" placeholder='Enter your email ...'/>
        </div>
        <div class="form-group">
          <label for="email">Password</label>
          <input  ref = {password} required="" name="email" id="email" type="text" placeholder='Enter your password ...'/>
        </div>
        <div class="form-group">
          <label for="email">Repassword</label>
          <input  ref = {repassword} required="" name="email" id="email" type="text" placeholder='Enter your repet password ...'/>
        </div>
        <button onClick = {handleLogin} type="btn" class="form-submit-btn" disabled ={isLoading ? true : false}>{isLoading  ? 'Registered ...' : "Register"}</button>  
            <a href="/login">Login </a>
            </form>
    </div>
    </div>
  )
}

export default Register