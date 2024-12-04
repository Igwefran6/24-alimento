import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Contact, Grid, Heart, Home, UtensilsCrossed } from "lucide-react";

/**
 * ErrorPage component
 *
 * A custom error page displaying a 404 error message,
 * with links to popular pages and a search bar.
 *
 * @returns JSX.Element
 */
const ErrorPage: React.FC = () => {
  return (
    <div className="w-screen min-h-screen mx-auto flex flex-col justify-between bg-white">
      <div className="p-4 md:p-6 lg:p-8">
        {" "}
        <div className="error-header bg-gray-100 p-4 mb-4 rounded-lg">
          <h1 className="text-4xl font-bold">Error 404: Page Not Found</h1>
        </div>
        <div className="error-content">
          <p className="text-lg mb-4">
            Sorry, the page you're looking for cannot be found. Please check the
            URL or try searching for what you're looking for.
          </p>

          <div className="popular-links mb-4">
            <h2 className="text-3xl font-bold mb-4">
              Perhaps you're looking for this pages:
            </h2>
            <ul>
              <li className="mb-2 w-fit">
                <Link
                  to="/"
                  className="text-gold hover:text-gold-dark text-2xl flex gap-2"
                >
                  <Home />
                  <span>Home</span>
                </Link>
              </li>
              <li className="mb-2 w-fit">
                <Link
                  to="/menu"
                  className="text-gold hover:text-gold-dark text-2xl flex gap-2"
                >
                  <UtensilsCrossed />
                  <span>Menu</span>
                </Link>
              </li>
              <li className="mb-2 w-fit">
                <Link
                  to="/contact"
                  className="text-gold hover:text-gold-dark text-2xl flex gap-2"
                >
                  <Contact />
                  <span>Contact</span>
                </Link>
              </li>
              <li className="mb-2 w-fit">
                <Link
                  to="/our-story"
                  className="text-gold hover:text-gold-dark text-2xl flex gap-2"
                >
                  <Heart />
                  <span>Our Story</span>
                </Link>
              </li>
              <li className="mb-2 w-fit">
                <Link
                  to="/gallery"
                  className="text-gold hover:text-gold-dark text-2xl flex gap-2"
                >
                  <Grid />
                  <span>Gallery</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
