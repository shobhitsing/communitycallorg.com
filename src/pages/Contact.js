import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("https://your-api-url.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMsg("Message sent successfully.");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setResponseMsg("Failed to send message.");
      }
    } catch (err) {
      setResponseMsg("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div id="contact-us" className="flex flex-col items-center">
        <h1
          className="absolute z-20 text-[var(--primary-color)] m-2 text-4xl pt-4 font-bold"
        >
          Contact Us
        </h1>

        <p className="text-3xl m-14 text-center pt-12">
          We'd love to hear from you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold py-2 px-4 rounded"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {responseMsg && (
            <p className="text-center text-green-600 mt-4 font-semibold">
              {responseMsg}
            </p>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
