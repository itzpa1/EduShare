import React from 'react'
import { assets } from '../assets/assets'
import { aboutUsers } from '../components/AboutUs/aboutUsers'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { MdMail } from 'react-icons/md';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css"
import ContactUs from '../components/ContactUs/ContactUs';

const AboutUs = () => {

  return (
    <div className='aboutUs mb-4 w-full flex flex-col ' >
      <div className="header h-[20vh] w-full flex justify-center items-center">
        <h1 className='text-4xl font-semibold '>About Us</h1>
      </div>
      <div className="ourGoal flex justify-between w-full h-[300px] px-8 py-10 ">
        <div className="desc w-1/2 ">
          <h1 className='text-xl font-semibold'>Our Goals</h1>
          <p className='text-sm text-justify leading-6'><span className='font-medium underline '>EduShare.</span> is a digital library offering diverse educational resources to students,
            addressing financial and geographic barriers. Core features include easy search, AL-
            driven recommendations, geo-tagging, and user-friendly book exchange tools.
            Additional features focus on content localization and efficient performance. By
            enabling book sharing and community-driven learning. EduShare promotes
            sustainability and lifelong learning. Partnerships with publishers, educational
            institutions, and NGOs amplify its impact. The platform supports personalized
            learning, reduces educational disparities, and fosters continuous intellectual
            development, benefiting society by advancing SDG goals such as Quality
            Education, Reduced Inequalities, and Sustainable Cities and Communities.</p>
        </div>
        <div className="imgBox relative w-1/2 h-full flex items-center justify-center ">
          <img className='absolute book1 -top-0 left-1 h-[160px] z-10 ' src={assets.Flying_boy} alt="" />
          <img className='absolute book1 -top-1/2 left-1/2 h-[80px] z-10 ' src={assets.Online_Book} alt="" />
          <img className='absolute book1 -top-0 right-1/4 h-[80px] z-10 ' src={assets.Book2} alt="" />
          <img className='absolute book1 bottom-2 right-10 h-[80px] z-10 ' src={assets.Ebook} alt="" />
          <img className='absolute book1 -bottom-0 left-1/4 h-[80px] z-10 ' src={assets.Books} alt="" />
          <img className='h-[400px] z-0 ' src={assets.aboutImg} alt="" />
        </div>

      </div>
      <div className="team px-8 my-4 w-full h-[40vh] ">
        <h1 className='text-xl font-semibold'>Team Members</h1>
        <div className="members h-full flex justify-evenly my-2 w-full ">
          {aboutUsers.users.map((items, i) => (
            <div className="user flex flex-col items-center h-full px-4 w-[200px] " key={i}>
              <div className="imgBox w-[120px] h-[120px] flex items-center justify-center rounded-full my-2 border">
                <img className='w-[90%] h-[90%] rounded-full ' src={items.dpUrl} alt="user_dp" />
              </div>
              <div className="name text-center ">
                <h1 className='text-lg font-medium  leading-4'>{items.name}</h1>
                <p className='text-sm my-1 '>{items.role}</p>
                <hr />
                <p className='text-xs '>Hover to Connect</p>
              </div>
              <div className="social flex opacity-0 gap-4 my-4 ">
                <Link target='_blank' to={`${items.linkedin}`} className='text-sm px-2 py-2 rounded-full '><FaLinkedinIn /></Link>
                <Link target='_blank' to={`${items.github}`} className='text-sm px-2 py-2 rounded-full '><FaGithub /></Link>
                <Link to={"#"} className='text-sm px-2 py-2 rounded-full '><MdMail /></Link>
                <ToastContainer />
              </div>
            </div>
          ))};
        </div>
      </div>
      <ContactUs />
    </div>
  )
}

export default AboutUs