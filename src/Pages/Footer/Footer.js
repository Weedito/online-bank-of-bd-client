import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="w-full mx-auto">
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
                    <Link to="/about" className="link link-hover">About US</Link>
                    <Link to="" className="link link-hover">Features</Link>
                    <Link to="" className="link link-hover">Feature Details</Link>
                    <Link to="" className="link link-hover">Money Transfer</Link>
                </div>
                <div>
                    <span className="footer-title">Help Center</span>
                    <Link className="link link-hover" to="/contactus">Contact US</Link>
                    <Link className="link link-hover" to="/help">Get Help</Link>
                    <Link className="link link-hover" to="/privacy">Privacy Policy</Link>
                    <Link className="link link-hover" to="/tarms">Terms & Conditions</Link>

                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a href='#!' className="link link-hover"><span className="text-green-700">Call US:</span> +880 1785748248</a>
                    <a href='#!' className="link link-hover"><span className="text-green-700">Address:</span> Mirpur, Dhaka, Bangladesh</a>
                    <a href='#!' className="link link-hover"><span className="text-green-700">Email US:</span> uniquecoders007@gmail.com</a>
                </div>
            </div>
            <div className="bg-gray-900 py-5 text-center px-3">
                <h3 className="text-sm md:text-base font-semibold text-green-700">© {year} Copyright, <span className="text-white">All rights reserved by</span> The Unique Coders</h3>
            </div>
        </footer>
    );
};

export default Footer;