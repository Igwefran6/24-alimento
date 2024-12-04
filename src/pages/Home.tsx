import React, { Suspense, useState } from "react";
import Loading from "./Loading";
import { Cross } from "hamburger-react";
import { Phone, Timer, TimerIcon, UtensilsCrossedIcon } from "lucide-react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import Menus from "../components/Menus";
import Footer from "../components/Footer";
import AnimatedPresence from "../components/AnimatedPresence";
import ScrollToTop from "../components/ScrollToTop";

const PageToRender: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="min-h-screen selection:bg-gold-dark overflow-x-hidden font-sans">
      <Menus showMenu={showMenu} />
      <ScrollToTop />
      {/* Hero section */}
      <section
        className="w-screen h-screen p-8"
        style={{
          backgroundImage: `
      linear-gradient(rgba(255, 215, 0, .2), rgba(255, 215, 0, 0.6)),
      url('./background/home.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute h-screen top-0 left-0 w-full"
          style={{
            backgroundColor: "#444",
            mixBlendMode: "overlay",
          }}
        />
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="text-4xl md:text-6xl lg:text-8xl font-bold font-Gambarino drop-shadow-xl">
              <p className="text-ivory">McKing's</p>{" "}
              <p className="text-ivory">Restaurant</p>{" "}
              <p className="text-ivory">& Bar</p>
            </div>
            <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-ivory fixed top-12 right-12 z-50 ">
              <Cross onToggle={() => setShowMenu((prev) => !prev)} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 justify-between text-ivory lg:font-semibold px-1 text-5xl allura-regular">
            <div className="flex gap-2 drop-shadow-lg">
              <TimerIcon size={38} />
              <div>
                <p>Monday to Saturday</p>
                <p>08:00 - 20:00</p>
              </div>
            </div>
            <div className="flex gap-2 drop-shadow-lg">
              <UtensilsCrossedIcon size={38} />
              <div>
                <p>Delicious and Savory Meals.</p>
                <p>
                  <span className="underline hover:opacity-50 cursor-pointer">
                    Dine with us
                  </span>{" "}
                  or{" "}
                  <span className="underline hover:opacity-50 cursor-pointer">
                    pick-up.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food display */}
      <section className="p-8 border-8 border-gold bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 text-gray-950">
          <div className="h-80 flex flex-col items-center justify-center">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/food/cocktail.png"
                alt="Image 1"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="w-full flex justify-between px-1 text-2xl allura-regular">
              <p>Cocktails</p>
              <p className="opacity-85">Starts at $18</p>
            </div>
          </div>
          <div className="h-80 lg:h-96 flex flex-col items-center justify-center">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/food/dessert.png"
                alt="Image 2"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="w-full flex justify-between px-1 text-2xl allura-regular">
              <p>Desserts</p>
              <p className="opacity-85">Starts at $12</p>
            </div>
          </div>
          <div className="h-80 flex flex-col items-center justify-center ">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/food/full-meal.png"
                alt="Image 3"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="w-full flex justify-between px-1 text-2xl allura-regular">
              <p>Full meal</p>
              <p className="opacity-85">Starts at $22</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-12">
          <Button
            label="See Our Menu"
            labelColor="gray-950"
            color="gold"
            path="/menu"
          />
        </div>
      </section>
      <section className="relative bg-gold">
        <div className="flex h-screen flex-col-reverse lg:flex-row border-8 border-gold border-t-0  text-white">
          <div className="lg:w-1/2 lg:h-full  p-8 flex flex-col justify-between">
            <h2 className="text-3xl allura-regular font-semibold mb-8">
              Our Location
            </h2>
            <div className="text-3xl allura-regular font-semibold">
              <h2 className="text-5xl lg:text-6xl font-semibold max-w-72 mb-4">
                Magasinsgatan 25 Göteborg
              </h2>
              <span className="underline hover:opacity-75 mb-4 inline-block cursor-pointer">
                See map
              </span>
              <div className="flex gap-2">
                <Timer size={34} />
                <div>
                  <p>Monday to Saturday</p>
                  <p>08:00 - 20:00</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Phone size={30} />
                <p>080000000</p>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 h-full bg-gold p-8 overflow-hidden lg:rounded-l-3xl relative"
            style={{
              backgroundImage: "url('/background/chef.png')",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="absolute h-screen top-0 left-0 w-full"
              style={{
                backgroundColor: "#444",
                mixBlendMode: "overlay",
              }}
            />
            <div className="h-full w-full flex flex-col gap-8 justify-center items-center z-10">
              <h3 className="font-Gambarino text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:max-w-[300px] md:max-w-[480px] lg:max-w-[680px] text-center p-2 backdrop-blur-sm">
                World class cuisine
              </h3>
              <Button
                label="See Food Gallery"
                labelColor="white"
                color="gold"
                path="/gallery"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <motion.div
          className="h-screen w-full  flex flex-col items-center justify-center gap-4  p-8 text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 215, 0, .0), rgba(255, 215, 0, 0.4)),url('/background/people-eating.png')",
            backgroundSize: "cover",
            backgroundPosition: "right top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute h-screen top-0 left-0 w-full"
            style={{
              backgroundColor: "#444",
              mixBlendMode: "overlay",
            }}
          ></div>
          <h2 className="font-Gambarino text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:max-w-[300px] md:max-w-[480px] lg:max-w-[680px] text-center p-2 backdrop-blur-sm">
            Expertly crafted cuisine of the highest quality using sustainable
            ingredients.
          </h2>
          <Button
            label="See Our Story"
            labelColor="white"
            color="gold"
            path="/our-story"
          />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <AnimatedPresence>
      <Suspense fallback={<Loading />}>
        <PageToRender />
      </Suspense>
    </AnimatedPresence>
  );
};

export default HomePage;
