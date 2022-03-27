import React from "react";
import { Announcements } from "../../components/elements";
import {} from "../../components/layouts";
import { Categories } from "../../components/modules";
import {
    Navbar,
    Slider,
    Newsletter,
    NewArrivalCategory,
    Footer,
} from "../../components/templates";

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
    );
};

export default Home;
