import scooter from "../../public/images/scooter/2.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={scooter}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to Scooter Rental Service
            </h1>
            <p className="py-6">
              Discover the Freedom of Renting Scooters: Unlock Your Urban
              Adventure
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
