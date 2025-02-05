import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>Event Organizer</h2>
      <ul>
        <li>
          <NavLink to={"/"}>Meus Eventos</NavLink>
        </li>
        <li>
          <NavLink to={"/party/new"} className="btn">
            Criar Evento
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
