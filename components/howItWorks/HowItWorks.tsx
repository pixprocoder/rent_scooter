import { steps } from "@/constants";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className=" bg-[#fbfbfb] ">
      <div className="py-10">
        <div className="container mx-auto">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#64CCC5] mb-4">
              How It Works
            </h2>
            <h2 className=" font-light text-center text-black mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, nemo enim numquam <br /> distinctio eum earum mollitia
              ratione pariatur quibusdam, aperiam qui
            </h2>
            <hr className="my-6 w-2/4 mx-auto " />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <>
                <div
                  key={step.id}
                  className="card bg-gray-200 shadow-md p-6 mx-2 flex items-center"
                >
                  <div className="rounded-full  p-6 ">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p>{step.description}</p>
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
