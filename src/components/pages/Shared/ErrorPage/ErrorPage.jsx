import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center py-16">
            <h2 className="text-2xl font-bold ">Oops!!! This page Not Available</h2>
            <p>Error: 404, Not found page</p>
            <Link to="/" className="text-sky-500 underline">go Back to home</Link>
        </div>
    );
};

export default ErrorPage;