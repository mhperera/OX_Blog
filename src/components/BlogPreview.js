const BlogPreview = ({ title, author, body }) => {

    return (
        <div className="col-sm-4 p-0">
            <div className="card">
                <img src="./assets/images/blog_images/sample.jpg" class="card-img-top" alt="..."></img>
                <div className="blog-preview card-body">
                    <p className="card-title blog-title">{ title }</p>
                    <p className="card-text blog-author">{ author }</p>
                    <p className="card-text blog-body">{ body }</p>
                    <button className="float-end">Read More</button>
                </div>
            </div>
        </div>
    );
    
}
 
export default BlogPreview;