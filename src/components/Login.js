import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData, checkValidDataSignUp} from '../utils/validate';

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);  // Here i have careated the this state variable to check weather the user is Signed or not
  const [errorMessage , setErrorMessage] = useState(null); // Here state variable to store the error message after checking the validation

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
        backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fit/w_828,h_466,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')`,
      }}
    >
      <Header />
      <form onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
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
