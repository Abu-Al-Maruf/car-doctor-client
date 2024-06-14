import About from "./About";
import Slider from "./Slider/Slider";

const Home  = () => {
    return (
        <div className="px-16 py-4">
            <Slider></Slider>
            <About></About>
        </div>
    );
};

export default Home ;