import BlogList from "./BlogList";
import useFetch from "../custom_hooks/useFetch";

const AllBlogs = () => {

    const { data:blogs , isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="all-blogs">

            <div className="container">

                <h1>All Blogs</h1>
        
                <BlogList blogs = { blogs }/>

            </div>

        </div>
    );

}
 
export default AllBlogs;