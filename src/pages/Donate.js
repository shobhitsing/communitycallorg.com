import { useState } from "react";
import { Heart } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("https://your-api-url.com/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMsg("Thank you! Your donation has been submitted.");
        setFormData({ name: "", email: "", amount: "", message: "" });
      } else {
        setResponseMsg("Failed to submit donation. Please try again.");
      }
    } catch (err) {
      setResponseMsg("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center py-16 px-4 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Donate Now</h1>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-xl">
          Your support helps us continue our mission. Every donation makes a
          difference.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 py-8"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="amount"
            >
              Donation Amount (₹)
            </label>
            <input
              id="amount"
              type="number"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter Amount"
              required
              min="1"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message"
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a note..."
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-center w-full lg:w-auto">
            <button
              className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-white
               bg-gradient-to-r from-pink-500 via-yellow-400
               hover:from-green-500 hover:via-pink-500 hover:to-yellow-400
               transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Heart className="w-4 h-4 fill-current" />
              Donate Now
            </button>
          </div>
          {responseMsg && (
            <p className="text-center text-green-600 font-semibold mt-4">
              {responseMsg}
            </p>
          )}
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Donate;
