import { whyChooseUs } from "@/src/constants";
import { AiFillSetting } from "react-icons/ai";

const WhyChooseUs = () => {
  return (
    <section className="my-20 py-10 px-4 lg:p-0">
      <div className="container mx-auto">
        <h2 className="font-header text-3xl font-semibold text-center text-white mb-2">
          Why <span className="text-green-700">Choose Us</span>
        </h2>
        <p className="font-body  text-center text-gray-300 mb-8">
          Unbelievable support you can't imagine. so you should try our service.
        </p>
        <hr className="my-6 text-gray-300 w-2/4 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <div
              key={item.id}
              className="card  shadow-md p-6 mx-2 flex items-center"
            >
              <div className="text-center">
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
