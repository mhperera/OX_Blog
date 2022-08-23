const BlogPreview = ({ title, author, body }) => {

    return (
        <div className="blog-preview">
            <p className="blog-title">{ title }</p>
            <p className="blog-author">{ author }</p>
            <p className="blog-body">{ body +' ...' }</p>
        </div>
    );
    
}
 
export default BlogPreview;