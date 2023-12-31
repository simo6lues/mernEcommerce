import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductDetail from "./pages/ProductDetail";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";

function AppContent() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Router>
        <div className={`App ${isDarkMode ? "light-mode" : "dark-mode"}`}>
          <MyNavbar />

          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/products" Component={ProductListing} />
            {/* <Route path="/products/:id" Component={ProductDetail} /> */}
            <Route path="/cart" Component={Cart} />
            <Route path="/signin" Component={Auth} />
            <Route path="/signup" Component={Auth} />
            <Route path="/dashboard" Component={Dashboard} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
