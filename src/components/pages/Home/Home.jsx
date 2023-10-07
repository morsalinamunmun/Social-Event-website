import Banner from "../Shared/Banner/Banner";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Cards from "./Cards";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Cards></Cards>
            <Footer></Footer>
        </div>
    );
};

export default Home;