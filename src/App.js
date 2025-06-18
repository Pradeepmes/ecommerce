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

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<MainLayout><Homepage /></MainLayout>} />
          <Route path="/electronics" element={<MainLayout><Electronics /></MainLayout>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
