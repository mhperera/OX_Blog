import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../custom_hooks/useFetch";

const CreateBlog = () => {

    const { data:catergories, isPending, error } = useFetch('http://localhost:8000/catergories');

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('S Mario');
    const [ catergoryID, setCatergory ] = useState('Technology');

    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();
        const blog = { title, body, author, catergoryID };
        fetch('http://localhost:8000/blogs',{
            method : 'POST',
            headers : { 'Content-Type':'application/json' },
            body : JSON.stringify(blog)
        })
        .then(()=>{
            history.push('/blogs');
        });

    };

    return (

        <div className="create-blog">

            <div className="container mx-5">

                <h1>Create New Blog</h1>

                <form>

                    <div className="row g-3">

                        <div className="col-3 mb-3">
                            <label htmlFor="title" className="col-form-label">Blog Title</label>
                        </div>

                        <div className="col-6 mb-3">
                            <input 
                                required
                                type="text" 
                                id="title" 
                                className="form-control" 
                                placeholder="Blog Title"
                                value = { title }
                                onChange = { (e)=>{ setTitle(e.target.value); } }
                            />
                        </div>

                    </div>


                    <div className="row g-3">

                        <div className="col-3 mb-3">
                            <label htmlFor="body" className="col-form-label">Blog Body</label>
                        </div>

                        <div className="col-6 mb-3">
                            <textarea 
                                required
                                id="body" 
                                className="form-control" 
                                placeholder="Blog Body"
                                value = { body }
                                onChange = { (e)=>{ setBody(e.target.value); } }
                            >
                            </textarea>
                        </div>

                    </div>

                    <div className="row g-3">

                        <div className="col-3 mb-3">
                            <label htmlFor="author" className="col-form-label">Author</label>
                        </div>

                        <div className="col-6 mb-3">
                            <select 
                                required
                                id="author"
                                className="form-control" 
                                value = { author }
                                onChange = { (e)=>{ setAuthor(e.target.value); } }
                            >
                                <option value="Bucky Robberts">Bucky Robberts</option>
                                <option value="Luke Bean">Luke Bean</option>
                                <option value="Jonathan F">Jonathan F</option>
                                <option value="S Mario">S Mario</option>
                                <option value="John F Kenady">John F Kenady</option>
                                <option value="John F Kenady">John F Kenady</option>
                                <option value="William G">William G</option>
                                <option value="Sarah Lazz">Sarah Lazz</option>

                            </select>
                        </div>

                    </div>

                    <div className="row g-3">

                        <div className="col-3 mb-3">
                            <label htmlFor="catergory" className="col-form-label">Catergory</label>
                        </div>

                        <div className="col-6 mb-3">
                            <select 
                                required
                                id="catergory"
                                className="form-control" 
                                value = { catergoryID }
                                onChange = { (e)=>{ setCatergory(e.target.value); } }
                            >
                                { catergories && (

                                    catergories.map((catergory)=>(
                                        <option value={ catergory.id } key = { catergory.id } >{ catergory.name }</option>
                                    ))

                                )}
                                

                            </select>
                        </div>

                    </div>

                    <button className="" onClick={ (e) => handleSubmit(e) } >Submit</button>

                </form>

            </div>

        </div>

    );
}
 
export default CreateBlog;