import React from 'react';
import { accountsCard } from '../../../Components/Components.Shuvo/SData'

const Accounts = () => {
    return (
        <div className='bg-base-100'>
            <div className='mx-40'>
                <p>When you consider the advantages that come with a NRBCB account, coupled with the support and guidance you receive from your Relationship Manager, you would be right to consider it a valuable business asset.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 my-10'>
                {accountsCard.map(card => <div className='mt-10 text-red-600 mx-40 gap-5'>
                    <div class="w-96 border border-red-600">
                        <div class="card-body items-center">
                            <div class="justify-center">
                                <img src={card.imageURL} alt="" />
                            </div>
                            <p>{card.text}</p>
                        </div>
                    </div>
                </div>)}
            </div>



        </div>
    );
};

export default Accounts;