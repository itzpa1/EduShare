import React, { useEffect, useState } from 'react';
import axios from "axios";
import BookCard from '../BookCard/BookCard';
import Loader from '../Loader/Loader';
import { assets } from '../../assets/assets'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RecentlyAdded = () => {
    const [Data, setData] = useState();
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`${window.location.origin}/api/v1/get-recent-book`);
            setData(response.data.data);
        };
        fetch();
    }, []);

    return (
        <div className='recentAdded my-8 w-full px-6'>
            <div className="title relative flex w-full h-auto items-center justify-between gap-4">
                <h1 className="text-3xl font-semibold">Featured Books</h1>
                <div className='w-[80%] h-full'>
                    <hr className='border-none h-[2px]' />
                </div>
                <img className='absolute h-[80px] -top-6 -right-4 scale-x-[-1] ' src={assets.reading_boy} alt="girl_reading" />
            </div>
            <div className="my-8 grid grid-1 sm:grid-cols-4 md:grid-cols-7 gap-4 ">
                <BookCard />
                <Link to={`/all-books`} className="view_all relative w-[200px] shadow-sm flex items-center justify-center rounded-lg">
                    <h1 className='text-center text-xl font-semibold leading-4'>View All <br />
                    Books</h1>
                </Link>
            </div>
        </div>
    )
}

export default RecentlyAdded