import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="pokemon">¿Quién es ese pokémon?</NavLink>
        </li>
        <li>
          <NavLink to="memotest">Memotest</NavLink>
        </li>
        <li>
          <NavLink to="wpm">¿Tipeamos?</NavLink>
        </li>
        <li>
          <NavLink to="feriados">Feriados</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
