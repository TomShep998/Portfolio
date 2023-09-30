import {Link} from "react-router-dom";

const NavLink = ({path, title}) =>{
    return(

      <li className"> <Link to={path}> {title} </Link></li>
            
        

    )
}
export default NavLink;
