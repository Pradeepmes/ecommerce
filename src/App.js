import logo from "./logo.svg";
import "./App.css";
import "./assets/styles/main.scss"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Electronics from "./pages/Electronics";
import MainLayout from "./layout/MainLayout";
import PrivateRoute from "./layout/PrivateRoute";
import AddMobile from "./components/AddMobile";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute><MainLayout><Homepage /></MainLayout></PrivateRoute>} />
          <Route path="/electronics" element={<PrivateRoute><MainLayout><Electronics /></MainLayout></PrivateRoute>} />
           <Route path="/addmobile" element={<PrivateRoute><MainLayout><AddMobile /></MainLayout></PrivateRoute>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
