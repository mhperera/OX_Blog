import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">

            <h1>Orendax Blog</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id nesciunt odio. Fugit dolores doloribus modi rem dolorum ut tenetur exercitationem ipsa vel? Iure laboriosam perspiciatis voluptates dolorum ullam rem sequi, inventore quae cumque </p>

            <Link to='/blogs' >
                <button>View All Blogs</button>
            </Link>

        </div>
    );
}
 
export default Hero;