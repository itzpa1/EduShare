import React from 'react';
import { assets } from '../../assets/assets';

const OurClients = () => {
  return (
    <div className='ourClients my-8 w-full px-6'>
            <div className="title relative flex w-full h-auto items-center justify-between gap-4">
                <h1 className="text-3xl font-semibold">Latest Blogs</h1>
                <div className='w-[80%] h-full'>
                    <hr className='border-none h-[2px]' />
                </div>
                <img className='absolute h-[80px] -top-6 -right-4 scale-x-[-1] ' src={assets.Girl_reading} alt="girl_reading" />
            </div>
        </div>
  )
}

export default OurClients