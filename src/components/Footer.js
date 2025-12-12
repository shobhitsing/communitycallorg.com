import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

const CustomMailIcon = () => {
  return (
    <MailOutlined
      style={{
        color: "var(--primary-color)",
        fontSize: "1.2rem",
        fontWeight: "bold",
      }}
    />
  );
};

const Footer = () => {
  return (
    <footer className="bg-[var(--quaternary-color)] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="space-y-4 pr-6">
          <h2 className="text-2xl font-semibold">Community Call</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            We are committed to delivering support, services, and community-driven 
            initiatives for individuals and families around the world.
          </p>
        </div>
        <div className="space-y-5 px-6">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-gray-200">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Get in Touch</h3>

          <ul className="space-y-2 text-gray-200 text-sm">
            <li>Phone: 3688873248</li>
            <li>
              Email:
              <a
                href="mailto:abv@email.com"
                className="hover:text-white ml-1 underline"
              >
                abv@email.com
              </a>
            </li>
            <li className="max-w-xs leading-relaxed">
              Address: Calgary Alberta Canada, Unit 134,
              2115 27th Ave North East T2E7E4
            </li>
          </ul>

          <div className="pt-3">
            <h4 className="text-lg font-semibold mb-3">Subscribe</h4>
            <Input
              variant="outlined"
              type="email"
              placeholder="Enter your email"
              addonAfter={<CustomMailIcon />}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Community Call. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
