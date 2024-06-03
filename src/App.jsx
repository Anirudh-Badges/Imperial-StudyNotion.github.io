import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./Components/Comman/Navbar";
import OpenRoutes from "./Components/cores/Auth/OpenRoutes";
import Signup from "./pages/Signup";
import Login from './pages/Login';
import AboutPage from "./pages/AboutPage";
import Contactpage from './pages/Contactpage';
import ForgetPassword from "./pages/ForgetPassword";
import VerifyEmail from './pages/VerifyEmail';
import UpdatePassword from "./pages/UpdatePassword";
import MyProfile from "./Components/cores/Dashboard/MyProfile";
import PrivateRoute from "./Components/cores/Auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/signup" element={<OpenRoutes>
          <Signup />
        </OpenRoutes>} />

        <Route path="/login" element={<OpenRoutes>
          <Login />
        </OpenRoutes>} />

        <Route path="/forgot-password" element={<OpenRoutes> <ForgetPassword /> </OpenRoutes>} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route
          path="verify-email"
          element={
            <OpenRoutes>
              <VerifyEmail />
            </OpenRoutes>
          }
        /> 
        <Route path="update-password" element ={
          <OpenRoutes> <UpdatePassword/></OpenRoutes>
        } />
        {/* <Route element = {
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }
        >
          
        </Route> */}
<Route path="dashboard/my-profile" element= {<MyProfile/>} />
        
        <Route path="*" element = {<Error/>}/>

      </Routes>
    </div>
  );
}

export default App;
