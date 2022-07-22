import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Signin from "./Pages/Authentication/Signin/Signin";
import Signup from "./Pages/Authentication/Signup/Signup";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="pt-16 text-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
