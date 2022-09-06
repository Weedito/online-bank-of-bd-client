import React from 'react';
import PageTitle from '../../PageTitle/PageTitle';
import AllShareholders from './AllShareholders';

const Shareholders = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {/* title */}

            <PageTitle title="Shareholders"></PageTitle>

            {/* end */}


            <div className="bg-[url('https://i.ibb.co/Sws7ND6/board-thumbnail.jpg')] w-full h-52 md:h-80 bg-cover">
                <h3 className="text-3xl md:text-5xl text-white font-bold font-sans items-center h-full flex justify-center">Shareholders</h3>
            </div>
            <div className="py-10">
                <AllShareholders />
            </div>
        </div>
    );
};

export default Shareholders;