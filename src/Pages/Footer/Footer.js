import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="footer p-10 bg-black text-neutral-content">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Loan</a>
                <a className="link link-hover">Online Money</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Bank of Bd</span>
                <a className="link link-hover">About us</a>   
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Details</a>
                <a className="link link-hover">Support</a>
            </div>
            <div>
                <span className="footer-title">Issues</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
                <a className="link link-hover">Advanced Systemcare</a>
                <a className="link link-hover text-xl text-primary">Your voice matters!</a>
            </div>
            <div className='flex'>
                <div>
                    <img className='h-10' src="data:image/png;base64,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" alt="" />
                </div>
                <div>
                    <p className="text-base mt-2">All copyright Online Bank Of BD @ {year}</p>

                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReu8fz7Jx_Za_fmVmN_QfitFgaiwfTPhqdKA&usqp=CAU" alt="" />
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;