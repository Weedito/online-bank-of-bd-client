import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
    return (
        <div>
      {
        user &&
        <h1 className="text-xl container font-bold text-green-500 text-center mt-4 ">
         
        <span className='mx-auto'>Create A Bank Account</span>
      </h1>
      }

      {
        user &&
        <h1 className="text-xl justify-end container font-bold text-green-500 text-end mt-4 ">
         
        <span className='m-6'>MD:Tariqul bashar </span><img className='w-8 h-8 display: inline rounded-full' src="https://i.ibb.co/sgLL5kd/show.jpg" alt="" />
      </h1>
      }



      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-green-600 drawer-button lg:hidden lg:mb-60 -mt-96 mr-60"
          >
            Open Drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side z-0">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 font-bold text-base-content">
            

            {
              user &&
              <>
                <li>
                 <Link to="/dashboard/createAnAccount">Create an Account</Link>
                </li>
              </>
            }

                {
                  user &&
                  <>
                  <li>
                 <Link to="/dashboard/deposit">Deposit</Link>
                </li>
                <li>
                 <Link className='my-2' to="/dashboard/withdraw">Withdraw</Link>
                </li>
                <li>
                 <Link to="/dashboard/statement">Statement</Link>
                </li>
                <li>
                 <Link className='my-2' to="/dashboard/updateInfo">Update Info</Link>
                </li>
                <li>
                 <Link to="/dashboard/sendMoney">Send Money</Link>
                </li>
                <li>
                 <Link className='mt-2' to="/dashboard/transactionHistory">Transaction History</Link>
                </li>
                  </>
                }
            
          </ul>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;