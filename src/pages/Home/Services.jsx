import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);

  console.log(services);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="text-center py-20">
      <div className="flex flex-col gap-5 items-center">
        <h3 className="font-bold text-xl text-[#FF3811]">Service</h3>
        <h2 className="text-[#151515] font-bold text-4xl">Our Service Area</h2>

        <p className="text-[#737373] w-1/2 ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-12 justify-center items-center sm:grid-cols-2 md:grid-cols-3 gap-5 p-10">
        {services.map((service) => (
          <div
            key={service._id}
            className="flex flex-col mx-auto items-start p-6 gap-4 rounded-lg border border-gray-300"
          >
            <img
              src={service.img}
              className="max-w-80 h-52 object-cover rounded-lg"
            />
            <h2 className="font-bold text-2xl text-[#444]">{service.title}</h2>
            <div className="flex justify-between items-center w-full text-[#FF3811]">
              <p className="font-semibold text-lg ">
                Price :<span> ${service.price}</span>
              </p>
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
      <button className="text-[#FF3811] text-sm font-semibold py-4 px-7 rounded-md border border-[#FF3811] hover:text-white hover:bg-[#FF3811] transition-all">
        More Services
      </button>
    </div>
  );
};

export default Services;
