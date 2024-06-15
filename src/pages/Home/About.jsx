import about1 from "../../assets/images/about_us/person.jpg";
import about2 from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="flex justify-center items-center gap-16 py-20">
      <div className="relative">
        <img src={about1} className="max-w-[490px] h-[450px] object-cover rounded-lg" />
        <img src={about2} className="max-w-80 h-64 object-cover absolute -bottom-14 -right-14 border-8 border-white rounded-lg"/>
      </div>

      <div className="flex flex-col gap-5 items-start px-16">
        <h3 className="font-bold text-xl text-[#FF3811]">About Us</h3>
        <h2 className="text-[#151515] font-bold text-4xl">We are qualified & of experience in this field</h2>

        <p className="text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
        <button className="text-white hover:text-[#FF3811]  text-sm font-semibold py-4 px-7 rounded-md border border-[#FF3811] hover:border-[#FF3811]   bg-[#FF3811] hover:bg-transparent transition-all">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
