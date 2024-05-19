import { useEffect } from "react";
import Carousel from "../Components/Carousel";
import Heroes from "./Heroes";
import VolunteerNeedsNow from "./VolunteerNeedsNow";
import CallToAction from "../Components/CallToAction";

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div>
            <Carousel />
            <VolunteerNeedsNow />
            <Heroes />
            <CallToAction />
        </div>
    );
};

export default Home;
