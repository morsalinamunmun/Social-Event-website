import Banner from "../Shared/Banner/Banner";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import System from "../System/System";
import Cards from "./Cards";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Cards></Cards>
            <System></System>
            <Footer></Footer>
        </div>
    );
};

export default Home;