import React from 'react'
import pleaseLogin from '../Images/pleaseLogin.gif'
import './user.css';

 const Request = () => {
  return (
    <div>
        <h1 className='u_notice'>Please login for the test.</h1>
        <img className='u_errorLogin' src={pleaseLogin} style={{margin:'0 auto'}}></img>
    </div>
  )
}

export default Request;
