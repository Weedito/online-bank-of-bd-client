import React from 'react';

const BoardOfDirectors = () => {
    return (
        <div className='bg-slate-100'>
            <h3 className="text-3xl font-bold py-8">Board of <span className="text-green-700">Directors</span> </h3>
            <div class="card w-96 bg-slate-100 hover:bg-base-100 shadow-xl m-auto">
                <figure >
                    <img className='mask mask-squircle w-8/12 shadow-3xl' src="https://i.ibb.co/vwKk701/Masud.jpg" alt="Locker Service img" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold">Ali Ibne Masud</h2>
                    <p className='font-bold'>Chairman</p>
                    <p>E-mail: aliibnemasud@gmail.com</p>
                </div>
            </div>

            <section className='pb-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-8 gap-5 bg-slate-100 px-8'>
                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <figure><img className='mask mask-circle w-6/12' src="https://i.ibb.co/4F3Dy2W/62422119-1163172957221790-7190402503412809728-n.jpg" alt="Locker Service img" /></figure>
                        <div class="card-body items-center text-center">
                            <h2 className="card-title">MD: Arif Hasan</h2>
                            <p className='font-bold'>Directors</p>
                            <p>E-mail: arifhasan.neon@gmail.com</p>

                        </div>
                    </div>
                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <figure><img className="mask mask-circle w-6/12" src='https://i.ibb.co/p2DVtt5/nahid1.jpg' alt="Locker Service img" /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">MD. NAHID</h2>
                            <p className='font-bold'>Directors </p>
                            <p>E-mail: moazzemhossainnahid@gmail.com</p>

                        </div>
                    </div>

                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <figure><img className="mask mask-circle w-6/12" src='https://i.ibb.co/wSLNm4t/rijon.jpg' alt="review icon" /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Rijon Ahmed</h2>
                            <p className='font-bold'>Directors</p>
                            <p>E-mail: rijon036@gmail.com</p>

                        </div>
                    </div>
                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <figure><img className="mask mask-circle w-6/12" src='https://i.ibb.co/4F3Dy2W/62422119-1163172957221790-7190402503412809728-n.jpg' alt="review icon" /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Md. Nahidul Islam</h2>
                            <p className='font-bold'>Directors</p>
                            <p>E-mail: withnahidul@gmail.com</p>

                        </div>
                    </div>

                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <figure><img className="mask mask-circle w-6/12" src='https://i.ibb.co/f1VQM5v/Shovo.jpg' alt="review icon" /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shabbir Ahmed Shuvo</h2>
                            <p className='font-bold'>Directors</p>
                            <p>E-mail: sabbirshuvo006@gmail.com</p>

                        </div>
                    </div>

                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <figure><img className='mask mask-circle w-6/12 shadow-3xl' src='https://i.ibb.co/qdrLbrT/tanvir2.jpg' alt="review icon" /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Md Tanvir Alam</h2>
                            <p className='font-bold'>Directors</p>
                            <p>E-mail: mdtanviralamht731@gmail.com</p>

                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default BoardOfDirectors;