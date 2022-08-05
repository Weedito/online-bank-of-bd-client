import React from 'react';

const Map = () => {
    return (
        <div >
            <div style={{
                backgroundImage: "url(https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/repeat.png)"
            }} className=' bg-cover bg-no-repeat text-center pt-10 pb-40 z-0'>
                <h5 className=' text-lg uppercase font-bold text-[#015ABD]'>MAPS & DIRECTIONS</h5>

                <div className='w-[50px] h-[2px] bg-[#015ABD] relative my-4 mx-auto'>
                    <div className='radiant bg-[#FFFFFF]'></div>
                </div>

                <h2 className=' text-4xl font-semibold my-4'>Find Our Location In Town</h2>
                <p className=' lg:w-[420px] mx-auto'>Search for our exact location and office address through this exclusive map listing provided below.</p>
            </div>
            
            <div className='z-40 mt-[-100px]'>
                <iframe title='map' className='w-full lg:w-[1300px] h-[300px] mx-auto' id="gmap_canvas" src="https://maps.google.com/maps?q=%20maniknagar%20%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
    );
};

export default Map;