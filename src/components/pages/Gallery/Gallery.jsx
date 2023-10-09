/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";

const Gallery = () => {
    const categories = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto py-20 px-5">
            <h2 className="text-3xl font-bold text-center mb-10">Gallery Design</h2>
           <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
           {
                categories.map(category=> 
                     <><div className="w-90 h-60">
                        <img className="w-full h-full" src={category.image_template} alt="" />
                    </div><div className="w-90 h-60">
                            <img className="w-full h-full" src={category.image} alt="" />
                        </div></>
                    )
            }
           </div>
           <Link to='/' className="text-blue-500 underline mt-16">Go Back</Link>
        </div>
    );
};

export default Gallery;