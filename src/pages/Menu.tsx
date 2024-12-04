import React, { Suspense } from "react";
import Loading from "./Loading";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AnimatedPresence from "../components/AnimatedPresence";

const menuItems = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    price: "$12.99",
    image: "/food/full-meal.png",
    description:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
  {
    id: 2,
    name: "Caesar Salad",
    price: "$9.99",
    image: "/food/salad.png",
    description:
      "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan.",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    price: "$14.49",
    image: "/food/pizza.png",
    description:
      "A simple yet delicious pizza topped with fresh mozzarella, basil, and tomato sauce.",
  },
  {
    id: 4,
    name: "Grilled Chicken",
    price: "$15.99",
    image: "/food/grilled-chicken.png",
    description:
      "Juicy grilled chicken served with a side of roasted vegetables.",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    price: "$6.99",
    image: "/food/dessert.png",
    description: "Decadent chocolate cake with a rich, creamy frosting.",
  },
  {
    id: 6,
    name: "Cocktail",
    price: "$8.49",
    image: "/food/cocktail.png",
    description: "A refreshing mixed drink with a perfect blend of flavors.",
  },
];

const PageToRender: React.FC = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden font-sans">
      <div className="w-screen min-h-screen bg-gray-50 p-8">
        <Header />

        <div
          className="w-full h-48 my-4 flex justify-center items-center relative"
          style={{
            backgroundImage: `url('./background/menu-top-bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {" "}
          <div
            className="absolute h-full top-0 left-0 w-full"
            style={{
              backgroundColor: "#444",
              mixBlendMode: "overlay",
            }}
          />
          <h2 className="text-4xl font-semibold backdrop-blur-md p-4 text-white">
            McKing's Menu
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-white shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600">{item.price}</p>

              {/* Popup Description */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-24 bg-gold text-white text-sm p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 w-64 text-center">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const MenuPage: React.FC = () => {
  return (
    <AnimatedPresence>
      <Suspense fallback={<Loading />}>
        <PageToRender />
      </Suspense>
    </AnimatedPresence>
  );
};

export default MenuPage;
