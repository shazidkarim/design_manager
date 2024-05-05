import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
            <Testimonials></Testimonials>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;