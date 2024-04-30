import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='login-main'>
        <div className='login-container'>
            <span className='login-title'>Member Login</span>
            <div>
                <div>
                    <span>Enter your UserName</span>
                    <input type="text" />
                </div>
                <div>
                    <span>Enter your Password</span>
                    <input type="password"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login