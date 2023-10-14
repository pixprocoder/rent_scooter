import { whyChooseUs } from "@/src/constants";
import Image from "next/image";
import { AiFillSetting } from "react-icons/ai";
import { FaKey, FaRoad, FaTrophy } from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <section className="choose-banner my-20 py-10 px-4 lg:p-0">
      <div className="container mx-auto p-0 lg:py-20 flex-col lg:flex-row flex justify-center items-center">
        <h2 className="font-header text-5xl  font-bold text-center text-white mb-2">
          {" "}
          Let's Your <span className="text-[#1ECB15]">Adventure</span> Begin
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <div
              key={item.id}
              className="card  shadow-md p-6 mx-2 flex flex-col gap-4 justify-start  items-start"
            >
              <div className="rounded-md  p-4  bg-[#1ECB15] ">
                {item.id === 1 ? (
                  <FaTrophy className="text-white text-4xl" />
                ) : item.id === 2 ? (
                  <FaRoad className="text-white text-4xl" />
                ) : (
                  <FaKey className="text-white text-4xl" />
                )}
              </div>
              <div className="">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
