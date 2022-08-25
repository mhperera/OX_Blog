import { useParams } from "react-router-dom";
import useFetch from "../custom_hooks/useFetch";
import BlogList from "./BlogList";
import Hero from "./Hero";

const CatergoryDetail = () => {

    const { id } = useParams();
    
    const { data:catergory , isPending1, error1 } = useFetch('http://localhost:8000/catergories/'+ id );

    const { data:blogs , isPending2, error2 } = useFetch('http://localhost:8000/blogs/?catergory_id=' + id);

    return (

        <div className="catergory-detail">

            { catergory && (

                <div className="container">
                    <h1>{ catergory.name }</h1>

                    <p className="fw-bold fst-italic">{ catergory.text }</p>

                    {/* <img src="./../assets/images/blog_images/sample.jpg" className="" alt="..."></img> */}
                    
                    <p>{ catergory.description }</p>

                </div>
            
            )}

            { blogs &&   (
                
                <div className="container">

                    { blogs.length==0 &&   (

                        <p className="fw-bold">No Blogs for this Catergory</p>

                    )}

                    { blogs.length!=0 &&   (

                        <BlogList blogs = {blogs} />

                    )}

                </div>


            )}

            

        </div>
        
    );
}
 
export default CatergoryDetail;