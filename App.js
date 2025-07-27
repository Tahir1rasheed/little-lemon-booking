import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      {/* HEADER */}
      <header style={{ padding: "1rem", backgroundColor: "#f4ce14" }}>
        <h1 style={{ margin: 0 }}>Little Lemon Restaurant</h1>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/booking">Reserve a Table</Link>
        </nav>
      </header>

      {/* MAIN ROUTES */}
      <main style={{ padding: "1rem", minHeight: "60vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer style={{
        padding: "1rem",
        backgroundColor: "#eee",
        textAlign: "center",
        fontSize: "14px"
      }}>
        © {new Date().getFullYear()} Little Lemon
      </footer>
    </Router>
  );
}

// ✅ MUST HAVE THIS LINE
export default App;
