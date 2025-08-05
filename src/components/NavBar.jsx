import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand"  to="/">
          UseContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
             <NavLink to="/" label="Home" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
            </NavLink>
            <NavLink to="/about" label="About" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Abount
            </NavLink>     
            <NavLink to="/login" label="Login" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Login
            </NavLink> 
          </ul>
        </div>
      </div>
    </nav>
  );
};
