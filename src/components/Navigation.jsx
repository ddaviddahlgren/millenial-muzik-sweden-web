import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <p className="big-brackets">{`[`}</p>
        <NavLink to={"/"} className="nav-btn">Home</NavLink>
        <NavLink to={"/roster"} className="nav-btn">Roster</NavLink>
        <NavLink to={"/discography"} className="nav-btn">Discography</NavLink>
        <NavLink to={"/about"} className="nav-btn">Our story</NavLink>
        <NavLink to={"/contact"} className="nav-btn">Contact</NavLink>
        <p className="big-brackets">{`]`}</p>
      </nav>
    </>
  );
};

export default Navigation;
