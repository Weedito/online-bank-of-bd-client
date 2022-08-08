import React, { useEffect, useState } from 'react';
import useAccount from '../../../../Components/Components.Nahid/Hooks/useAccount';
import Loading from '../../../../Components/Components.Nahid/Loading';
import ACOverview from './ACOverview';
import OVCards from './OVCards';
import TopOverview from './TopOverview';
import TotalBalance from './TotalBalance';
import TransacOverview from './TransacOverview';

const Overview = () => {
    const { myAccount, isLoading } = useAccount();
    const [selectAcc, setSelectAcc] = useState('');
    const [currentAccount, setCurrentAccount] = useState();
    
    useEffect(() => {
        const account = myAccount?.filter(ac => ac.AccNo === parseInt(selectAcc));
        setCurrentAccount(account);
    }, [myAccount, selectAcc]);


    if (isLoading) {
        return <Loading />
    }

    const handleSelect = (e) => {
        const acc = e.target.value;
        setSelectAcc(acc);
    }







    return (
        <section className="w-full p-5">
            <TopOverview handleSelect={handleSelect} setSelectAcc={setSelectAcc} />
            {
                currentAccount && <div className='flex flex-col lg:flex-row justify-center items-center gap-5 w-full mx-auto'>
                    <div className="w-full lg:w-2/5 mx-auto">
                        <TotalBalance currentAccount={currentAccount} />
                        <OVCards currentAccount={currentAccount} />
                    </div>
                    <div className="w-full flex flex-col gap-3 lg:w-3/5 mx-auto">
                        <ACOverview currentAccount={currentAccount} />
                        <TransacOverview currentAccount={currentAccount} />
                    </div>
                </div>
            }
        </section>
    );
};

export default Overview;