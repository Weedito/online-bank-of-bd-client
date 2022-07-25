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
import Deposit from "./Pages/Products/Deposit/Deposit";
import Loan from "./Pages/Products/Loan/Loan";
import Cards from "./Pages/Products/Cards/Cards";
import RetailBanking from "./Pages/OurBanking/RetailBanking/RetailBanking";
import CorporateBanking from "./Pages/OurBanking/CorporateBanking/CorporateBanking";
import SMEBanking from "./Pages/OurBanking/SMEBanking/SMEBanking";
import AgentBanking from "./Pages/OurBanking/AgentBanking/AgentBanking";
import SMSBanking from "./Pages/OurBanking/SMSBanking/SMSBanking";

function App() {
  return (
    <div className="pt-16 text-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* About Us Routes  */}
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shareholders" element={<Shareholders />} />
        <Route path="/boardofdirectors" element={<BoardOfDirectors />} />
        <Route path="/executivecommittee" element={<ExecutiveCommittee />} />
        <Route path="/auditcommittee" element={<AuditCommittee />} />
        <Route path="/rmcommittee" element={<RiskManagementCommittee />} />
        <Route path="/headoffice" element={<HeadOffice />} />
        {/* About Us Routes End*/}

        {/* Products Routes */}
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/interestrate" element={<ExecutiveCommittee />} />
        {/* Products Routes End*/}

        {/* Our Banking Routes */}
        <Route path="/retailbanking" element={<RetailBanking />} />
        <Route path="/corporatebanking" element={<CorporateBanking />} />
        <Route path="/smebanking" element={<SMEBanking />} />
        <Route path="/agentbanking" element={<AgentBanking />} />
        <Route path="/smsbanking" element={<SMSBanking />} />
        {/* Our Banking Routes End*/}

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
