import React from 'react';
import Announcements from '../../components/Announcements/Announcements';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import NewArrivalCategory from '../../components/Categories/NewArrivalCategory';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
            <NewArrivalCategory />
            <Newsletter />
            <Footer />
        </React.Fragment>
    )
}

export default Home;
