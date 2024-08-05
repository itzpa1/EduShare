import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { FaGripLines, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'


const Navbar = () => {

  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];

  const [MobileNav, setMobileNav] = useState("hidden")

  return (
    <>
      <nav className='navbar w-full h-[15vh] shadow-md px-6 py-2 flex items-center justify-between'>
        <Link to="/" className="logo">
          <img className='h-[60px] ' src={assets.header_light} alt="header_logo" />
        </Link>
        <div className="nav_links flex flex-col gap-4 ">
          <div className="links flex gap-10">
            {links.map((items, i) => (
              <Link to={items.link} className='font-medium text-lg' key={i}>
                {items.title}{" "}
              </Link>
            ))}
          </div>
          <div className="search_box relative h-[40px] flex items-center justify-between px-5 w-full rounded border">
            <img className='absolute -top-6 -left-12 h-[80px]' src={assets.Book2} alt="" />
            <input className='font-medium h-full w-full outline-none' type="text" placeholder='Search books..'/>
            <FaSearch className=' h-full ' />
          </div>
        </div>
        <div className="auth_box flex justify-center gap-4">
          <Link to="/LogIn" className="loginBtn shadow-md shadow-black/15 font-semibold px-3 py-2 rounded ">
            Log In
          </Link>
          <Link to="/SignUp" className="signUpBtn shadow-md shadow-black/15 flex items-center gap-1 px-3 py-2 rounded ">
            <FaUser />
            <p className='font-medium '>Sign Up</p>
          </Link>
        </div>
      </nav>

    </>
  )
}

export default Navbar