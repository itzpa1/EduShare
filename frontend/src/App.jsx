import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './pages/Login'
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import AllBooks from './pages/AllBooks'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import ComingSoon from './pages/ComingSoon'
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails'

const App = () => {
  return (
      <div className='select-none'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-books" element={<AllBooks />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/LogIn" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="view-book-details/" element={<ViewBookDetails />} />
          </Routes>
          <Footer />
        </Router>
      </div>
  )
}

export default App