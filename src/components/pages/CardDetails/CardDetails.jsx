import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const CardDetails = () => {
    const categories = useLoaderData();
    console.log(categories);
    const {id} = useParams();
    console.log(id)
    const category = categories.find(category=> category.id === (id));
    console.log(category.id)
    return (
        
          <div>
            <Navbar></Navbar>
             <div className="flex justify-center items-center mx-auto py-20">
                <div className="lg:w-2/4 p-5">
                    <h3 className="font-bold text-3xl my-5">{category.category_name}</h3>
                    <img className="w-full lg:h-96" src={category.image_template} alt="" />
                    <div className="flex items-center justify-between py-5">
                         <p className="text-2xl font-semibold">{category.price}</p>
                        <button className=" p-2 rounded  ml-7 bg-pink-500 text-white font-semibold "> Order Now</button>
                    </div>
                    <p className="">{category.description}</p>
                </div>
             </div>
        </div>
    );
};

export default CardDetails;
