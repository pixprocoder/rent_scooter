import Image from "next/image";
import img from "../../public/images/car.jpg";

const About = () => {
  return (
    <section className="py-10 px-4 lg:p-0 banner2 my-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src={img} alt="About" className="w-full rounded-md" />
          </div>
          <div>
            <h2 className="text-3xl font-header  font-bold text-white mb-4">
              About Our Scooter Rental Service
            </h2>
            <p className="mb-4 font-body text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum, dui non dignissim tristique, arcu tellus dignissim
              ligula, nec maximus eros turpis et ligula. Sed ullamcorper iaculis
              mauris auctor volutpat. Proin convallis erat id urna hendrerit, a
              aliquam odio fermentum.
            </p>

            <a href="/about" className="text-white underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
