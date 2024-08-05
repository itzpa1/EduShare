import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div className="contactUs relative flex flex-col gap2 w-full h-[90vh] items-center ">
            <div className="header flex items-center justify-center w-full h-[20vh]">
                <h1 className='text-4xl font-semibold '>Contact Us</h1>
            </div>
            <div className="container w-[60%] my-10 rounded-lg overflow-hidden flex justify-center items-center ">
                <div className="mapBox w-2/4 h-full">
                    <iframe className='w-full h-full object-cover' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224222.69992976377!2d76.8077106993041!3d28.585383059300213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a9af30ebbc5%3A0xcfd2bc5a1783218!2sSouth%20West%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1722824509555!5m2!1sen!2sin" loading="lazy" ></iframe>
                </div>
                <div className="messageBox px-12 py-10 rounded-lg flex flex-col w-2/4 h-full gap-2">
                    <div className="title flex flex-col gap-1">
                        <h1 className='text-2xl font-semibold '>Get in Touch</h1>
                        <p className='text-xs '>We'd love to hear from you. Please fill out this form.</p>
                    </div>
                    <div className="name flex gap-2 items-center w-full">
                        <input type="text" className="firstname w-1/2 rounded" placeholder='First Name' />
                        <input type="text" className="lastname w-1/2 rounded" placeholder='Last Name' />
                    </div>
                    <input type="email" className='mail w-full rounded' placeholder='Enter Email' />
                    <textarea name="message" id="" placeholder='Write message ...' className='p-2 text-left' rows={20}>
                    </textarea>
                    <input type="submit" className='w-full submitBtn' value={"Send Message"} />
                </div>

            </div>
        </div>
    )
}

export default ContactUs