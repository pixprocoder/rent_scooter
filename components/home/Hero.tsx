import scooter from "../../public/images/scooter/car.png";
import Image from "next/image";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section className="banner2 py-6 lg:py-60">
      <div className=" text-center ">
        <div className=" px-4 lg:p-0 flex justify-between items-center flex-col lg:flex-row-reverse">
          {/* <Image
            src={scooter}
            className="hidden rounded-lg lg:block flex-1 "
            alt=""
          /> */}
          <div className=" flex-1">
            <h1 className="text-4xl lg:text-7xl    font-bold font-header text-white">
              Make Your Ride
              <br />
              Easy And Affordable
            </h1>
            <p className="py-10 text-white font-body">
              Discover the Freedom of Unlock Your Urban Adventure Discover the
              Freedom of Renting.Unlock Your Urban Adventure Discover the
              Freedom of Renting.
            </p>
            <Button title="Explore More"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
