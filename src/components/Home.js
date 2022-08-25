import useFetch from "../custom_hooks/useFetch";
import CatergoryList from "./CatergoryList";
import Hero from "./Hero";
import BlogList from "./BlogList";

const Home = () => {

    const { data:blogs , isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">

            <Hero />
            
            <CatergoryList />

            {/* <BlogList blogs = {blogs} /> */}

        </div>
    );
}
 
export default Home;