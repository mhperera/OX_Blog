import { Link } from "react-router-dom";
import useFetch from "../custom_hooks/useFetch";
import CatergoryPreview from "./CatergoryPreview";

const CatergoryList = () => {

    const { data:catergories , isPending, error } = useFetch('http://localhost:8000/catergories');

    return (
        <div className="catergory-list">

            <div className="container">

                <h1>Catergory List</h1>

                <div className="card-group">
                    { catergories && (

                        catergories.map((catergory) => (

                            // <Link to='/blogs' >
                                <CatergoryPreview 
                                    name = { catergory.name }        
                                    text = { catergory.text }        
                                    description = { catergory.description } 
                                    id = { catergory.id } 
                                    key = { catergory.id }       
                                />
                            // </Link>
                        ))
                    )}
                </div>

            </div>

        </div>
    );
}
 
export default CatergoryList;