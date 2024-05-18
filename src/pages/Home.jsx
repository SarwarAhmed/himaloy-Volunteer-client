import { useEffect } from "react";
import Carousel from "../Components/Carousel";
import Heroes from "./Heroes";

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div>
            <Carousel />
            <Heroes />
        </div>
    );
};

export default Home;
