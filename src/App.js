import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Pages/Authentication/Signin/Signin";
import Signup from "./Pages/Authentication/Signup/Signup";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="pt-16 text-center">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
