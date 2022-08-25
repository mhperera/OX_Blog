import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            
            <Link to="/">
                <div className="logo">OX Blog</div>
            </Link>

            <button>New Blog</button>

        </div>
    );
    
}
 
export default Navbar;