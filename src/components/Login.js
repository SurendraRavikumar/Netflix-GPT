import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData, checkValidDataSignUp } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);  // Here i have careated the this state variable to check weather the user is Signed or not
  const [errorMessage, setErrorMessage] = useState(null); // Here state variable to store the error message after checking the validation

  // With the help of this useRef Hook we keep the refrence to that particular form input element.
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // Here this function is to handle the toggle b/w Sign IN / Sign Up
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  }

  // Here this function is to handle the validate of the credientials when we click on that SIGN IN / SIGN UP in button
  const handelButtonClick = () => {
    // Initially we validate the form data i.e) email,password etc....
    const message = isSignInForm ? checkValidData(email.current.value, password.current.value) : checkValidDataSignUp(email.current.value, password.current.value, name.current.value);
    setErrorMessage(message); // Here we setting the error message once we validate the form data.

    // Once the Form validation is done. then, we can proceed with Sign IN/ Sign UP.
  }

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg')`,
      }}
    >
      {/* Black overlay on background */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Header (Netflix logo) */}
      <Header />

      {/* Sign In / Sign Up form */}
      <form onSubmit={(e) => { e.preventDefault() }} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='User Name' className='p-2 my-2 w-full bg-gray-800 rounded-lg bg-opacity-80' />}
        <input ref={email} type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-800 rounded-lg bg-opacity-80' />
        <input ref={password} type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-800 rounded-lg bg-opacity-80' />
        {errorMessage && <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>}
        <button className='p-2 my-3 bg-red-700 w-full rounded-lg' onClick={handelButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign up now." : "Alraedy a registered?Sign In now."}</p>
      </form>
    </div>
  );
}

export default Login
