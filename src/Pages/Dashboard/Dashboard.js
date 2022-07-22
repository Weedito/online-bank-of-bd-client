import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
      <h1 className="text-xl font-bold text-green-500 text-center mt-4">
        Well Come To Dashboard
      </h1>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-green-600 drawer-button lg:hidden mb-56 -mt-96 mr-60"
          >
            Open Drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 font-bold text-base-content">
            
                <li>
                 <Link to="/dashboard/deposit">Deposit</Link>
                </li>
                <li>
                 <Link to="/dashboard/withdraw">Withdraw</Link>
                </li>
                <li>
                 <Link to="/dashboard/statement">Statement</Link>
                </li>
                <li>
                 <Link to="/dashboard/updateInfo">Update Info</Link>
                </li>
                <li>
                 <Link to="/dashboard/sendMoney">Send Money</Link>
                </li>
                <li>
                 <Link to="/dashboard/transactionHistory">Transaction History</Link>
                </li>
            
          </ul>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;