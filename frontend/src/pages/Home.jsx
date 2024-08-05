import React from 'react';
import Hero from '../components/Home/Hero';
import RecentlyAdded from '../components/Home/RecentlyAdded';
import LatestBlogs from '../components/Home/LatestBlogs';

const Home = () => {
  return (
    <div>
        < Hero />
        <RecentlyAdded />
        <LatestBlogs />
    </div>
  )
}

export default Home