import { Link } from "react-router-dom";

const BlogPreview = ({ title, author, body, id }) => {

    return (
        <div className="col-sm-4 p-0">
            <div className="card">
                {/* <img src="./assets/images/blog_images/sample.jpg" className="card-img-top" alt="..."></img> */}
                <div className="blog-preview card-body">
                    <p className="card-title blog-title">{ title }</p>
                    <p className="card-text blog-author">{ author }</p>
                    <p className="card-text blog-body">{ body }</p>
                    <Link to={ '/blogs/' + id }>
                        <button className="float-end">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
    
}
 
export default BlogPreview;