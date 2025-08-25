import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useAuth } from "../Context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2>Dashboard</h2>
      <p>Welcome {user?.displayName || user?.email} 🎉</p>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
}