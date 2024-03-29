import { steps } from "@/src/constants";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="  ">
      <div className="py-10">
        <div className="container mx-auto">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-center text-white  mb-4">
              How <span className="text-[#1ECB15]">It Works_</span>
            </h2>
            <h2 className="text-gray-300 font-light text-center  mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, nemo enim numquam <br /> distinctio eum earum mollitia
              ratione pariatur quibusdam, aperiam qui
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <>
                <div
                  key={step.id}
                  className="card shadow-md hover:shadow-xl p-6 gap-4 flex items-center flex-col "
                >
                  <div className="rounded-full  p-6 border border-[#1ECB15] ">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="text-center text-gray-100">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    {/* <p className="text-gray-300">{step.description}</p> */}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
