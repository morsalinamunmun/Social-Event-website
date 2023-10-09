import { VscCheck } from "react-icons/vsc";
const System = () => {
    return (
        <div className="py-20 ">
            <div className="flex mx-[18%] gap-10">
                <div className="bg-yellow-500 p-10">
                    <p className="text-xl">Minimum Services</p>
                    <h2 className="text-3xl">50290</h2>
                    <p className="">All Bangladesh in cities</p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-3">Our Service System</h2>
                    <ul>
                        <li className="flex items-center gap-2"><VscCheck></VscCheck>You have to order your preferred category at least 5 days in advance</li>
                        <li className="flex items-center gap-2"><VscCheck></VscCheck>We complete all orders perfectly on time</li>
                        <li className="flex items-center gap-2"><VscCheck></VscCheck>Orders are taken all over Bangladesh</li>
                        <li className="flex items-center gap-2"><VscCheck></VscCheck>Orders outside Dhaka must be taken 10 days n advance</li>
                    </ul>
                    <button className="btn bg-yellow-500 mt-5">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default System;