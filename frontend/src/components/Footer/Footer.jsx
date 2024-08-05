import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { title } from './title';
import { IoMdGlobe } from 'react-icons/io';
import { LuMail, LuMapPin } from 'react-icons/lu';
import { FaAmazonPay, FaApplePay, FaCcVisa, FaFacebookF, FaGooglePay, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { SiPaytm, SiPhonepe } from 'react-icons/si';

const Footer = () => {

  return (
    <div className='footer w-full h-[40vh] p-5 flex gap-8 px-14 py-5 items-center justify-center'>
      <div className="left-footer w-2/3 border border-white flex flex-col items-center justify-between p-5 h-[90%] rounded-lg">
        <div className="upper w-full flex items-start justify-between ">
          <div className="contact_box flex flex-col gap-3 ">
            <Link className='flex items-center gap-2 text-base hover:underline transition-all duration-300'>
              <IoMdGlobe />
              <h1 className='font-semibold '>Edu<span>Share.</span></h1>
            </Link>
            <Link className='flex items-center gap-2 text-xs font-medium'>
              <LuMapPin />
              South West Delhi, Delhi
            </Link>
            <Link className='flex items-center gap-2 text-xs font-medium'>
              <LuMail />
              contactus@edushare.in
            </Link>


          </div>

          <div className="aboutus_box flex flex-col gap-1 ">
            <h1 className='text-base cursor-pointer font-semibold'>About Us</h1>
            {title.aboutus.map((items, i) => (
              <Link to={items.link} className='text-xs font-medium' key={i}>
                {items.title}{" "}
              </Link>
            ))}
          </div>
          <div className="catalog_box flex flex-col gap-1 ">
            <h1 className='text-base cursor-pointer font-semibold'>Categories</h1>
            {title.categories.map((items, i) => (
              <Link to={items.link} className='text-xs font-medium' key={i}>
                {items.title}{" "}
              </Link>
            ))}
          </div>
          <div className="quickhelp_box flex flex-col gap-1 ">
            <h1 className='text-base cursor-pointer font-semibold '>Quick Help</h1>
            {title.quickhelp.map((items, i) => (
              <Link to={items.link} className='text-xs font-medium' key={i}>
                {items.title}{" "}
              </Link>
            ))}
          </div>
        </div>
        <div className="social_icons w-full my-3 flex gap-4">
          <Link className='px-3 bg-white py-3 rounded-full hover:bg-slate-500/70 hover:text-white transition-all duration-300 ' title='facebok/edushare'><FaFacebookF /></Link>
          <Link className='px-3 bg-white py-3 rounded-full hover:bg-slate-500/70 hover:text-white transition-all duration-300 ' title='instagram/@edushare'><FaInstagram /></Link>
          <Link className='px-3 bg-white py-3 rounded-full hover:bg-slate-500/70 hover:text-white transition-all duration-300 ' title='twitter/edushare'><FaTwitter /></Link>
          <Link className='px-3 bg-white py-3 rounded-full hover:bg-slate-500/70 hover:text-white transition-all duration-300 ' title='youtube/@edushare'><FaYoutube /></Link>
        </div>
        <div className="lower h-5 w-full flex justify-between items-center text-xs font-normal ">
          <p>&copy; 2024 Copyright. The Readers All rights reserved.</p>
          <p>Site By Tech Titans</p>
        </div>
      </div>
      <div className="right-footer w-1/3 h-[90] flex flex-col gap-4">
        <div className="subscribe_box relative h-2/3 w-full py-7 px-4 border border-white flex flex-col items-center rounded-md">
          <h1 className='mb-7 text-2xl font-medium'>Subscribe to our newsletter!</h1>
          <img className='absolute h-[120px] -bottom-4 -left-8 ' src={assets.Girl_reading} alt="girl_reading" />
          <div className="input_box flex justify-between items-center gap-2 w-full ">
            <input className='border border-white w-3/4 pl-12 py-1 text-white bg-transparent text-center font-normal outline-none placeholder:text-white bg-blue-400 text-base rounded-md' type="text" placeholder='Enter your email' />
            <button className='border border-white w-1/4 px-3 py-1 text-blue-400 outline-none font-medium bg-white text-base rounded-md poppins'>Submit</button>
          </div>
        </div>
        <div className="payment_box border border-white flex justify-evenly items-center p-4 w-full rounded-md h-1/3">
          <div className="pay py-1 px-2 bg-white rounded text-xl">
            <FaCcVisa />
          </div>
          <div className="pay py-1 px-2 bg-white rounded text-xl">
          <FaAmazonPay />
          </div>
          <div className="pay py-1 px-2 bg-white rounded text-sm font-medium">
          <h1>COD</h1>
          </div>
          <div className="pay py-1 px-2 bg-white rounded text-xl">
          <FaGooglePay />
          </div>
          <div className="pay py-1 px-2 bg-white rounded text-xl">
          <SiPaytm />
          </div>
          <div className="pay py-1 px-2 bg-white rounded text-xl">
          <SiPhonepe />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer