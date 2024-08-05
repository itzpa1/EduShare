import React from 'react'
import { Link } from 'react-router-dom'

const BlogCards = ({data}) => {
    return (
        <>
            <div className="blog_card relative w-[360px] h-[400px] shadow-sm flex flex-col items-center pt-5 rounded-lg">
                <div className="imgBox w-[90%] h-[50%] overflow-hidden">
                    <img className='w-full h-full  rounded-md object-cover' src="https://th.bing.com/th/id/OIP.N_P3F02QwF7G3qaT51mgvQHaEK?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="blog_cover" />
                </div>
                <div className="low flex flex-col w-[80%] justify-between items-center mt-4">
                    <p className="blog_metaInfo text-sm">01-01-2024 / 01 comment</p>
                    <h1 className="title font-semibold">
                        Why reading is important for us?
                    </h1>
                    <div className='w-full my-2 flex place-content-center'>
                    <hr className='w-[60%]' />
                    </div>
                    <p className='desc text-sm text-justify'>
                        Reading cultivates imagination, fosters learning and nurtures
                        empathy in us, laying a foundation...
                    </p>
                        <Link className='text-xs mt-4' to={'/coming-soon'}>Continue reading...</Link>
                </div>

            </div >
        </>
    )
}

export default BlogCards