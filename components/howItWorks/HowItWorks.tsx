const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1: Choose a Scooter",
      description:
        "Browse our selection of scooters and choose the one that suits your preferences and requirements.",
      icon: "/step1.png",
    },
    {
      id: 2,
      title: "Step 2: Make a Reservation",
      description:
        "Reserve the selected scooter by specifying the desired rental duration and providing your contact details.",
      icon: "/step2.png",
    },
    {
      id: 3,
      title: "Step 3: Pick Up the Scooter",
      description:
        "Visit our rental location at the designated time to collect your reserved scooter. Bring your ID and any required documents.",
      icon: "/step3.png",
    },
    {
      id: 4,
      title: "Step 4: Enjoy Your Ride",
      description:
        "Take the scooter for a ride and explore your desired destinations. Have a memorable experience on our reliable scooters.",
      icon: "/step4.png",
    },
    {
      id: 5,
      title: "Step 5: Return the Scooter",
      description:
        "Return the scooter to our rental location at the agreed time. Our staff will inspect the scooter and complete the return process.",
      icon: "/step5.png",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center">
              <img
                src={step.icon}
                alt={step.title}
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
