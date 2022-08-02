import React from 'react';
import RiskMCDetails from './RiskMCDetails';

const RiskManagementCommittee = () => {
    return (
        <div>
            <div className="bg-[url('https://st2.depositphotos.com/1071909/10136/i/600/depositphotos_101363144-stock-photo-metaphor-of-business-solution.jpg')] w-full h-52 md:h-80 bg-cover">
                <h3 className="text-3xl md:text-5xl text-white font-bold font-sans items-center h-full flex justify-center">Risk Management Committee</h3>
            </div>
            <div className="containet px-5 py-10">
                <RiskMCDetails/>
            </div>
        </div>
    );
};

export default RiskManagementCommittee;