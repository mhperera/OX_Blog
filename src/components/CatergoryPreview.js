import { Link } from "react-router-dom";

const CatergoryPreview = ({name, text, description , id}) => {

    return (

        <div className="catergory-preview card" >

            <div className="card-body text-center bg-defaul text-wrap">
                <Link to={ '/catergories/'+id } >
                    <h5 className="fs-4">{ name }</h5>
                    <p className="fs-6">{ text }</p>
                    <p className="fs-6">#Blogs : { 10 }</p>
                </Link>
            </div>
            
        </div>
    );
}
 
export default CatergoryPreview;