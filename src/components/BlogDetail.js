import { useParams } from "react-router-dom";
import useFetch from "../custom_hooks/useFetch";

const BlogDetail = () => {

    const {id} = useParams();

    const { data:blog , isPending, error } = useFetch('http://localhost:8000/blogs/'+id);

    console.log(blog);

    return (
        <div className="blog-details">

            { blog &&  (
                <div className="container">    

                    <h1>{ blog.title }</h1> 

                    <p className="fw-bold fst-italic">Written by : { blog.author }</p>

                    <p className="">{ blog.body }</p>

                </div>

            )}
                
        </div>
    );
}
 
export default BlogDetail;