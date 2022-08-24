import useFetch from "../custom_hooks/useFetch";
import BlogPreview from "./BlogPreview";
import Hero from "./Hero";

const Home = () => {

    const { data:blogs , isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">

            <Hero />

            <div className="container row">
                { blogs && (
                
                        blogs.map((blog) => (
                            <BlogPreview 
                                title = { blog.title }  
                                author = { blog.author }  
                                body = { blog.body.substring(0, 150)+' ...' } 
                                key = { blog.id } 
                            />
                        ))
                        
                    )
                } 
            </div>

        </div>
    );
}
 
export default Home;