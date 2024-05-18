import { useEffect } from "react";
import Carousel from "../Components/Carousel";
import Heroes from "./Heroes";
import VolunteerNeedsNow from "./VolunteerNeedsNow";

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div>
            <Carousel />
            <VolunteerNeedsNow />
            <Heroes />
        </div>
    );
};

export default Home;
