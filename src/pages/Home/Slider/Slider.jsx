import slider1 from "../../../assets/images/banner/1.jpg";
import slider2 from "../../../assets/images/banner/2.jpg";
import slider3 from "../../../assets/images/banner/3.jpg";
import slider4 from "../../../assets/images/banner/4.jpg";
import slider5 from "../../../assets/images/banner/5.jpg";
import slider6 from "../../../assets/images/banner/6.jpg";
import SliderContent from "./SliderContent";
const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[90vh] ">
        <SliderContent></SliderContent>

        <img src={slider1} className="w-full  object-cover rounded-lg" />
        <div className="absolute flex gap-5 justify-end right-14 bottom-14">
          <a
            href="#slide6"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full h-[90vh]">
        <SliderContent></SliderContent>
        <img src={slider2} className="w-full  object-cover rounded-lg" />
        <div className="absolute flex gap-5 justify-end right-14 bottom-14">
          <a
            href="#slide1"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full h-[90vh]">
        <SliderContent></SliderContent>
        <img src={slider3} className="w-full  object-cover rounded-lg" />
        <div className="absolute flex gap-5 justify-end right-14 bottom-14">
          <a
            href="#slide2"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full h-[90vh]">
        <SliderContent></SliderContent>
        <img src={slider4} className="w-full  object-cover rounded-lg" />
        <div className="absolute flex gap-5 justify-end right-14 bottom-14">
          <a
            href="#slide3"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full h-[90vh]">
        <SliderContent></SliderContent>
        <img src={slider5} className="w-full  object-cover rounded-lg" />
        <div className="absolute flex gap-5 justify-end right-14 bottom-14">
          <a
            href="#slide4"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative w-full h-[90vh]">
        <SliderContent></SliderContent>
        <img src={slider6} className="w-full  object-cover rounded-lg" />
        <div className="absolute flex gap-5 justify-end right-14 bottom-14">
          <a
            href="#slide5"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle text-white bg-black/40 border-0 hover:bg-[#FF3811]"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
