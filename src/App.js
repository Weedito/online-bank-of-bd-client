import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Signin from "./Pages/Authentication/Signin/Signin";
import Signup from "./Pages/Authentication/Signup/Signup";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import About from "./Pages/AboutUs/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Shareholders from "./Pages/AboutUs/Shareholders/Shareholders";
import BoardOfDirectors from "./Pages/AboutUs/BoardOfDirectors/BoardOfDirectors";
import ExecutiveCommittee from "./Pages/AboutUs/Committee/ExecutiveCommittee/ExecutiveCommittee";
import AuditCommittee from "./Pages/AboutUs/Committee/AuditCommittee/AuditCommittee";
import RiskManagementCommittee from "./Pages/AboutUs/Committee/RiskManagementCommittee/RiskManagementCommittee";
import NotFound from "./Pages/NotFound/NotFound";
import HeadOffice from "./Pages/AboutUs/HeadOffice/HeadOffice";
import Loan from "./Pages/Products/Loan/Loan";
import Cards from "./Pages/Products/Cards/Cards";
import RetailBanking from "./Pages/OurBanking/RetailBanking/RetailBanking";
import CorporateBanking from "./Pages/OurBanking/CorporateBanking/CorporateBanking";
import SMEBanking from "./Pages/OurBanking/SMEBanking/SMEBanking";
import AgentBanking from "./Pages/OurBanking/AgentBanking/AgentBanking";
import SMSBanking from "./Pages/OurBanking/SMSBanking/SMSBanking";
import ContactUs from "./Pages/ContactUs/ContactUs";
import InterestRate from "./Pages/Products/InterestRate/InterestRate";
import DepositDetails from "./Pages/Products/Deposit/DepositDetails";
import RequireAuth from "./Components/Components.Nahid/RequireAuth";
import CPanel from "./Pages/Dashboard/AdminDashboard/Admin/CPanel";
import ManageAccounts from "./Pages/Dashboard/AdminDashboard/ManageAccounts/ManageAccounts";
import TransactionHistory from "./Pages/Dashboard/AdminDashboard/TransactionHistory/TransactionHistory";
import AdDashboard from "./Pages/Dashboard/AdminDashboard/Dashboard/AdDashboard";
import ManageFeedbacks from "./Pages/Dashboard/AdminDashboard/ManageFeedbacks/ManageFeedbacks";
import CardDetails from "./Pages/Products/Cards/CardDetails";
import ManageUsers from "./Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import WebcamCapture from "./Components/Components.Nahid/Webcam";
import Overview from "./Pages/Dashboard/UserDashboard/Overview/Overview";
import MyAccounts from "./Pages/Dashboard/UserDashboard/MyAccounts/MyAccounts";

function App() {
  return (
    <div className="pt-16">
      {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/dashboard') && <Header /> }

      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Control Panel Routes */}
        <Route path="/cpanel" element={<RequireAuth><CPanel/></RequireAuth>}>
          <Route index element={<AdDashboard/>} />
          <Route path="addashboard" element={<AdDashboard/>} />
          <Route path="musers" element={<ManageUsers/>} />
          <Route path="maccounts" element={<ManageAccounts/>} />
          <Route path="thistory" element={<TransactionHistory/>} />
          <Route path="mfeedbacks" element={<ManageFeedbacks/>} />
        </Route>    
        {/* Control Panel Routes */}

        {/* User Dashboard Routes */}

        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>        
          <Route index element={<Overview/>}></Route>
          <Route path="overview" element={<Overview/>}></Route>
          <Route path="myaccounts" element={<MyAccounts/>}></Route>
          <Route path="myfeedbacks" element={<ManageUsers/>}></Route>
        </Route>
        {/* User Dashboard Routes End*/}

        {/* About Us Routes */}
        <Route path="/about" element={<About />} />\ 
        <Route path="/shareholders" element={<Shareholders />} />
        <Route path="/boardofdirectors" element={<BoardOfDirectors />} />
        <Route path="/executivecommittee" element={<ExecutiveCommittee />} />
        <Route path="/auditcommittee" element={<AuditCommittee />} />
        <Route path="/rmcommittee" element={<RiskManagementCommittee />} />
        <Route path="/headoffice" element={<HeadOffice />} />
        {/* About Us Routes End*/}

        {/* Products Routes */}
        <Route path="/deposit" element={<DepositDetails />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/interestrate" element={<InterestRate />} />
        {/* Products Routes End*/}

        {/* Our Banking Routes */}
        <Route path="/retailbanking" element={<RetailBanking />} />
        <Route path="/corporatebanking" element={<CorporateBanking />} />
        <Route path="/smebanking" element={<SMEBanking />} />
        <Route path="/agentbanking" element={<AgentBanking />} />
        <Route path="/smsbanking" element={<SMSBanking />} />
        {/* Our Banking Routes End*/}

        {/* Contact Routes End*/}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/webcam" element={<WebcamCapture />} />
        {/* Contact Routes End*/}

        {/* Authentication Routes End*/}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* Authentication Routes End*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/dashboard') && <Footer /> }
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
