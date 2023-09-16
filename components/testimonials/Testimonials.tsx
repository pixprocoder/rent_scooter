"use client";
import { testimonials } from "@/constants";

const Testimonials = () => {
  return (
    <section className="my-20 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl text-[#64CCC5] font-bold text-center mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className=" rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              </div>
              <p>{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
