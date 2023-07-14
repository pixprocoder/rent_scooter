// import Image from "next/image";
import { MdOutlineSpeed } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
type Props = {
  id: number;
  image: string;
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
    <section className="card  bg-base-100 shadow-xl">
      <div className="relative">
        <div className="overflow-hidden mx-10 rounded-lg">
          <img
            src={image}
            alt="Image"
            // layout="fill"
            // objectFit="cover"
            className="transform  transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className=" px-10 py-5 items-center text-center">
        <div className="mb-4">
          <h2 className="card-title">{model}</h2>
          <div className="flex gap-1">
            <AiFillStar className=" text-xl mt-2 text-yellow-400"></AiFillStar>
            <AiFillStar className=" text-xl mt-2 text-yellow-400"></AiFillStar>
            <AiFillStar className=" text-xl mt-2 text-yellow-400"></AiFillStar>
            <AiFillStar className=" text-xl mt-2 text-yellow-400"></AiFillStar>
            <AiFillStar className=" text-xl mt-2 text-yellow-400"></AiFillStar>
          </div>

          <hr className="my-2" />
        </div>
        <div className="grid gap-4  grid-cols-3 my-4">
          <div className="flex gap-2 items-center">
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
          <div className="flex justify-between items-center  bg-gray-50 w-full p-3 font-semibold rounded-sm mb-2">
            <p className="flex gap-2 items-center ">
              <MdOutlineLocationOn />
              <span className="text-sm text-opacity-50">{location}</span>
            </p>
            <div className="">
              <p className="text-red-600 text-xl">{price}</p>
            </div>
          </div>
          <button className=" bg-black text-white w-full p-3 font-semibold rounded-md text-xl">
            Rent Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;