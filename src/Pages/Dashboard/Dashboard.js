import React from "react";
import UserSidebar from "./UserSidebar/UserSidebar";

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-l from-slate-100 to-white text-left h-screen w-full bg-cover bg-center">
      {/* <img src="https://victoriaseducationalservices.com/wp-content/uploads/2020/06/berlin-germany-1.jpg" alt="" className="h-screen w-full object-cover absolute mix-blend-overlay" /> */}
      <UserSidebar />
    </div>
  );
};

export default Dashboard;