import React from 'react';
import ECDetails from './ECDetails';

const ExecutiveCommittee = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="bg-[url('https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGV4ZWN1dGl2ZXxlbnwwfHwwfHw%3D&w=1000&q=80')] w-full bg-center h-52 md:h-80 bg-cover">
                <h3 className="text-3xl md:text-5xl text-white font-bold font-sans items-center h-full flex justify-center">Executive Committee</h3>
            </div>
            <div className="containet px-5 py-10">
                <ECDetails/>
            </div>
        </div>
    );
};

export default ExecutiveCommittee;