import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="">
            <div className="footer p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left bg-slate-100 text-gray-700">
            <div className=''>
                <div>
                    <h2 className="font-semibold text-3xl text-left">
                        Online <span className="text-green-700">Bank BD</span>
                    </h2>
                    <p className="text-base mt-2">Provide better and faster service to the
                        customers by using the internet.</p>

                </div>
            </div>
            <div>
                <span className="footer-title">Quick Links</span>
                <a className="link link-hover">About US</a>
                <a className="link link-hover">Features</a>
                <a className="link link-hover">Feature Details</a>
                <a className="link link-hover">Money Transfer</a>
            </div>
            <div>
                <span className="footer-title">Help Center</span>
                <a className="link link-hover">Contact US</a>
                <a className="link link-hover">Get Help</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms & Conditions</a>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <a className="link link-hover"><span className="text-green-700">Call US:</span> +880 1785748248</a>
                <a className="link link-hover"><span className="text-green-700">Address:</span> Mirpur, Dhaka, Bangladesh</a>
                <a className="link link-hover"><span className="text-green-700">Email US:</span> uniquecoders007@gmail.com</a>
            </div>
            </div>
            <div className="bg-gray-900 py-5 px-3">
                <h3 className="text-sm md:text-base font-semibold text-green-700">© {year} Copyright, <span className="text-white">All rights reserved by</span> The Unique Coders</h3>
            </div>
        </footer>
    );
};

export default Footer;