import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="hero h-[65vh] w-full flex flex-col px-6 my-4 bg-white">
      <div className="flex w-full h-full gap-4">

        <div className="carousel w-3/4 bg-red-400 h-full rounded-lg"></div>


        <div className="best-seller w-1/4 bg-black h-full rounded-lg">
          <div className="book_box h-full w-full flex flex-col items-center justify-center text-white">
            <div className="seller_title text-center pb-4">
              <h1 className='text-2xl font-semibold'>Best Seller</h1>
              <p className='text-xs'>Raised sales these weeks</p>
            </div>
            <div className="book_img w-1/2 h-1/2 rounded-lg overflow-hidden">
              <img className='w-full h-full object-cover' src="https://th.bing.com/th/id/OIP.uSobop1ArnZYR-BSfuO1rgHaLq?w=182&h=286&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="book-img" />
            </div>
            <div className="book_info mt-4">
              <h1 className="book_title text-lg font-semibold hassar">Book Name</h1>
              <p className="author text-center text-sm font-medium my-2">Unknown</p>
            </div>
            <Link to={`/view-book-details/`} className="buy_btn rounded-md flex justify-between px-4 w-1/2 bg-white py-2 text-black">
              <p className='font-semibold'>Buy</p>
              <div className="price flex font-bold items-center text-xl">
                Rs
                <h1 className='oPrice font-normal px-1 text-xs line-through'>00</h1>
                <h1 className='dPrice'>00</h1>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Home