// /* <<<<<<< HEAD
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link, Outlet } from "react-router-dom";
// import UseAdmin from "../../Components/Components.Nahid/Hooks/useAdmin";
// import auth from "../../firebase.init";
// =======
// import React from "react";
// import UserSidebar from "./UserSidebar/UserSidebar";
// >>>>>>> f968fe4cf105f358dddb91503ee054210bc80013

// const Dashboard = () => {
//   return (
// <<<<<<< HEAD
//     <div>
//       <div className="drawer drawer-mobile">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content mt-4">
//           <label
//             htmlFor="my-drawer-2"
//             className="btn bg-green-600 drawer-button lg:hidden mb-4 lg:mb-60 -mt-70 mr-60"
//           >
//             Open Dashboard{" "}
//           </label>

//           {/* Dashboard Navbar */}
//           <div class="navbar bg-slate-100 mb-5 rounded-md">
//             <div class="flex-1">
//               <a class="btn btn-ghost normal-case text-xl">Dashboard</a>
//             </div>
//             <div class="flex-none gap-2">
//               <h1>{user?.displayName}</h1>
//               <div class="dropdown dropdown-end">
//                 <label tabindex="0" class="btn btn-ghost btn-circle avatar">
//                   <div class="w-10 rounded-full">
//                     <img src={user?.photoURL} />
//                   </div>
//                 </label>
//                 <ul
//                   tabindex="0"
//                   class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
//                 >
//                   <li>
//                     <a class="justify-between">
//                       Profile
//                       <span class="badge">New</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a>Settings</a>
//                   </li>
//                   <li>
//                     <a>Logout</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Dashboard Navbar End */}
//             /*  */
//           <Outlet></Outlet>
//         </div>
//         <div className="drawer-side mr-6">
//           <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//           <ul className="menu p-4 overflow-y-auto w-80 bg-slate-100 font-bold text-base-content">
//             {user && (
//               <>
//                 <li>
//                   <Link to="/dashboard/createAnAccount">Create an Account</Link>
//                 </li>
//               </>
//             )}

//             {user && (
//               <>
//                 <li>
//                   <Link to="/dashboard/alluseraccounts">Users Accounts</Link>
//                 </li>
//                 <li>
//                   <Link className="my-2" to="/dashboard/myaccounts">
//                     My Accounts
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/dashboard/statement">Statement</Link>
//                 </li>
//                 <li>
//                   <Link className="my-2" to="/dashboard/UserAccount">
//                     <i class="fa-solid fa-user z-20 text-base-400"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/dashboard/userDashboard">User Dashboard</Link>
//                 </li>
//                 <li>
//                   <Link className="my-2" to="/dashboard/updateInfo">
//                     Update Info
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/dashboard/sendMoney">Send Money</Link>
//                 </li>
//                 {admin && (
//                   <li>
//                     <Link to="/dashboard/manageusers">Manage Users</Link>
//                   </li>
//                 )}
//                 <li>
//                   <Link className="mt-2" to="/dashboard/transactionHistory">
//                     Transaction History
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
// =======
//     <div className="bg-gradient-to-l from-slate-100 to-white text-left h-screen w-full bg-cover bg-center">
//       {/* <img src="https://victoriaseducationalservices.com/wp-content/uploads/2020/06/berlin-germany-1.jpg" alt="" className="h-screen w-full object-cover absolute mix-blend-overlay" /> */}
//       <UserSidebar />
// >>>>>>> f968fe4cf105f358dddb91503ee054210bc80013
//     </div>
//   );
// };

// export default Dashboard;
//  */