import React from 'react';

const SMSBanking = () => {
    return (
        <div>
            <h3 className="text-3xl">Our SMS Banking</h3>
            <p>Dare coustomer,The sms banking page. That's use for any our banking issue verifications</p>

            <div className='lg:mx-10 card bg-base-100 shadow-xl mt-10'>
                <div className='flex gap-10 lg:justify-center md:justify-center lg:h-48 md:h-28 '>
                    <div class="form-control w-48">
                        <label class="label">
                            <span class="label-text">* AC Number /* Phone Number</span>
                        </label>
                        <input type="text" placeholder="Account" class="input input-bordered" />
                        <button className='btn btn-primary mt-5'>Verify</button>
                    </div>
                    <div class="form-control w-48">
                        <label class="label">
                            <span class="label-text">* Amount Here</span>
                        </label>
                        <input type="text" placeholder="Amount" class="input input-bordered" />
                        <button className='btn btn-disabled mt-5'>Procced</button>
                    </div>
                </div>
            </div>

            <div>
                <div className='divider mx-20'></div>

                <p className='text-red-400'>Anything Wrong? <span className='text-green-400 link'>Contact us.</span></p>
            </div>

        </div>
    );
};

export default SMSBanking;