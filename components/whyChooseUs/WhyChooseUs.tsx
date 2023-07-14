import { AiFillSetting } from "react-icons/ai";

const WhyChooseUs = () => {
  return (
    <section className="py-10 px-4 lg:p-0">
      <div className="container mx-auto">
        <h2 className="font-header text-3xl font-semibold text-center mb-2">
          Why Choose Us
        </h2>
        <p className="font-body  text-center mb-8">
          Unbelievable support you can't imagine. so you should try our service.
        </p>
        <hr className="my-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-gray-200 shadow-md p-6 mx-2 flex items-center">
            <div className="rounded-full border p-6 ">
              <AiFillSetting className="text-7xl mr-4" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                {" "}
                Easy Booking Process
              </h3>
              <p>
                Our user-friendly platform allows you to book a scooter quickly
                and effortlessly. It only takes a few simple steps.
              </p>
            </div>
          </div>
          <div className="card bg-gray-200 shadow-md p-6 mx-2 flex items-center">
            <div className="rounded-full border p-6 ">
              <AiFillSetting className="text-7xl mr-4" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                {" "}
                24/7 Customer Support
              </h3>
              <p>
                Our user-friendly platform allows you to book a scooter quickly
                and effortlessly. It only takes a few simple steps.
              </p>
            </div>
          </div>
          <div className="card bg-gray-200 shadow-md p-6 mx-2 flex items-center">
            <div className="rounded-full border p-6 ">
              <AiFillSetting className="text-7xl mr-4" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2"> Quality Scooters</h3>
              <p>
                Our user-friendly platform allows you to book a scooter quickly
                and effortlessly. It only takes a few simple steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
