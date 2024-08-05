import React from 'react'
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookCard = ({ data }) => {

    return (
        <>
            <Link to={`/view-book-details/`} className="book_card relative w-[200px] shadow-sm flex flex-col items-center pt-5 rounded-lg">
                <div className="heart top-4 text-xl hidden right-4 absolute text-red-700 p-1 rounded">
                    {/* <FaRegHeart /> */}
                    <FaHeart />
                </div>
                <h1 className="book_format top-4 text-xs font-semibold -left-1 absolute px-2 py-1 rounded">
                    PDF
                </h1>
                <div className="imgBox w-[80%] ">
                    <img className='w-full h-full rounded-md object-cover' src="https://th.bing.com/th/id/OIP.uSobop1ArnZYR-BSfuO1rgHaLq?w=182&h=286&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="book_cover" />
                </div>
                <div className="low flex w-[80%] justify-between items-start mt-2">
                    <div className="bookInfo flex flex-col gap-[2px] items-start w-[80%] mt-2">
                        <p className="authorName text-xs font-medium">Author</p>
                        <h1 className='bookName text-sm font-semibold'>Book Name</h1>
                        <div className="price flex font-medium items-center text-sm">
                            Rs
                            <h1 className='font-normal px-1 text-xs line-through'>00</h1>
                            <h1 className=''>00</h1>
                        </div>
                    </div>
                    <div className="cartBtn text-xl py-1 px-2 rounded">
                        <FaShoppingCart />
                    </div>
                </div>

            </Link>


            {/* <Link to={`/view-book-details/${data._id}`}>
                <div className="bg-zinc-800 w-[240px] rounded p-4 flex-col">
                    <div className="bg-zinc-900 rounded flex justify-center items-center">
                        <img src={data.url} className='h-[25vh' alt="bookCover" />
                    </div>
                    <h2 className='mt-4'>{data.title}</h2>
                    <div className="book_info flex w-full justify-between items-center">
                        <p className='text-medium font-medium text-white'>{data.author}</p>
                        <p className='text-medium font-medium text-white'>Rs. {data.price}</p>
                    </div>
                </div>
            </Link> */}
        </>
    )
}

export default BookCard