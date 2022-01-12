import React from 'react';
import Announcements from '../components/Announcements';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import NewArrivals from '../components/NewArrivals';

const Home = () => {
    return (
        <React.Fragment>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
            <NewArrivals />
        </React.Fragment>
    )
}

export default Home;
