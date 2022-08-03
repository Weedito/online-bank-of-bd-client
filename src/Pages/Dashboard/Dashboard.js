import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../../Components/Components.Nahid/Hooks/useAdmin';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = UseAdmin();
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10">
          <label htmlFor="my-drawer-2" className="btn bg-green-600 drawer-button lg:hidden lg:mb-60 -mt-96 mr-60"
          >Open Dashboard </label>

          {/* Dashboard Navbar */}
          <div className="navbar bg-slate-100 mb-5 rounded-md">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
            </div>
            <div className="flex-none gap-2">
              <h1>{user?.displayName}</h1>
              <div className="dropdown dropdown-end">
                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
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
        <div className="drawer-side z-0">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 gap-2 overflow-y-auto w-80 bg-slate-100 font-bold text-base-content">

            {
              user &&
              <>
                <li><Link to="/dashboard/alluseraccounts">Users Accounts</Link></li>
                <li><Link to="/dashboard/createAnAccount">Create an Account</Link></li>
                <li><Link to="/dashboard/myaccounts">My Accounts</Link></li>
                <li><Link to="/dashboard/statement">Statement</Link></li>
                <li><Link to="/dashboard/updateInfo">Update Info</Link></li>
                {
                  admin &&
                  <li><Link to="/dashboard/manageusers">Manage Users</Link></li>
                }
                <li><Link to="/dashboard/transactionHistory">Transaction History</Link></li>
              </>
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;