import React from 'react';
import AboutCounter from './AboutCounter';
import AboutTopSection from './AboutTopSection';
import Milestone from './Milestone';

const About = () => {
    return (
        <div>
            <AboutTopSection/>
            <AboutCounter/>
            <Milestone/>
        </div>
    );
};

export default About;