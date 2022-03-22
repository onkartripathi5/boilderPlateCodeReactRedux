import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const Header = () => {
  return (
    <div className="app_header bg-dark text-white d-flex px-2 align-items-center">
      <h4>Redux App</h4>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
