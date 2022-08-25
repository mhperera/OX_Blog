import useFetch from "../custom_hooks/useFetch";
import BlogList from "./BlogList";
import BlogPreview from "./BlogPreview";
import Hero from "./Hero";

const Home = () => {

    const { data:blogs , isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">

            <Hero />

            {/* <BlogList blogs = {blogs} /> */}

        </div>
    );
}
 
export default Home;