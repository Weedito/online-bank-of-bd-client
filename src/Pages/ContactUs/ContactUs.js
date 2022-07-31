import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <div
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/realistic-handset-concept_1284-34781.jpg?size=626&ext=jpg&ga=GA1.2.1544255835.1642770529')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <div className='my-0'>
                <h3 className="text-4xl font-bold text-black">Contact US...</h3>
                <h3 className='text-3xl mt-5 font-semibold text-black'>+88 01785-748248</h3>
                <p className='text-white mt-2'>Mon - Fri 10:00 AM - 08-00 PM BDT</p>
                <p className='text-sm text-teal-900 link mt-2.5'>uniquecoders007@gmail.com</p>
                <button class="btn btn-primary mt-8">Call Us <span className='pl-2'><FontAwesomeIcon icon={faPhone} /></span> </button>
            </div>

            <div class="divider mx-10"></div>

            <div className='mx-20'>
                <h3 className="text-4xl">Or Fill out this form, we'll quickly get back tou you</h3>

                <div class="form-control w-48">
                    <label class="label">
                        <span class="label-text">* Subject</span>
                    </label>
                    <input type="text" placeholder="Subject" class="input input-bordered" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12 gap-8">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">* Full Name</span>
                        </label>
                        <input type="text" placeholder="name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">* Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>

                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">* Account Number.</span>
                        </label>
                        <input type="text" placeholder="* Account Number." class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">* Phone Number</span>
                        </label>
                        <input type="number" placeholder="Number" class="input input-bordered" />
                    </div>
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">* Your Message</span>
                    </label>
                    <textarea class="textarea textarea-bordered w-80" placeholder="Your Message"></textarea>
                </div>

            </div>

            <input type="submit" value="Send Message" class="btn btn-primary my-5" />

        </div>
    );
};

export default ContactUs;