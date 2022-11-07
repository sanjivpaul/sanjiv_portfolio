import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav-bar">
          <NavLink
            className="nav-list"
            activeClassName="is-active"
            to="/projects"
          >
            Projects
          </NavLink>

          <NavLink className="nav-list" activeClassName="is-active" to="/">
            Home
          </NavLink>
        </nav>
      </header>
    </>
  );
}
export default Header;
