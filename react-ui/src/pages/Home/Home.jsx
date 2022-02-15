import React from 'react';
import Announcements from '../../components/elements/Announcements/Announcements';
import Navbar from '../../components/layouts/Navbar/Navbar';
import Slider from '../../components/modules/Slider/Slider';
import Categories from '../../components/modules/Categories/Categories';
import NewArrivalCategory from '../../components/modules/Categories/NewArrivalCategory/NewArrivalCategory';
import Newsletter from '../../components/elements/Newsletter/Newsletter';
import Footer from '../../components/layouts/Footer/Footer';

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
