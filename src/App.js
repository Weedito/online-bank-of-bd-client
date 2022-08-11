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
import UpdateInfo from "./Pages/Dashboard/UserDashboard/UserProfile/UpdateInfo";
import ContactUs from "./Pages/ContactUs/ContactUs";
import InterestRate from "./Pages/Products/InterestRate/InterestRate";
import DepositDetails from "./Pages/Products/Deposit/DepositDetails";
import Withdraw from "./Pages/Dashboard/UserDashboard/Withdraw/Withdraw";
import CreateAnAccount from "./Pages/Dashboard/CreateAnAccount";
import RequireAuth from "./Components/Components.Nahid/RequireAuth";
import UserAccount from "./Pages/Dashboard/UserDashboard/UserAccount";
import UserDashboard from "./Pages/Dashboard/UserDashboard/UserDashboard";
import Statement from "./Pages/Dashboard/UserDashboard/Statement/Statement";
import AllUsersAccounts from "./Components/Components.Masud/AllUsersAccounts";
import MyAccounts from "./Components/Components.Masud/MyAccounts";
import CPanel from "./Pages/Dashboard/AdminDashboard/Admin/CPanel";
import ManageAccounts from "./Pages/Dashboard/AdminDashboard/ManageAccounts/ManageAccounts";
import TransactionHistory from "./Pages/Dashboard/AdminDashboard/TransactionHistory/TransactionHistory";
import AdDashboard from "./Pages/Dashboard/AdminDashboard/Dashboard/AdDashboard";
import ManageFeedbacks from "./Pages/Dashboard/AdminDashboard/ManageFeedbacks/ManageFeedbacks";
import CardDetails from "./Pages/Products/Cards/CardDetails";
import ManageUsers from "./Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import WebcamCapture from "./Components/Components.Nahid/Webcam";
import ManageBlogs from "./Pages/Dashboard/AdminDashboard/ManageBlogs/ManageBlogs";
import AddBlog from "./Pages/Dashboard/AdminDashboard/ManageBlogs/AddBlog";
import UpdateBlog from "./Pages/Dashboard/AdminDashboard/ManageBlogs/UpdateBlog";
import BlogsDetails from "./Pages/Blogs/BlogsDetails";
import AllBlogsData from "./Pages/Blogs/AllBlogsData";

function App() {
  return (
    <div className="pt-16">
      {window.location.pathname !== '/cpanel' && <Header /> }

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
          <Route path="manageBlogs" element={<ManageBlogs/>}/>
          <Route path="addBlog" element={<AddBlog/>}/>
        </Route>    
        {/* Control Panel Routes */}

        {/* User Dashboard Routes */}

        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>        
          <Route path="createAnAccount" element={<CreateAnAccount/>}></Route>
          <Route path="alluseraccounts" element={<AllUsersAccounts/>}></Route>
          <Route path="myaccounts" element={<MyAccounts></MyAccounts>}></Route>
          <Route path="withdraw" element={<Withdraw/>}></Route>
          <Route path="statement" element={<Statement/>}></Route>
          <Route path="userAccount" element={<UserAccount/>}></Route>
          <Route path="userDashboard" element={<UserDashboard/>}></Route>
          <Route path="updateInfo" element={<UpdateInfo/>}></Route>
          <Route path="transactionHistory" element={<TransactionHistory/>}></Route>
          <Route path="manageusers" element={<ManageUsers/>}></Route>
        </Route>
        <Route path="/blog/:id" element={<UpdateBlog/>}/>
        <Route path="/blogDetails/:id" element={<BlogsDetails/>}/>
        <Route path="/allBlogsData" element={<AllBlogsData/>} />
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
      {window.location.pathname !== '/cpanel' ? <Footer /> : null}
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
