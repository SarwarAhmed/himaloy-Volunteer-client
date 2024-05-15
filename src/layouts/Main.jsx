import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />

            {/* Outlet */}
            <div className='min-h-[calc(100vh-292px)]'>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Main;
