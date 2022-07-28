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
import Statement from "./Pages/Dashboard/UserDashboard/Statement";
import UpdateInfo from "./Pages/Dashboard/UserDashboard/UpdateInfo";
import SendMoney from "./Pages/Dashboard/UserDashboard/SendMoney";
import TransactionHistory from "./Pages/Dashboard/UserDashboard/TransactionHistory";
import Deposit from "./Pages/Dashboard/UserDashboard/Deposit";
import ContactUs from "./Pages/ContactUs/ContactUs";
import InterestRate from "./Pages/Products/InterestRate/InterestRate";
import DepositDetails from "./Pages/Products/Deposit/DepositDetails";
import Withdraw from "./Pages/Dashboard/UserDashboard/Withdraw";
import CreateAnAccount from "./Pages/Dashboard/CreateAnAccount";
import RequireAuth from "./Components/Components.Nahid/RequireAuth";
import ManageUsers from "./Pages/Dashboard/AdminSection/ManageUsers/ManageUsers";

function App() {
  return (
    <div className="pt-16 text-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route path="createAnAccount" element={<CreateAnAccount/>}></Route>
          <Route path="deposit" element={<Deposit/>}></Route>
          <Route path="withdraw" element={<Withdraw/>}></Route>
          <Route path="statement" element={<Statement/>}></Route>
          <Route path="updateInfo" element={<UpdateInfo/>}></Route>
          <Route path="sendMoney" element={<SendMoney/>}></Route>
          <Route path="transactionHistory" element={<TransactionHistory/>}></Route>
          <Route path="manageusers" element={<ManageUsers/>}></Route>
        </Route>
        {/* Dashboard Routes End*/}

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
        {/* Contact Routes End*/}

        {/* Authentication Routes End*/}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* Authentication Routes End*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
