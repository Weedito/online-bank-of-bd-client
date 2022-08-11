import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Fade, Zoom } from 'react-reveal';
import Flash from 'react-reveal/Flash';
import RubberBand from 'react-reveal/RubberBand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



const ContactUs = () => {

    const [pending, setPending] = useState(false);
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        setPending(true);

        emailjs.sendForm('service_ppza7vk', 'template_bekixd9', form.current, 'aTGNKBF65tVThxQE0v6XN')
            .then((result) => {
                Swal("Successfull", "You Send an Email!", "success");
                e.target.reset();
                setPending(false);
            }, (error) => {
                Swal("OPPSS...", "Email not Send!", "error");
                setPending(false);
            });
    };

    return (
        <section className='section bg-slate-200 py-20 px-5' id='contact'>

            <RubberBand>
                <div className='flex flex-col items-center text-center'>
                    <div className="title">
                        <h2 className="section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl ">
                            Contact <span className="text-green-700">US</span>
                        </h2>
                    </div>
                </div>
            </RubberBand>
            <div className='flex flex-col w-full gap-5 lg:gap-8 lg:flex-row'  >
                <div className='flex flex-1 items-center flex-col lg:flex-row w-full space-y-8 mx-auto my-12 lg:mb-0 lg:pt-2' >

                    <div className="flex flex-col lg:flex-row gap-4 w-full mx-auto">
                        <div className="flex flex-col mx-auto w-full gap-5 lg:w-2/6">
                            <div className='flex gap-3'>
                                <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <Flash>
                                    <div>
                                        <h4 className='font-body text-xl mb-1'>Have a question?</h4>
                                        <p className='mb-1 text-paragraph'>I am here to help you.</p>
                                        <p className='mb-1 text-accent'>+880-1636-090316</p>
                                        <p className='text-accent font-normal '>Email us at - <br /> uniquecoders007@gmail.com</p>
                                    </div>
                                </Flash>
                            </div>
                            <div className='flex gap-3'>
                                <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                                </div>
                                <Flash>
                                    <div>
                                        <h4 className='font-body text-xl mb-1'>Current Location</h4>
                                        <p className='mb-1 text-paragraph'>Uttara, Sector-7, Dhaka</p>
                                        <p className='text-accent font-normal '>Serving clients worldwide</p>
                                        <Fade left>
                                            <div className='flex justify-start py-3'>
                                                {/* Map */}

                                                <iframe title='map' className='w-full Ig:w-[180px] lg:h-[100px] rounded-md border mx-auto' id="gmap_canvas" src="https://maps.google.com/maps?q=uttarabangladesh&t=&z=13&ie=UTF8& iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                            </div>
                                        </Fade>
                                    </div>
                                </Flash>
                            </div>
                        </div>

                        <Zoom top>
                            <form ref={form} onSubmit={sendEmail} className='space-y-8 w-full mx-auto lg:w-3/6' >
                                <div className='flex gap-8'>
                                    <input required name='name' className='input w-full px-5' type='text' placeholder='Your name' />
                                    <input required name='email' className='input w-full px-5' type='email' placeholder='Your email' />
                                </div>
                                <div className="">
                                    <input required name='subject' className='input w-full px-5' type='text' placeholder='Subject' />
                                </div>
                                <div className="">
                                    <textarea required name='message' className='textarea w-full px-5 resize-none' placeholder='Your message'></textarea>
                                </div>
                                <input disabled={pending ? true : false} type='submit' value="Send Message" className='btn btn-lg bg-accent text-white hover:bg-secondary-hover' />
                            </form>
                        </Zoom>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactUs;