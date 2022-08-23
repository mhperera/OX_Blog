import useFetch from "../custom_hooks/useFetch";
import BlogPreview from "./BlogPreview";

const Home = () => {

    const { data:blogs , isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">

            <h1>All Blog Posts</h1>

            { blogs && (
            
                    blogs.map((blog) => (
                        <BlogPreview 
                            title = { blog.title }  
                            author = { blog.author }  
                            body = { blog.body.substring(0, 150) } 
                            key = { blog.id } 
                        />
                    ))
                    
                )
            }  

        </div>
    );
}
 
export default Home;