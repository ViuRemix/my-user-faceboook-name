import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup"; // Import trang đăng ký

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />{" "}
          {/* Thêm route cho signup */}
          <Route exact path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
