import { steps } from "@/constants";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className=" banner2">
      <div className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <>
                <div key={step.id} className="flex items-center">
                  <div className="rounded-full border p-6 ">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
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
