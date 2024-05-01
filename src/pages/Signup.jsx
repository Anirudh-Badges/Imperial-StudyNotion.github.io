import React from 'react'
import Template from '../Components/cores/Auth/Template'
import signupImage from '../assets/Images/signup.webp';
const Signup = () => {
  return (
    <Template
    title={'Welcome Back'}
    discription1={'Discover your Passions,'}
    discription2={'Be Unstoppable'}
    image={signupImage}
    formType={'signup'}/>
  )
}

export default Signup
