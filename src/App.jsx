import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./Components/Comman/Navbar";
import OpenRoutes from "./Components/cores/Auth/OpenRoutes";
import Signup from "./pages/Signup";
import Login from './pages/Login';
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        


        <Route path="/signup" element={<OpenRoutes>
          <Signup/>
        </OpenRoutes>}/>

        <Route path="/login" element={<OpenRoutes>
          <Login/>
        </OpenRoutes>}/>
      

         <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
