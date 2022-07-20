import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="pt-16 text-center">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
