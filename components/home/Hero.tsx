import scooter from "../../public/images/scooter/2.png";
import Image from "next/image";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section className="banner2">
      <div className=" py-10 container mx-auto">
        <div className="flex justify-between items-center flex-col lg:flex-row-reverse">
          <Image
            src={scooter}
            className="hidden rounded-lg lg:block flex-1"
            alt=""
          />
          <div className=" flex-1">
            <h1 className="text-5xl font-bold">
              Make Your Ride
              <br />
              Easy And Affordable
            </h1>
            <p className="py-10">
              Discover the Freedom of Unlock Your Urban Adventure Discover the
              Freedom of Renting.Unlock Your Urban Adventure Discover the
              Freedom of Renting.
            </p>
            <div className="flex space-x-4">
              <Button title="Get Started"></Button>
              <button className="btn btn-outline">Explore More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
