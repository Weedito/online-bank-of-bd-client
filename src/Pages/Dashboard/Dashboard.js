import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAccount from "../../Components/Components.Nahid/Hooks/useAccount";
import Loading from "../../Components/Components.Nahid/Loading";
import PendingAcc from "./UserDashboard/Pending/PendingAcc";
import UserSidebar from "./UserSidebar/UserSidebar";



const Dashboard = () => {

  const { myAccount, isLoading } = useAccount();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />
  }

  const account = myAccount && myAccount[0]?.role === 'approved';

  console.log(account);


  return (
    <div className="bg-gradient-to-l from-slate-100 to-white text-left h-screen w-full bg-cover bg-center">
      {/* <img src="https://victoriaseducationalservices.com/wp-content/uploads/2020/06/berlin-germany-1.jpg" alt="" className="h-screen w-full object-cover absolute mix-blend-overlay" /> */}

      {
        !account ? navigate('/pendingacc') : <UserSidebar />
      }
      
    </div>
  );
};

export default Dashboard;