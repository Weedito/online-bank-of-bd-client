import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Signin from "./Pages/Authentication/Signin/Signin";
import Signup from "./Pages/Authentication/Signup/Signup";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import About from "./Pages/AboutUs/About/About";
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
import ManageBlogs from "./Pages/Dashboard/AdminDashboard/ManageBlogs/ManageBlogs";
import UpdateBlog from "./Pages/Dashboard/AdminDashboard/ManageBlogs/UpdateBlog";
import BlogsDetails from "./Pages/Blogs/BlogsDetails";
import AllBlogsData from "./Pages/Blogs/AllBlogsData";
import Overview from "./Pages/Dashboard/UserDashboard/Overview/Overview";
import MyAccounts from "./Pages/Dashboard/UserDashboard/MyAccounts/MyAccounts";
import MyTransactions from "./Pages/Dashboard/UserDashboard/MyTransactions/MyTransactions";
import MyFeedbacks from "./Pages/Dashboard/UserDashboard/MyFeedbacks/MyFeedbacks";
import SingleAccountDetails from "./Pages/Dashboard/UserDashboard/MyAccounts/SingleAccountDetails";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import SmeLoan from "./Pages/OurBanking/SMEBanking/SmeLoan";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAdmin from "./Components/Components.Nahid/RequireAdmin";
import Student from "./Pages/OurBanking/RetailBanking/Student";
import Accounts from "./Pages/OurBanking/RetailBanking/Accounts";
import { useState } from "react";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import Timeline from "./Pages/OurBanking/CorporateBanking/Timeline";
import AgentDynamicPage from "./Components/Components.Rijon/AgentDynamicPage";
import OurCommitment from "./Components/Components.Rijon/OurCommitment";
import CardPayment from "./Pages/Dashboard/UserDashboard/CardPayment/CardPayment";
import AddBlog from "./Pages/Dashboard/AdminDashboard/ManageBlogs/AddBlog";

function App() {
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);
  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };

  return (
    <div data-theme={theme && "my_dark"} className="">
      {
        loading ?



          <div className="w-screen h-screen flex justify-center items-center">
            <HashLoader color="#137c38" size={70} cssOverride loading={loading} />
          </div>

          :

          <div className="pt-16">
            {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/maccounts' && window.location.pathname !== '/cpanel/thistory' && window.location.pathname !== '/cpanel/mfeedbacks' && window.location.pathname !== '/cpanel/manageblogs' && window.location.pathname !== '/cpanel/addblog' && window.location.pathname !== '/dashboard' && window.location.pathname !== '/dashboard' && window.location.pathname !== '/dashboard/overview' && window.location.pathname !== '/dashboard/myaccounts' && window.location.pathname !== '/dashboard/mytransactions' && window.location.pathname !== '/dashboard/myfeedbacks') && <Header handleThemeChange={handleThemeChange} theme={theme} />}

            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Control Panel Routes */}
              <Route path="/cpanel" element={<RequireAuth><RequireAdmin><CPanel /></RequireAdmin></RequireAuth>}>
                <Route index element={<AdDashboard />} />
                <Route path="addashboard" element={<AdDashboard />} />
                <Route path="musers" element={<ManageUsers />} />
                <Route path="maccounts" element={<ManageAccounts />} />
                <Route path="thistory" element={<TransactionHistory />} />
                <Route path="mfeedbacks" element={<ManageFeedbacks />} />
                <Route path="manageBlogs" element={<ManageBlogs />} />
                <Route path="addBlog" element={<AddBlog />} />
              </Route>
              {/* Control Panel Routes */}

              {/* User Dashboard Routes */}

              <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
                <Route index element={<Overview />}></Route>
                <Route path="overview" element={<Overview />}></Route>
                <Route path="myaccounts" element={<MyAccounts />}></Route>
                <Route path="myaccounts/:id" element={<SingleAccountDetails />}></Route>
                <Route path="mytransactions" element={<MyTransactions />}></Route>
                <Route path="myfeedbacks" element={<MyFeedbacks />}></Route>
              </Route>
              <Route path="/blog/:id" element={<UpdateBlog />} />
              <Route path="/blogDetails/:id" element={<BlogsDetails />} />
              <Route path="/allBlogsData" element={<AllBlogsData />} />
              <Route path="/blogDetails/:id" element={<RequireAuth> <BlogsDetails /> </RequireAuth>} />
              <Route path="/payment/:id" element={<RequireAuth> <CardPayment /> </RequireAuth>} />
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
              <Route path="/accountstogole" element={<Accounts />} />
              <Route path="/corporatebanking" element={<CorporateBanking />} />
              <Route path="/smebanking" element={<SMEBanking />} />
              <Route path='/smebanking/:loanId' element={<SmeLoan />}></Route>
              <Route path="/agentbanking" element={<AgentBanking />} />
              <Route path="/smsbanking" element={<SMSBanking />} />
              <Route path="/student" element={<Student />} />
              <Route path="/timeline" element={<Timeline />} />
              { /* Our agentbankingdata Routes start*/}
              <Route path="/agentDynamicPage/:id" element={<AgentDynamicPage />} />
              { /* Our agentbankingdata Routes End*/}


              { /* Our Commitment dynamic Routes start*/}
              <Route path="/ourcommitmen/:id" element={<OurCommitment />} />
              { /* Our Commitment dynamic Routes End*/}
              {/* Our Banking Routes End*/}

              {/* Contact Routes End*/}
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/openaccount" element={<RequireAuth><CreateAccount /></RequireAuth>} />
              <Route path="/createaccount" element={<RequireAuth><CreateAccount /></RequireAuth>} />
              <Route path="/webcam" element={<WebcamCapture />} />
              {/* Contact Routes End*/}

              {/* Authentication Routes End*/}
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />

              {/* Authentication Routes End*/}
              <Route path="*" element={<NotFound />} />
            </Routes >
            {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/maccounts' && window.location.pathname !== '/cpanel/thistory' && window.location.pathname !== '/cpanel/mfeedbacks' && window.location.pathname !== '/cpanel/manageblogs' && window.location.pathname !== '/cpanel/addblog' && window.location.pathname !== '/dashboard' && window.location.pathname !== '/dashboard' && window.location.pathname !== '/dashboard/overview' && window.location.pathname !== '/dashboard/myaccounts' && window.location.pathname !== '/dashboard/mytransactions' && window.location.pathname !== '/dashboard/myfeedbacks') && <Footer />
            }
            {/* <Footer /> */}
            <ToastContainer />
          </div >
      }

    </div >
  );
}

export default App;