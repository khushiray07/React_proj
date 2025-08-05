import { Link } from "react-router-dom";


export default function Header() {
  return (
    <ul style={{
      display: "flex",
      justifyContent: "right",
      gap: "30px",
      listStyle: "none",
      margin: "10px",
      backgroundColor: "yellow",
      padding: "10px",
      fontSize: "25px",
      fontWeight: "bold"
    }}>
      <li>
        <Link to="/home" style={{ color: "blue", textDecoration: "none" }}>Home</Link>
      </li>
      <li>
        <Link to="/about" style={{ color: "blue", textDecoration: "none" }}>About</Link>
      </li>
      <li>
        <Link to="/contact" style={{ color: "blue", textDecoration: "none" }}>Contact</Link>
      </li>
      <li>
        <Link to="/book" style ={{ color: "blue", textDecoration: "none" }}>Book</Link>
      </li>
    </ul>
  );
}