import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('/category-data.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    }, [])
    return (
            <div className="bg-yellow-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center py-16">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-10">
                    {
                        categories.map(category=> <Card key={category.id} category={category}></Card>)
                    }
                    </div>
                </div>
            </div>
    );
};

export default Cards;