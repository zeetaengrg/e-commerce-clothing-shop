import React from 'react';
import { Announcements, Newsletter } from '../../components/elements';
import { Navbar, Footer } from '../../components/layouts'
import { Categories, Slider } from '../../components/modules';
import { NewArrivalCategory } from '../../components/modules/Categories';

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
