import React, { Suspense } from "react";
import Loading from "./Loading";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AnimatedPresence from "../components/AnimatedPresence";
import ScrollToTop from "../components/ScrollToTop";

const PageToRender: React.FC = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden font-sans">
      <div className="w-screen min-h-screen bg-gray-50 p-8">
        <Header />
        <ScrollToTop />

        <div
          className="w-full h-48 my-4 flex justify-center items-center relative"
          style={{
            backgroundImage: `url('./background/our-story-bg.png')`,
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
            Our Story
          </h2>
        </div>

        <div className="mt-6 p-8 bg-white shadow-xl w-full mx-auto">
          <div className="space-y-12">
            {/* Text and Image for First Paragraph */}
            <div>
              <p className="text-lg text-gray-700 mb-6 ">
                Welcome to McKing’s! Our journey began with a shared passion for
                food, hospitality, and bringing people together over delicious,
                mouth-watering meals. Founded in 2020, McKing’s started as a
                small food stall in the heart of the city, quickly gaining
                popularity due to our commitment to quality ingredients and an
                unforgettable dining experience. Since then, we have grown into
                a beloved establishment, now serving a wide variety of dishes
                with a focus on fresh, local ingredients.
              </p>
              <div className="relative ">
                <img
                  src="/background/food-stall.png"
                  alt="Food Stall"
                  className="w-full h-96 object-cover bg-top"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
                <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
                  Our Beginnings
                </div>
              </div>
            </div>

            {/* Text and Image for Second Paragraph */}
            <div>
              <p className="text-lg text-gray-700 mb-6">
                At McKing’s, we believe that food should be more than just a
                meal—it should be an experience. Our chefs, passionate about the
                art of cooking, prepare each dish with love and dedication to
                ensure every bite is as memorable as the last. From our
                signature pasta dishes to our hearty grilled meats and decadent
                desserts, each plate tells a story.
              </p>
              <div className="relative ">
                <img
                  src="/background/pro-cook.png"
                  alt="Chef Cooking"
                  className="w-full h-96 object-cover bg-top"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
                <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
                  Passion for Cooking
                </div>
              </div>
            </div>

            {/* Text and Image for Third Paragraph */}
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is simple: to create a space where families,
                friends, and food lovers can come together, share great moments,
                and enjoy amazing food. Whether it’s your first time with us or
                you’ve been a regular for years, we’re committed to making every
                visit a special one.
              </p>
              <div className="relative ">
                <img
                  src="/background/people-eating.png"
                  alt="Friends Eating"
                  className="w-full h-96 object-cover bg-top"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
                <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
                  Sharing Great Moments
                </div>
              </div>
            </div>

            {/* Text and Image for Fourth Paragraph */}
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Thank you for being a part of our story. We look forward to
                serving you and continuing to build this community with each
                delicious meal we create!
              </p>
              <div className="relative ">
                <img
                  src="/background/comm.png"
                  alt="Community Gathering"
                  className="w-full h-96 object-cover bg-top"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
                <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
                  Building a Community
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <AnimatedPresence>
      <Suspense fallback={<Loading />}>
        <PageToRender />
      </Suspense>
    </AnimatedPresence>
  );
};

export default AboutPage;
