import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            
            <Link to="/">
                <div className="logo">OX Blog</div>
            </Link>

            <Link to="/create">
                <button>New Blog</button>
            </Link>   
             
        </div>
    );
    
}
 
export default Navbar;