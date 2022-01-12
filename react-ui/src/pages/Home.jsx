import React from 'react';
import Announcements from '../components/Announcements';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import NewArrivalCategory from '../components/NewArrivalCategory';

const Home = () => {
    return (
        <React.Fragment>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
            <NewArrivalCategory />
        </React.Fragment>
    )
}

export default Home;
