import React from 'react';

const BoardOfDirectors = () => {

    return (
        <div className='bg-slate-100 max-w-7xl mx-auto'>
            <h3 className="text-3xl text-center font-bold py-8">Board of <span className="text-green-700">Directors</span> </h3>
            <div class="card w-96 bg-slate-100 hover:bg-base-100 shadow-xl m-auto">
                <label for="masud">
                    <figure >
                        <img className='mask mask-squircle w-8/12 shadow-3xl mt-5' src="https://i.ibb.co/vwKk701/Masud.jpg" alt="Ali Ibne Masud img" />
                    </figure>
                </label>
                <div class="card-body items-center text-center">
                    <label className="card-title cursor-pointer hover:text-green-700" for="masud">Ali Ibne Masud</label>
                    <p className='font-bold'>Chairman</p>
                    <p>E-mail: aliibnemasud@gmail.com</p>
                </div>
            </div>

            <section className='pb-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-8 gap-5 bg-slate-100 px-8'>
                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <label for="arif">
                            <figure><img className='mask mask-circle w-6/12 mt-5' src="https://i.ibb.co/4F3Dy2W/62422119-1163172957221790-7190402503412809728-n.jpg" alt="Arif img" /></figure>
                        </label>
                        <div class="card-body items-center text-center">
                            <label className="card-title cursor-pointer hover:text-green-700" for="arif">MD: Arif Hasan</label>
                            <p className='font-bold'>Directors</p>
                            <p>E-mail: arifhasan.neon@gmail.com</p>

                        </div>
                    </div>
                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <label for="nahid">
                            <figure><img className="mask mask-circle w-6/12 mt-5" src='https://i.ibb.co/p2DVtt5/nahid1.jpg' alt="Nahid img" /></figure>
                        </label>
                        <div className="card-body items-center text-center">
                            <label className="card-title cursor-pointer hover:text-green-700" for="nahid">MD. NAHID</label>
                            <p className='font-bold'>Directors </p>
                            <p>E-mail: moazzemhossainnahid@gmail.com</p>

                        </div>
                    </div>

                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <label for="rijon">
                            <figure><img className="mask mask-circle w-6/12 mt-5" src='https://i.ibb.co/wSLNm4t/rijon.jpg' alt="rijon Img" /></figure>
                        </label>
                        <div className="card-body items-center text-center">
                            <label className="card-title cursor-pointer hover:text-green-700" for="rijon">Rijon Ahmed</label>
                            <p className='font-bold'>Directors</p>
                            <p>E-mail: rijon036@gmail.com</p>

                        </div>
                    </div>
                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <label for="nahidul">
                            <figure><img className="mask mask-circle w-6/12 mt-5" src='https://i.ibb.co/F3S9tTs/nahidul1.jpg' alt="Nahidul Img" /></figure>
                        </label>
                        <div className="card-body items-center text-center">
                            <label className="card-title cursor-pointer hover:text-green-700" for="nahidul">Md. Nahidul Islam</label>
                            <p className='font-bold'>Directors</p>
                            <p>E-mail: withnahidul@gmail.com</p>

                        </div>
                    </div>

                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <label for="shuvo">
                            <figure><img className="mask mask-circle w-6/12 mt-5" src='https://i.ibb.co/f1VQM5v/Shovo.jpg' alt="Shovo Img" /></figure>
                        </label>
                        <div className="card-body items-center text-center">
                            <label className="card-title cursor-pointer hover:text-green-700" for="shuvo">Shabbir Ahmed Shuvo</label>
                            <p className='font-bold'>Directors</p>
                            <p>E-mail: sabbirshuvo006@gmail.com</p>

                        </div>
                    </div>

                    <div className="card card-compact max-w-max bg-slate-100 hover:bg-base-100 shadow-xl">
                        <label for="Tanvir">
                            <figure><img className='mask mask-circle w-6/12 mt-5' src='https://i.ibb.co/qdrLbrT/tanvir2.jpg' alt="tanvir img" /></figure>
                        </label>
                        <div className="card-body items-center text-center">
                            <label className="card-title cursor-pointer hover:text-green-700" for="Tanvir">Md Tanvir Alam</label>
                            <p className='font-bold'>Directors</p>
                            <p>E-mail: mdtanviralamht731@gmail.com</p>

                        </div>
                    </div>


                </div>
            </section>


            {/* Modal Information */}


            {/* Md Tanvir Alam Info */}

            <input type="checkbox" id="Tanvir" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="Tanvir" class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-red-700">✕</label>
                    <figure className='w-6/12 m-auto'><img src="https://i.ibb.co/qdrLbrT/tanvir2.jpg" alt="Ali Ibne Masud img" /></figure>
                    <h3 class="font-bold text-lg">Md Tanvir Alam</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                </div>
            </div>

            {/* Shabbir Ahmed Shuvo Info */}
            <input type="checkbox" id="shuvo" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="shuvo" class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-red-700">✕</label>
                    <figure className='w-6/12 m-auto'><img src="https://i.ibb.co/f1VQM5v/Shovo.jpg" alt="Shabbir Ahmed Shuvo" /></figure>
                    <h3 class="font-bold text-lg">Shabbir Ahmed Shuvo</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                </div>
            </div>

            {/* Md. Nahidul Islam info */}
            <input type="checkbox" id="nahidul" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="nahidul" class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-red-700">✕</label>
                    <figure className='w-6/12 m-auto'><img src="https://i.ibb.co/F3S9tTs/nahidul1.jpg" alt="Md. Nahidul img" /></figure>
                    <h3 class="font-bold text-lg">Md. Nahidul Islam</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                </div>
            </div>


            {/* Rijon Ahmed Info */}
            <input type="checkbox" id="rijon" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="rijon" class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-red-700">✕</label>
                    <figure className='w-6/12 m-auto'><img src="https://i.ibb.co/wSLNm4t/rijon.jpg" alt="Rijon Ahmed img" /></figure>
                    <h3 class="font-bold text-lg">Rijon Ahmed</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                </div>
            </div>

            {/* MD. NAHID Info */}
            <input type="checkbox" id="nahid" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="nahid" class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-red-700">✕</label>
                    <figure className='w-6/12 m-auto'><img src="https://i.ibb.co/p2DVtt5/nahid1.jpg" alt="MD. NAHID img" /></figure>
                    <h3 class="font-bold text-lg">MD. NAHID</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                </div>
            </div>

            {/* MD: Arif Hasan info */}
            <input type="checkbox" id="arif" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="arif" class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-red-700">✕</label>
                    <figure className='w-6/12 m-auto'><img src="https://i.ibb.co/4F3Dy2W/62422119-1163172957221790-7190402503412809728-n.jpg" alt="MD: Arif Hasan img" /></figure>
                    <h3 class="font-bold text-lg">MD: Arif Hasan</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>

                </div>
            </div>

            {/* Ali Ibne Masud info */}
            <input type="checkbox" id="masud" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="masud" class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-red-700">✕</label>
                    <figure className='w-6/12 m-auto'><img src="https://i.ibb.co/vwKk701/Masud.jpg" alt="Ali Ibne Masud img" /></figure>
                    <h3 class="font-bold text-lg">Ali Ibne Masud</h3>
                    <p class="py-4 text-left">Al-Haj Nur Mohammed was elected as the Chairman of the Board of Directors of Jamuna Bank Limited on April 28, 2022. <br />
                        He was born in 1954 in a respectable Muslim family of Munshigonj. He obtained Bachelor of Arts Degree from the University of Dhaka. He is associated with a number of business concerns. He was a Member of Parliament of National Assembly. Mr. Mohammed is the President of Munshigonj Chamber of Commerce and Industry since 1989. He is the Chairman of Nur Star Engineering Ltd., Director of Australian International School, Bangladesh & International Holdings Ltd. and proprietor of Star Trading Corporation & Modhumoti CNG Complex. He is the founder Chairman and architect of Jamuna Bank Foundation, an allied concern of Jamuna Bank Limited established with an aim and objective to provide assistance to the destitute & distressed people of the society as well as to create awareness/inspire people regarding their social responsibilities and commitments towards nation as a part of CSR activities of Jamuna Bank Ltd. since its inception. Under his leadership, the Bank has been awarded the prestigious "Best CSR Bank 2021" by UK based "The Global Economics Limited". He has been actively participating in philanthropic activities and is associated with Anti-Drug movement as the current President of Bangladesh Anti-Drug Federation. He is the founder President of Shahed Ali Eatimkhana, Goalgunni, Munshigonj, an orphanage established by him. The renowned Al-Haj Nur Mohammed Trust was established by him in 2001 of which he is the Chairman. As a pioneer leader of CSR activities, he attended various International CSR Conferences.

                        <br />
                        He also served as Chairman of the Board of Directors of Jamuna Bank Limited from April 29, 2007 to April 26, 2008 and served as the Chairman of the Executive Committee of the Board of Directors of the Bank for several times.</p>

                </div>
            </div>




        </div>
    );
};

export default BoardOfDirectors;