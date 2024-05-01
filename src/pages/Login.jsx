import React from 'react'
import Template from '../Components/cores/Auth/Template';
import loginImage from '../assets/Images/login.webp';

const Login = () => {
  return (
    <Template
    title={'Welcome Back'}
    discription1={'Discover your Passions,'}
    discription2={'Be Unstoppable'}
    image={loginImage}
    formType={'login'}/>
  )
}

export default Login
