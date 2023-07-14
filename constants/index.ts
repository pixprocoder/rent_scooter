import icon from "../public/images/Icons/expertise.png";

export const navLinks = [
  { href: "/", key: "Home" },
  { href: "/", key: "Services" },
  { href: "/", key: "About" },
  { href: "/", key: "Contact Us" },
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
    icon: icon,
  },
  {
    id: 2,
    step: "Step 2",
    title: "Make a Reservation",
    description:
      "Reserve the selected scooter by specifying the desired rental duration and providing your contact details.",
    icon: icon,
    bgColor: "bg-red-800",
  },
  {
    id: 3,
    step: "Step 3",
    title: "Pick Up the Scooter",
    description:
      "Visit our rental location at the designated time to collect your reserved scooter. Bring your ID and any required documents.",
    icon: icon,
  },
  {
    id: 4,
    step: "Step 4",
    title: "Enjoy Your Ride",
    description:
      "Take the scooter for a ride and explore your desired destinations. Have a memorable experience on our reliable scooters.",
    icon: icon,
  },
  {
    id: 5,
    step: "Step 5",
    title: "Return the Scooter",
    description:
      "Return the scooter to our rental location at the agreed time. Our staff will inspect the scooter and complete the return process.",
    icon: icon,
  },
];
