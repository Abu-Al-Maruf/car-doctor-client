import About from "./About";
import Services from "./Services";
import Slider from "./Slider/Slider";

const Home  = () => {
    return (
        <div className="px-16 py-4">
            <Slider></Slider>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home ;