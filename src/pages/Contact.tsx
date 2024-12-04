import React, { Suspense, useState } from "react";
import Loading from "./Loading";
import { Home, Mail, Phone } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AnimatedPresence from "../components/AnimatedPresence";

// Define the form data interface
interface FormData {
  name: string;
  email: string;
  message: string;
}

const PageToRender: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>("");

  // Handle form input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call or form submission
    try {
      // In a real scenario, you'd send formData to your backend API
      console.log("Form Submitted", formData);
      setStatusMessage(
        "Thank you for contacting us! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatusMessage(
        "There was an error submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden font-sans">
      <div className="w-screen min-h-screen bg-gray-50 p-8">
        <Header />

        <div
          className="w-full h-48 my-4 flex justify-center items-center relative"
          style={{
            backgroundImage: `url('./background/get-in-touch-bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
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
            Get in Touch
          </h2>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold text-gray-700">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 border border-gold focus:outline-none focus:ring-2 focus:ring-gold-light"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 border border-gold focus:outline-none focus:ring-2 focus:ring-gold-light"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 mt-2 border border-gold focus:outline-none focus:ring-2 focus:ring-gold-light"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gold text-white p-3 mt-4 ${
                    isSubmitting ? "bg-gray-700" : "hover:bg-gold-dark"
                  } transition duration-300`}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
              </form>

              {/* Status Message */}
              {statusMessage && (
                <div
                  className={`mt-4 p-3 text-center text-lg ${
                    statusMessage.includes("error")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                Contact Information
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-700">
                  <Phone />
                </span>
                <p className="text-lg text-gray-700">+1 (800) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-700">
                  <Mail />
                </span>
                <p className="text-lg text-gray-700">info@mckings.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-700">
                  <Home />
                </span>
                <p className="text-lg text-gray-700">123 McKing Street, City</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <AnimatedPresence>
      <Suspense fallback={<Loading />}>
        <PageToRender />
      </Suspense>
    </AnimatedPresence>
  );
};

export default ContactPage;
