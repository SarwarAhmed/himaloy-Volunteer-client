import { useEffect } from "react";
import Carousel from "../Components/Carousel";

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div>
            <Carousel />
        </div>
    );
};

export default Home;
