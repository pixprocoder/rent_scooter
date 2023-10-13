import { steps } from "@/src/constants";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="  ">
      <div className="py-10">
        <div className="container mx-auto">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-center text-green-700 mb-4">
              How It Works
            </h2>
            <h2 className="text-white font-light text-center  mb-8">
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
                  className="card shadow-md p-6 gap-4 flex items-center flex-col "
                >
                  <div className="rounded-full  p-6 bg-slate-500 ">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="text-center text-white">
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
