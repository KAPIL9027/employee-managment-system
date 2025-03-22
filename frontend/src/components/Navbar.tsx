import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>HONO</h1>
      <div style={{display: "flex", gap: "32px"}}>
        <Link to="/" className="link">Dashboard</Link>
        <Link to="/add" className="link">Add Employee</Link>
      </div>
    </div>
  )
}

export default Navbar
