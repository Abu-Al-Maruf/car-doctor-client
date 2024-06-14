const SliderContent = () => {
  return (
    <div className="absolute rounded-lg bg-black/40 w-full h-full flex flex-col gap-7 items-start p-24 text-white">
      <h1 className="font-bold text-6xl w-2/5">
        Affordable Price For Car Servicing
      </h1>
      <p className="text-lg w-2/5 ">
        There are many variations of passages of available, but the majority
        have suffered alteration in some form
      </p>
      <div className="flex gap-5 items-center">
        <button className="hover:text-white text-sm font-semibold py-4 px-7 rounded-md border border-[#FF3811] hover:border-white text-white bg-[#FF3811] hover:bg-transparent transition-all">
          Discover More
        </button>
        <button className="text-white text-sm font-semibold py-4 px-7 rounded-md border border-white hover:border-[#FF3811]  hover:bg-[#FF3811] transition-all">
          Latest Project
        </button>
      </div>
    </div>
  );
};

export default SliderContent;
