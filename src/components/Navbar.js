import {
  SearchOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    setCurrentPage(
      window.location.pathname === "/" 
        ? "home" 
        : window.location.pathname.slice(1)
    );
  }, []);

  const navLinks = [
    { name: "Home", url: "/", isActive: currentPage === "home" },
    { name: "About", url: "/about", isActive: currentPage === "about" },
    { name: "Event", url: "/event", isActive: currentPage === "event" },
    { name: "Contact", url: "/contact", isActive: currentPage === "contact" },
  ];

  return (
    <nav className="bg-[#F7C6C7] text-black border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <img
          src="/images/logo-removebg-preview.png"
          alt="Logo"
          className="max-h-60 w-68 object-contain"
        />

        <div className="flex flex-col gap-3 flex-1 max-w-2xl ml-12">
          <div className="flex justify-end gap-4">
            <FacebookOutlined className="text-lg hover:text-gray-700 cursor-pointer transition" />
            <InstagramOutlined className="text-lg hover:text-gray-700 cursor-pointer transition" />
            <TwitterOutlined className="text-lg hover:text-gray-700 cursor-pointer transition" />
          </div>

          <div className="flex items-center justify-between">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className={`font-semibold text-base transition-all duration-300 ${
                      link.isActive
                        ? "border-b-2 border-black pb-1"
                        : "hover:border-b-2 hover:border-black pb-1"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 ml-8">
              <SearchOutlined className="text-lg hover:text-gray-700 cursor-pointer transition" />
              <button className="font-semibold text-base hover:underline transition">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
