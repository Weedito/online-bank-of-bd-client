import React from 'react';
import { ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';


const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490,
    },
    {
        name: 'Balance',
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350,
    },
    {
        name: 'Deposit',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460,
    },
    {
        name: 'Withdraw',
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380,
    },
];


const ACOverview = ({currentAccount, tdDeposit, tdWithdraw}) => {
    const crAccount = currentAccount[0];
    return (
        <div className='w-full bg-gray-300 rounded-md p-5'>
            <div className="">
                <h3 className="text-xl font-semibold">Overview of <span className="text-green-700">{crAccount?.AccNo}</span></h3>
            </div>

            <div className="flex items-center justify-between py-3 gap-3">
                <div className="">
                    <h3 className="text-md font-semibold">Balance</h3>
                    <h3 className="flex items-center font-semibold text-gray-700 gap-2"> $ <span className="">{crAccount?.balance}</span> </h3>
                </div>
                <div className="">
                    <h3 className="text-md font-semibold">Deposit</h3>
                    <h3 className="flex items-center font-semibold text-green-700 gap-2"> $ <span className="">{tdDeposit}</span> </h3>
                </div>
                <div className="">
                    <h3 className="text-md font-semibold">Withdraw</h3>
                    <h3 className="flex items-center font-semibold text-red-700 gap-2"> $ <span className="">{tdWithdraw}</span> </h3>
                </div>
            </div>

            <div style={{ width: 500, height: 200 }} className="hidden lg:block w-full md:w-3/6 mx-auto px-5">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="uv" fill="#ffc658" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default ACOverview;