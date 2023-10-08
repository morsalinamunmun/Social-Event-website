import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const categories = useLoaderData();
    console.log(categories);
    const {id} = useParams();
    console.log(id)
    const category = categories.find(category=> category.id === parseInt(id));
    console.log(category.id)
    return (
        
        <div className="flex justify-center items-center mx-auto py-20">
           <div className="lg:w-2/4 p-5">
                
                <img className="w-full lg:h-96" src={category.image} alt="" />
                <button className=" p-2 rounded  ml-7 ">{category.price}</button>
                <h3 className="font-bold text-2xl my-5">{category.category_name}</h3>
                <p className="">{category.description}</p>
           </div>
        </div>
    );
};

export default CardDetails;
