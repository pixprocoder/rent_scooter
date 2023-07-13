import { AiFillSetting } from "react-icons/ai";

const Features = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <AiFillSetting className="text-7xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Easy Booking Process
              </h3>
              <p>
                Our user-friendly platform allows you to book a scooter quickly
                and effortlessly. It only takes a few simple steps.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <AiFillSetting className="text-7xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
              <p>
                We offer competitive rates and transparent pricing. Renting a
                scooter has never been so affordable.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <AiFillSetting className="text-7xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                24/7 Customer Support
              </h3>
              <p>
                Our dedicated support team is available 24/7 to assist you with
                any questions or concerns. We're here to help.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <AiFillSetting className="text-7xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Quality Scooters</h3>
              <p>
                We provide well-maintained scooters that undergo regular
                inspections to ensure your safety and comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
