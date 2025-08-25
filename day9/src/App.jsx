import { Link, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useAuth } from "./Context/AuthContext";

export default function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
        <h1 style={{ margin: 0 }}>Ecommerce App</h1>
        <nav>
          <ul style={{ display: "flex", gap: 12, listStyle: "none", padding: 0 }}>
            {!user && (
              <>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
              </>
            )}
            {user && <li><Link to="/dashboard">Dashboard</Link></li>}
          </ul>
        </nav>
      </header>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<p>Welcome to the Ecommerce App</p>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}