import React, { Suspense, useState } from "react";
import { X } from "lucide-react"; // Ensure the `X` icon is imported for the close button
import Footer from "../components/Footer";
import Loading from "./Loading";
import Header from "../components/Header";
import AnimatedPresence from "../components/AnimatedPresence";

const imageLinks = [
  "/food/people1.png",
  "/food/salad.png",
  "/food/pizza.png",
  "/food/person.png",
  "/food/dessert.png",
  "/food/cocktail.png",
  "/food/grilled-chicken.png",
  "/food/full-meal.png",
  "/food/people2.png",
  "/food/pizza.png",
  "/food/people3.png",
  "/food/salad.png",
  "/food/food8.png",
  "/food/food4.png",
  "/food/food-on-table.png",
];

const PageToRender: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (image: string) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="flex flex-col items-center overflow-x-hidden font-sans">
      <div className="w-screen min-h-screen bg-gray-50 p-8">
        <Header />
        <div
          className="w-full h-48 my-4 flex justify-center items-center relative"
          style={{
            backgroundImage: `url('./background/gallery-bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute h-full top-0 left-0 w-full"
            style={{
              backgroundColor: "#444",
              mixBlendMode: "overlay",
            }}
          />
          <h2 className="text-4xl font-semibold backdrop-blur-md p-4 text-white">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {imageLinks.map((image, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer "
              onClick={() => openImage(image)}
            >
              <img
                src={image}
                alt={`Food ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
            <button
              className="absolute top-2 right-2 rounded-full text-white bg-black bg-opacity-50 p-2 hover:bg-opacity-100"
              onClick={closeImage}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Selected Food"
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <AnimatedPresence>
      <Suspense fallback={<Loading />}>
        <PageToRender />
      </Suspense>
    </AnimatedPresence>
  );
};

export default Gallery;
