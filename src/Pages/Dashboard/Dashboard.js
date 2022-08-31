import React, {useState,useEffect } from "react";
import useAccount from "../../Components/Components.Nahid/Hooks/useAccount";
import Loading from "../../Components/Components.Nahid/Loading";
import PendingAcc from "./UserDashboard/Pending/PendingAcc";
import UserSidebar from "./UserSidebar/UserSidebar";



const Dashboard = () => {
  const { myAccount, isLoading } = useAccount();
  const [acc, setAcc] = useState();
  
  useEffect(() => {
    if (myAccount) {
      const apacc = myAccount && myAccount[0]?.role !== 'approved';
      setAcc(apacc)
    }
  }, [myAccount])
  
    if (isLoading) {
      return <Loading />
    }
  

  return (
    <div className="bg-gradient-to-l from-slate-100 to-white text-left h-screen w-full bg-cover bg-center">
      {/* <img src="https://victoriaseducationalservices.com/wp-content/uploads/2020/06/berlin-germany-1.jpg" alt="" className="h-screen w-full object-cover absolute mix-blend-overlay" /> */}



      {
        acc ? <PendingAcc /> : <UserSidebar /> 
      }

    </div>
  );
};

export default Dashboard;