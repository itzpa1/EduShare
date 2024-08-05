import React from 'react';
import { assets } from '../../assets/assets';
import BlogCards from '../BlogCards/BlogCards';
import { Link } from 'react-router-dom';
import { data } from './data';

const LatestBlogs = () => {
    return (
        <div className='latestBlogs my-8 w-full px-6'>
            <div className="title relative flex w-full h-auto items-center justify-between gap-4">
                <h1 className="text-3xl font-semibold">Latest Blogs</h1>
                <div className='w-[80%] h-full'>
                    <hr className='border-none h-[2px]' />
                </div>
                <img className='absolute h-[80px] -top-6 -right-4 scale-x-[-1] ' src={assets.Girl_2} alt="girl_reading" />
            </div>
            <div className="my-8 grid grid-1 sm:grid-cols-4 md:grid-cols-4 gap-4 ">
                <BlogCards />
                <Link to={"/coming-soon"} className="view_all w-[360px] h-[400px] shadow-sm flex place-content-center items-center rounded-lg">
                    <h1 className='text-center text-xl font-semibold leading-4'>View All <br />
                        Blogs</h1>
                </Link >
            </div>
        </div>
    )
}

export default LatestBlogs