"use client";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React, { useEffect, useRef, useState } from "react";

const Scooter = () => {
  const generateUploadUrl = useMutation(api.messages.generateUploadUrl);
  const sendImage = useMutation(api.messages.sendImage);

  const imageInput = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
  async function handleSendImage(event: any) {
    event.preventDefault();

    // Step 1: Get a short-lived upload URL
    const postUrl = await generateUploadUrl();
    // Step 2: POST the file to the URL
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": selectedImage!.type },
      body: selectedImage,
    });
    const { storageId } = await result.json();
    // Step 3: Save the newly allocated storage id to the database
    await sendImage({ storageId, author: name });

    setSelectedImage(null);
    imageInput.current!.value = "";
  }

  const scooters = useQuery(api.scooters.getScooter);
  const initialTime = 1000;
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    // If time reaches zero, stop the timer
    if (time <= 0) return;

    // Set up the interval to update the time every second
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval on component unmount or if time changes
    return () => clearInterval(timerId);
  }, [time]);

  return (
    <div className="container mx-auto min-h-screen ">
      <h1 className="text-white">All scooters</h1>
      <div>
        <h1 className="text-white">Time: {time}</h1>
      </div>

      <div className="bg-gray-500 w-full h-600 p-10">
        <form onSubmit={handleSendImage}>
          <input
            type="file"
            accept="image/*"
            ref={imageInput}
            onChange={(event) => setSelectedImage(event.target.files![0])}
            disabled={selectedImage !== null}
          />
          <input
            className="border rounded-md p-4 cursor-pointer"
            type="submit"
            value="Send Image"
            disabled={selectedImage === null}
          />
        </form>
      </div>
      {scooters?.map((scooter) => (
        <div key={scooter._id} className="text-white">
          {" "}
          <p>{scooter.name}</p>
          <p>{scooter.price}</p>
          <p> {scooter._id}</p>
        </div>
      ))}
    </div>
  );
};

export default Scooter;
