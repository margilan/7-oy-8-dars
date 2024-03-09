import React, { useRef, useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [isLoading , setIsLoading] = useState(false);

  const username = useRef();
  const password = useRef();

  const navigate = useNavigate();

    function validate(){


          return true
    }

  function handleLogin(e){
    e.preventDefault();
    const isValid = validate();
    if(isValid){
      const user = {
        username:username.current.value,
        password:password.current.value,
      }
      setIsLoading(true)
      fetch(`${import.meta.env.VITE_AUTH_API}/signin` , {
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
         if(data.id){
          localStorage.setItem('token' , data.accesToken)
          localStorage.setItem('user' , JSON.stringify(data))
          navigate('/')
         }
         if(data.message == 'User Not found.' || data.message == 'Invalid Password!'){
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
        <h1>Login</h1>
      <form class="form">
        <div class="form-group">
          <label for="email">Username</label>
          <input ref={username} required="" name="email" id="email" type="text" placeholder='Enter your username ...'/>
        </div>
        <div class="form-group">
          <label for="email">Password</label>
          <input  ref = {password} required="" name="email" id="email" type="text" placeholder='Enter your password ...'/>
        </div>
        <button onClick = {handleLogin} type="btn" class="form-submit-btn" disabled ={isLoading ? true : false}>{isLoading  ? 'Loading .!.!.' : "Login"}</button>
          <a href="/register">Register an no !</a>
              </form>
    </div>
    </div>
  )
}

export default Login