import React from 'react';
import ACOverview from './ACOverview';
import OVCards from './OVCards';
import TopOverview from './TopOverview';
import TotalBalance from './TotalBalance';
import TransacOverview from './TransacOverview';

const Overview = () => {
    return (
        <section className="w-full p-5">
            <TopOverview/>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-5 w-full mx-auto'>
                <div className="w-full lg:w-2/5 mx-auto">
                <TotalBalance/>
                <OVCards/>
                </div>
                <div className="w-full flex flex-col gap-3 lg:w-3/5 mx-auto">
                <ACOverview/>
                <TransacOverview/>
                </div>
            </div>
        </section>
    );
};

export default Overview;