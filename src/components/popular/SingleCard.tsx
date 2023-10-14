// import Image from "next/image";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
type Props = {
  id: number;
  image?: any;
  model: string;
  rating: number;
  transmission: string;
  fuelType: string;
  power: string;
  year: number;
  capacity: string;
  location: string;
  price: string;
};

const SingleCard = ({
  id,
  image,
  model,
  rating,
  transmission,
  fuelType,
  power,
  year,
  capacity,
  location,
  price,
}: Props) => {
  return (
    <section className="card   bg-base-100 shadow-xl">
      <div className="relative">
        <div className="overflow-hidden mx-10  h-[300px] rounded-lg">
          <img
            src={image}
            alt="Image"
            className="transform w-full transition-transform duration-500 hover:scale-150"
          />
        </div>
      </div>

      <div className=" px-10 py-5 items-center text-center">
        <div className="mb-4">
          <h2 className="card-title text-xl text-gray-100">{model}</h2>
          <hr className="my-2 text-gray-300" />
        </div>
        <div className="grid gap-2  grid-cols-3 my-4 text-gray-300">
          <div className="flex gap-2 items-center ">
            <MdOutlineSpeed></MdOutlineSpeed>
            {power}
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineSpeed></MdOutlineSpeed>
            {transmission}
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineSpeed></MdOutlineSpeed>
            {fuelType}
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineSpeed></MdOutlineSpeed>
            {year}
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineSpeed></MdOutlineSpeed>
            {power}
          </div>

          <div className="flex gap-2 items-center">
            <MdOutlineSpeed></MdOutlineSpeed>
            {capacity}
          </div>
        </div>
        <div className="w-full ">
          <div className="flex justify-between items-center bg-opacity-10  bg-gray-900 w-full p-3 font-semibold rounded-sm mb-2">
            <p className="flex gap-2 items-center ">
              <MdOutlineLocationOn className="text-white" />
              <span className="text-sm  text-gray-300">{location}</span>
            </p>
            <div className="">
              <p className="text-green-600 text-xl">{price}</p>
            </div>
          </div>
          <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 w-full p-3 font-bold rounded-md text-xl">
            Rent Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
