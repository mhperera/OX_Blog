import BlogPreview from "./BlogPreview";

const BlogList = ({blogs}) => {

    return (
        <div className="blog-list">
            
            <div className="row">
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
 
export default BlogList;