const Services = () => {
  return (
    <section className="my-20 py-10 px-4 lg:p-0">
      <div className="container mx-auto">
        <div className="my-10">
          <h2 className="font-header  text-4xl font-bold text-center mb-2">
            Our <span className="text-[#64CCC5]">Services</span>
          </h2>
          <p className="font-body text-center">
            Choose from hourly, daily, or weekly rental plans
          </p>
          <hr className="my-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Flexible Rental Options
            </h3>
            <p className="font-body">
              Choose from hourly, daily, or weekly rental plans to fit your
              needs. We offer flexible options for any duration.
            </p>
          </div>
          <div className=" rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Wide Scooter Selection
            </h3>
            <p>
              Explore our wide range of scooters, from economical options to
              premium models. Find the perfect scooter for your ride.
            </p>
          </div>
          <div className=" rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Convenient Pickup and Return
            </h3>
            <p>
              Enjoy hassle-free pickup and return processes. Our locations are
              strategically placed for your convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
