import logo from "./logo.svg";
import "./App.css";
import "./assets/styles/main.scss"
import { MobileProvider } from "./pages/MobileContext";
import { lazy,Suspense } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/*import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Electronics from "./pages/Electronics";
import MainLayout from "./layout/MainLayout";
import PrivateRoute from "./layout/PrivateRoute";
import AddMobile from "./components/AddMobile";*/

// Lazy-loaded components
const Login = lazy(() => import("./pages/Login"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Electronics = lazy(() => import("./pages/Electronics"));
const AddMobile = lazy(() => import("./components/AddMobile"));
const MainLayout = lazy(() => import("./layout/MainLayout"));
const PrivateRoute = lazy(() => import("./layout/PrivateRoute"));



function App() {
  return (
    <div className="App">
      
      <Router>
         <MobileProvider>
            <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute><MainLayout><Homepage /></MainLayout></PrivateRoute>} />
          <Route path="/electronics" element={<PrivateRoute><MainLayout><Electronics /></MainLayout></PrivateRoute>} />
           <Route path="/addmobile" element={<PrivateRoute><MainLayout><AddMobile /></MainLayout></PrivateRoute>} />

        </Routes>
         </Suspense>
        </MobileProvider>
      </Router>
    </div>
  );
}

export default App;
