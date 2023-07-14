<<<<<<< HEAD
import Image from "next/image";
import img from "../../public/images/scooter/4.png";
=======
import React from "react";
>>>>>>> 7bea8c2b4390905805c4ea57348539d4f093d501

const About = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
<<<<<<< HEAD
            <Image src={img} alt="About" className="w-full" />
=======
            <img src="/about-image.png" alt="About" className="w-full" />
>>>>>>> 7bea8c2b4390905805c4ea57348539d4f093d501
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              About Our Scooter Rental Service
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum, dui non dignissim tristique, arcu tellus dignissim
              ligula, nec maximus eros turpis et ligula. Sed ullamcorper iaculis
              mauris auctor volutpat. Proin convallis erat id urna hendrerit, a
              aliquam odio fermentum.
            </p>
            <p className="mb-4">
              Mauris aliquam ipsum quis arcu fringilla, a porta ligula
              malesuada. Ut eget fermentum eros. Cras vestibulum est velit, nec
              fermentum dui bibendum a. Quisque nec convallis tellus. Sed
              tristique tellus eget interdum fermentum.
            </p>
            <a href="/about" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
