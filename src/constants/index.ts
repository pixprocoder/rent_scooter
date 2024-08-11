import icon from "../assets/images/Icons/expertise.png";
import booking from "../assets/images/Icons/booking.png";
import choose from "../assets/images/Icons/choose.png";
import enjoy from "../assets/images/Icons/enjoy.png";
import pickup from "../assets/images/Icons/pickup.png";

export const navLinks = [
  { href: "/", key: "Home" },
  { href: "/car", key: "Cars" },
  { href: "/scooter", key: "Scooters" },
  { href: "/service", key: "Services" },
  { href: "/about", key: "About" },
  { href: "/contact", key: "Contact Us" },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "First Class Services",
    desc: "Our user-friendly platform allows you to book a scooter quickly and effortlessly. It only takes a few simple steps.",
  },
  {
    id: 2,
    title: " 24/7 road assistance",
    desc: "We are here to help you 24/7 hour a day. so don't be wried come to us every time you feel like.",
  },
  {
    id: 3,
    title: "Free Pick-Up & Drop-Off",
    desc: "Our First priority is to give you best car/scooter. just keep an eye when you're taking from us.",
  },
];

export const services = [];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor euismod tortor, vitae tristique nisl aliquam vitae.",
    avatar: "https://avatars.githubusercontent.com/u/89704576?v=4",
  },
  {
    id: 2,
    name: "Jane Smith",
    testimonial:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae felis risus.",
    avatar: "https://avatars.githubusercontent.com/u/89704576?v=4",
  },
  {
    id: 3,
    name: "Mike Johnson",
    testimonial:
      "Fusce elementum, metus id fringilla bibendum, velit metus feugiat metus, sed molestie tellus nisl in odio.",
    avatar: "https://avatars.githubusercontent.com/u/89704576?v=4",
  },
];

export const steps = [
  {
    id: 1,
    step: "Step 1",
    title: "Choose a Scooter",
    description:
      "Browse our selection of scooters and choose the one that suits your preferences and requirements.",
    icon: choose,
  },
  {
    id: 2,
    step: "Step 2",
    title: "Make a Reservation",
    description:
      "Reserve the selected scooter by specifying the desired rental duration and providing your contact details.",
    icon: booking,
    bgColor: "bg-red-800",
  },
  {
    id: 3,
    step: "Step 3",
    title: "Pick Up the Scooter",
    description:
      "Visit our rental location at the designated time to collect your reserved scooter. Bring your ID and any required documents.",
    icon: pickup,
  },
  {
    id: 4,
    step: "Step 4",
    title: "Enjoy Your Ride",
    description:
      "Take the scooter for a ride and explore your desired destinations. Have a memorable experience on our reliable scooters.",
    icon: enjoy,
  },
];

export const carData = [
  {
    id: 1,
    image: "https://i.ibb.co/Vq4txRm/sc.png",
    model: "Toyota Camry SE 350",
    rating: 4.5,
    transmission: "Auto",
    fuelType: "Petrol",
    power: "Power",
    year: 2018,
    capacity: "5 Persons",
    location: "Germany",
    price: "$400 / Day",
  },
  {
    id: 2,
    image: "https://i.ibb.co/Vq4txRm/sc.png",
    model: "Toyota Camry SE 350",
    rating: 4.2,
    transmission: "Auto",
    fuelType: "Petrol",
    power: "Power",
    year: 2019,
    capacity: "4 Persons",
    location: "France",
    price: "$350 / Day",
  },
  {
    id: 3,
    image: "https://i.ibb.co/Vq4txRm/sc.png",
    model: "Toyota Camry SE 350",
    rating: 4.7,
    transmission: "Auto",
    fuelType: "Petrol",
    power: "Power",
    year: 2020,
    capacity: "5 Persons",
    location: "Italy",
    price: "$450 / Day",
  },
  {
    id: 4,
    image: "https://i.ibb.co/Vq4txRm/sc.png",
    model: "Toyota Camry SE 350",
    rating: 4.0,
    transmission: "Auto",
    fuelType: "Petrol",
    power: "Power",
    year: 2018,
    capacity: "3 Persons",
    location: "Spain",
    price: "$300 / Day",
  },
  {
    id: 5,
    image: "https://i.ibb.co/Vq4txRm/sc.png",
    model: "Toyota Camry SE 350",
    rating: 4.9,
    transmission: "Auto",
    fuelType: "Petrol",
    power: "Power",
    year: 2021,
    capacity: "6 Persons",
    location: "Germany",
    price: "$500 / Day",
  },
  {
    id: 6,
    image: "https://i.ibb.co/Vq4txRm/sc.png",
    model: "Toyota Camry SE 350",
    rating: 4.3,
    transmission: "Auto",
    fuelType: "Petrol",
    power: "Power",
    year: 2018,
    capacity: "5 Persons",
    location: "France",
    price: "$380 / Day",
  },
];
