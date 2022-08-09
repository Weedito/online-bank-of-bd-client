import React from 'react';

const TotalBalance = ({currentAccount, todayTrnsaction}) => {
    const crAccount = currentAccount[0];



    return (
        <div className="w-full md:w-3/5 flex flex-col gap-3 lg:w-full mx-auto">
            <div className="bg-gradient-to-l from-blue-500 to-sky-700 px-7 py-3 w-full text-center rounded-xl">
                <h3 className="text-xl text-white py-2">Total Balance</h3>
                <h2 className="text-3xl font-semibold text-white"> $ {crAccount?.balance} </h2>
            </div>
            <div className="bg-gradient-to-l from-yellow-500 to-orange-700 px-7 py-3 w-full text-center rounded-xl">
                <h3 className="text-xl text-white py-2">Total Transactions</h3>
                <h2 className="text-3xl font-semibold text-white"> $ {todayTrnsaction}  </h2>
            </div>
        </div>
    );
};

export default TotalBalance;