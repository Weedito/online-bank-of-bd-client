import React from 'react';
import AboutBank from './AboutBank';
import AboutCounter from './AboutCounter';
import AboutTopSection from './AboutTopSection';
import Milestone from './Milestone';

const About = () => {
    return (
        <div>
            <AboutTopSection/>
            <AboutBank/>
            <AboutCounter/>
            <Milestone/>
        </div>
    );
};

export default About;