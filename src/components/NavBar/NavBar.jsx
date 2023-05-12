import { Link } from "react-router-dom";
import {TbMovie} from "react-icons/tb"

const NavBar = () => {
  return ( 
    <header>
      <TbMovie style={{width: "50px", height:"50px"}}/>
      <Link to="/movies">Movies</Link>
      <Link to="tv-shows">TV Shows</Link>
      <Link to="search">Search For Movies</Link>
    </header>
  );
}

export default NavBar;