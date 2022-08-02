import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboardm = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col p-10">
                {/* <!-- Page content here --> */}
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                {/* Dashboard Navbar */}
                <div class="navbar bg-slate-100 mb-5 rounded-md">
                    <div class="flex-1">
                        <a class="btn btn-ghost normal-case text-xl">Dashboard</a>
                    </div>
                    <div class="flex-none gap-2">
                        <h1>Ali Iben Masud</h1>
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Dashboard End */}


                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class=" bg-slate-100 menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    {/* <!-- Sidebar content here --> */}

                    <li className='bg-slate-100'><a>All Users Account</a></li>
                    <li className='bg-slate-100'><a>Create Account</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboardm;