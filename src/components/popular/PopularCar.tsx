"use client";
import { carData } from "@/src/constants";
import SingleCard from "./SingleCard";
import SwiperCarousel from "../shared/SwiperCarousel";

const PopularCar = () => {
  return (
    <section>
      <div>
        <div className="px-4 lg:px-0">
          <h2 className="text-3xl mt-10 lg:text-5xl font-header font-bold text-center text-white mb-4">
            Explore <span className="text-green-700">Popular vehicles</span>
          </h2>
          <h2 className=" font-light text-center font-body text-gray-300 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nemo enim numquam <br /> distinctio eum earum mollitia ratione
            pariatur quibusdam, aperiam qui
          </h2>
          <hr className="my-6 w-2/4 mx-auto text-gray-300 " />
        </div>

        <div>
          <SwiperCarousel />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carData.map((car) => (
            <SingleCard
              key={car.id}
              id={car.id}
              image={car.image}
              model={car.model}
              rating={car.rating}
              transmission={car.transmission}
              fuelType={car.fuelType}
              power={car.power}
              year={car.year}
              capacity={car.capacity}
              location={car.location}
              price={car.price}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PopularCar;
