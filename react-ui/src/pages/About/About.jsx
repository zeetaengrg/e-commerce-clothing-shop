import React from 'react';
import { Announcements, AboutCompany, Newsletter } from '../../components/elements';
import { Footer, Navbar } from '../../components/layouts';

const About = () => {
    return (
        <React.Fragment>
            <Announcements />
            <Navbar />
            <AboutCompany />
            <Newsletter />
            <Footer />
        </React.Fragment>
    )
}

export default About;