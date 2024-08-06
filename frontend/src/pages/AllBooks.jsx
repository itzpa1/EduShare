import React, { useEffect, useState } from 'react';
import axios from "axios";
import BookCard from '../components/BookCard/BookCard';
import Loader from '../components/Loader/Loader';
import { Link } from 'react-router-dom';


const AllBooks = () => {

  return (
    <div className="allBooks my-4 px-10 w-full">
      <div className="my-8 grid grid-1 sm:grid-cols-4 md:grid-cols-7 gap-4 ">
        <BookCard />
        <BookCard />
        <Link to={`/all-books`} className="view_all relative w-[200px] shadow-sm flex items-center justify-center rounded-lg">
          <h1 className='text-center text-xl font-semibold leading-4'>View All <br />
            Books</h1>
        </Link>
      </div>
    </div>
  )
}

export default AllBooks