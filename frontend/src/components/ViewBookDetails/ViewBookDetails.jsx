import React, { useEffect, useState } from 'react';
import axios from "axios";
import BookCard from '../BookCard/BookCard';
import Loader from '../Loader/Loader';
import { Link, useParams } from 'react-router-dom'
import { FaFacebookF, FaHeart, FaInstagram, FaRegHeart, FaShoppingCart, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import {assets} from '../../assets/assets';


const ViewBookDetails = () => {
    const { id } = useParams();
    const [Data, setData] = useState();
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`${window.location.origin}/api/v1/get-book-by-id/${id}`);
            console.log(response)

            setData(response.data.data);
        };
        fetch();
    }, []);
    return (
        <div className='viewBookInfo my-4 p-8  w-full h-[70vh] flex gap-5 '>
            <div className="bookImg relative flex-col w-1/6 h-full rounded-lg flex justify-center items-center ">
                <div className="heart top-4 text-xl hidden right-4 absolute text-red-700 p-1 rounded">
                    {/* <FaRegHeart /> */}
                    <FaHeart />
                </div>
                <img className='border-4 rounded-lg w-[80%]' src="https://th.bing.com/th/id/OIP.uSobop1ArnZYR-BSfuO1rgHaLq?w=182&h=286&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="bok_cover" />
                <div className="purchase w-[80%] flex justify-between items-center mt-4">
                    <div className="price flex font-medium items-center text-lg">
                        Rs
                        <h1 className='font-normal px-1 text-xs line-through'>00</h1>
                        <h1 className=''>00</h1>
                    </div>
                    <div className="cartBtn flex items-center gap-1 hover:font-semibold py-1 px-2 rounded">
                        <FaShoppingCart className='text-lg' />
                        <p className='text-bas'>Add</p>
                    </div>
                </div>
            </div>
            <div className="bookInfo relative w-4/6 py-4 px-8 h-full rounded-lg">
                <div className="flex">
                    <h1 className="bookName text-3xl font-semibold ">Book Name</h1>
                </div>
                <div className="bookMeta flex gap-4 my-2 items-center">
                    <h1 className='form px-3 py-1 text-xs rounded-sm'>PDF</h1>
                    <h1 className='lang px-3 py-1 text-xs rounded-sm uppercase'>ENglish</h1>
                </div>
                <div className="desc w-5/6">
                    <p className='text-base text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quis, saepe ipsa error ipsum culpa veritatis sequi nemo quia similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rerum reiciendis ratione inventore ea ipsam ad quas vero quis ducimus officiis neque perferendis commodi labore maiores, nisi ab id eum? Ipsam labore quo ut autem quas, necessitatibus porro quibusdam at.</p>
                </div>
                <div className="publication flex items-center mt-4 text-xs justify-between w-5/6">
                    <p className="publishDate">Published on <span>01-01-2024</span></p>
                    <p className="author">-by <span>Author</span></p>
                </div>
                <div className="social_icons w-full mt-8 flex gap-4">
                    <Link className='px-3 bg-white py-3 rounded-full hover:bg-slate-500/70 hover:text-white transition-all duration-300 ' title='facebok/edushare'><FaFacebookF /></Link>
                    <Link className='px-3 bg-white py-3 rounded-full hover:bg-slate-500/70 hover:text-white transition-all duration-300 ' title='instagram/@edushare'><FaInstagram /></Link>
                    <Link className='px-3 bg-white py-3 rounded-full hover:bg-slate-500/70 hover:text-white transition-all duration-300 ' title='twitter/edushare'><FaTwitter /></Link>
                    <Link className='px-3 bg-white py-3 rounded-full hover:bg-slate-500/70 hover:text-white transition-all duration-300 ' title='youtube/@edushare'><FaWhatsapp /></Link>
                </div>
                <img className='absolute -bottom-4 -right-10 h-[120px] ' src={assets.Books} alt="" />
            </div>
        </div>
    )
}

export default ViewBookDetails