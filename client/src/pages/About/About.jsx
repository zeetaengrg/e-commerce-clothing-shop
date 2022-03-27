import React from "react";
import { Announcements, AboutCompany } from "../../components/elements";
import { Navbar, Newsletter, Footer } from "../../components/templates";

const About = () => {
    return (
        <React.Fragment>
            <Announcements />
            <Navbar />
            <AboutCompany />
            <Newsletter />
            <Footer />
        </React.Fragment>
    );
};

export default About;
