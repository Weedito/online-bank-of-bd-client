import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <div style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-iU1bgrA5n_3bQFx4UHi50nOvLkF0gNlpg&usqp=CAU')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className='max-w-7xl mx-auto'>

            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse gap-x-16">
                    <div className=''>
                        {/* Map */}

                        <iframe title='map' style={{ width: "400px" }} className='Ig:w-[200px] h-[300px] mx-auto' id="gmap_canvas" src="https://maps.google.com/maps?q=maniknagarbangladesh&t=&z=13&ie=UTF8& iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>

                    {/* From */}

                    <div class="flex-shrink-0 w-full max-w-sm bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <h2 className='text-3xl text-start font-bold'>Contact Us</h2>
                                <div className='pr-52 my-2'><span className='section-title'></span></div>
                                <p className='text-2xs text-start mt-2'>Reach out to us for any inquiry</p>
                                <label class="label">
                                    <span class="label-text mt-2">Your Name</span>
                                </label>
                                <input type="text" placeholder="name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea class="textarea textarea-bordered" placeholder="Message"></textarea>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto my-5 p-5'>
                <div className='mt-5 mx-auto'>
                    <div class="card w-96 h-24 bg-base-100">
                        <div className='flex mt-5 px-10'>
                            <div>
                                <FontAwesomeIcon className='mt-3 text-3xl mx-5' icon={faMapLocation} />
                            </div>
                            <div>
                                <h2 className='text-xl text-start'>Location:</h2>
                                <p className='text-2xs text-gray-400'>Mirpur, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mx-auto'>
                    <div class="card w-96 h-24 bg-base-100">
                        <div className='flex mt-5 px-10'>
                            <div>
                                <FontAwesomeIcon className='mt-3 text-3xl mx-5' icon={faMessage} />
                            </div>
                            <div>
                                <h2 className='text-xl text-start'>Email:</h2>
                                <p className='text-2xs text-gray-400'>uniquecoders007@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mx-auto'>
                    <div class="card w-96 h-24 bg-base-100">
                        <div className='flex mt-5 px-10'>
                            <div>
                                <FontAwesomeIcon className='mt-3 text-3xl mx-5' icon={faPhone} />
                            </div>
                            <div>
                                <h2 className='text-xl text-start'>Phone:</h2>
                                <p className='text-2xs text-gray-400'>Call US: +880 1785748248</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;