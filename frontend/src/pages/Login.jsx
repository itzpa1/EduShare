import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import OtherLogin from '../components/OtherBtn/OtherLogin';


const Login = () => {
  return (
    <div className='logIn h-[70vh] w-full my-4 flex items-center justify-center'>
      <div className="container relative flex w-[50%] h-[90%] bg-blue-600/30 shadow-lg shadow-black/20 rounded-lg overflow-hidden ">
        <img className='absolute top-0 left-0 h-full z-0 object-cover ' src={assets.SignUpBG} alt="" />
        <div className="greetBox relative w-1/3 h-full flex items-center justify-center ">
          <h1 className='branding hassar absolute top-0 left-0 m-1 text-sm font-semibold '>Edu<span>Share.</span></h1>
          <div className="text-left leading-3 ">
            <h1 className='text-2xl leading-3 '>Welcome again to</h1>
            <p className='font-semibold text-lg '>Edushare</p>
          </div>
        </div>
        <div className="signUpBox z-10 px-12 py-10 shadow-md shadow-black/20 w-2/3 h-full rounded-lg flex flex-col ">
          <div className="title flex flex-col gap-1">
            <h1 className='text-2xl font-semibold '>Log In</h1>
            <p className='text-xs '>Login to access, save & read books.</p>
          </div>

          <form className="form my-4 flex flex-col gap-2 items-start w-full">
            <div className="flex flex-col gap-2 items-center w-full">
              <input type="text" placeholder='Username or Email' className="username w-full" />
              <input type="password" className="password w-full" placeholder='Password' />
            </div>
            <input type="submit" className="submitBtn w-full" value={"Log In"} />
          </form>
          <div className="loginBtn w-full text-center">
              <h1 className='text-xs'>Don't have an account? <Link to={"/SignUp"} className='font-semibold '>Register</Link></h1>
          </div>
          <div className="or flex w-full gap-2 items-center justify-center my-1">
            <div className="hr w-1/4">
              <hr />
            </div>
            <p className='text-sm'>OR</p>
            <div className="hr w-1/4">
              <hr />
            </div>
          </div>
          <OtherLogin />
        </div>
      </div>

    </div>
  )
}

export default Login