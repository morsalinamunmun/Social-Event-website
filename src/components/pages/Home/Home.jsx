import Banner from "../Shared/Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import Cards from "./Cards";

const Home = () => {
    return (
        <div>
            <div className="bg-[#FBCFE850]"><Navbar></Navbar></div>
            <Banner></Banner>
            <Cards></Cards>
        </div>
    );
};

export default Home;