import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from './Components/SignUpPage/SignUpPage';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import JobPortal from './Components/JobPortal/JobPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/auth/login" element={<LoginPage />}/>
        <Route path="/auth/register" element={<SignUpPage />}/>
        <Route path="/auth/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/jobportal" element={<JobPortal />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
