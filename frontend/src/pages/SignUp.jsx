import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import OtherLogin from '../components/OtherBtn/OtherLogin';


const SignUp = () => {
  return (
    <div className='signUp h-[70vh] w-full my-4 flex items-center justify-center'>
      <div className="container relative flex w-[50%] h-[90%] shadow-lg shadow-black/20 rounded-lg overflow-hidden ">
        <img className='absolute top-0 left-0 h-full z-0 object-cover ' src={assets.SignUpBG} alt="" />
        <div className="greetBox relative w-1/3 h-full flex items-center justify-center ">
          <h1 className='branding hassar absolute top-0 left-0 m-1 text-sm font-semibold '>Edu<span>Share.</span></h1>
          <div className="text-left leading-3 ">
            <h1 className='text-2xl leading-3 '>Welcome to</h1>
            <p className='font-semibold text-lg '>Edushare</p>
          </div>
        </div>
        <div className="signUpBox z-10 px-12 py-10 w-2/3 h-full rounded-lg flex flex-col ">
          <div className="title flex flex-col gap-1">
            <h1 className='text-2xl font-semibold '>Sign Up</h1>
            <p className='text-xs '>Create account to access, save & read books.</p>
          </div>

          <form className="form my-4 flex flex-col gap-2 items-start w-full">
            <div className="name flex gap-2 items-center justify-between">
              <input type="text" className='w-1/2' placeholder='First Name' />
              <input type="text" className='w-1/2' placeholder='Last Name' />
            </div>
            <div className="flex gap-2 items-center justify-between w-full">
              <input type="text" placeholder='Username' className="username w-1/2" />
              <select className='px-2 py-1 w-1/2 ' name="gender" id="gender">
                <option value="" selected disabled>Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
                <option value="0">Others</option>
              </select>
            </div>
            <input className='w-full' type="text" placeholder='Email Id' />
            <div className="flex gap-2 items-center justify-between w-full">
              <input type="password" className="password" placeholder='Password' />
              <input type="password" className="cnfPassword" placeholder='Confirm Password' />
            </div>
            <div className="consent my-1 flex items-center text-xs gap-2">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <h1>I've read and agree with <Link>Terms of Service </Link> and our <Link>Privacy Ploicy</Link>.</h1>
            </div>
            <input type="submit" className="submitBtn w-full" value={"Sign Up"} />
          </form>
          <div className="loginBtn w-full text-center">
            <h1 className='text-xs'>Already have an account? <Link to={"/LogIn"} className='font-semibold '>Log In</Link></h1>
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

export default SignUp