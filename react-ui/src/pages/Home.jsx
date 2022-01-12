import React from 'react';
import Announcements from '../components/Announcements';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import NewArrivalCategory from '../components/NewArrivalCategory';
import Newsletter from '../components/Newsletter';
import FooterSection from '../components/FooterSection';

const Home = () => {
    return (
        <React.Fragment>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
            <NewArrivalCategory />
            <Newsletter />
            <FooterSection />
        </React.Fragment>
    )
}

export default Home;
