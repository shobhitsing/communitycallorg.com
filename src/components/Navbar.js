// import {
//   SearchOutlined,
//   FacebookOutlined,
//   InstagramOutlined,
//   YoutubeOutlined,
//   MenuOutlined,
//   CloseOutlined,
// } from "@ant-design/icons";

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [currentPage, setCurrentPage] = useState("home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     setCurrentPage(
//       window.location.pathname === "/"
//         ? "home"
//         : window.location.pathname.slice(1)
//     );
//   }, []);

//   const navLinks = [
//     { name: "Home", url: "/", isActive: currentPage === "home" },
//     { name: "About", url: "/about", isActive: currentPage === "about" },
//     { name: "Event", url: "/event", isActive: currentPage === "event" },
//     { name: "Contact", url: "/contact", isActive: currentPage === "contact" },
//   ];

//   return (
//     <nav className="bg-[#F7C6C7] text-black border-b-4 border-black">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//         <img
//           src="/images/logo-removebg-preview.png"
//           alt="Logo"
//           className="h-16 w-auto object-contain"
//         />
//         <div className="hidden md:flex flex-col gap-3 flex-1 max-w-2xl ml-12">
//           <div className="flex justify-end gap-4">
//             <a href="https://www.facebook.com/communitycall1/" target="_blank">
//               <FacebookOutlined className="text-lg hover:text-gray-700 transition cursor-pointer" />
//             </a>

//             <a href="https://www.instagram.com/communitycall1/" target="_blank">
//               <InstagramOutlined className="text-lg hover:text-gray-700 transition cursor-pointer" />
//             </a>

//             <a
//               href="https://www.youtube.com/channel/UCRXzUll1dWVObdJg106Dixw"
//               target="_blank"
//             >
//               <YoutubeOutlined className="text-lg hover:text-gray-700 transition cursor-pointer" />
//             </a>
//           </div>

//           <div className="flex items-center justify-between">
//             <ul className="flex gap-8">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.url}
//                     className={`font-semibold text-base transition-all duration-300 ${
//                       link.isActive
//                         ? "border-b-2 border-black pb-1"
//                         : "hover:border-b-2 hover:border-black pb-1"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             <div className="flex items-center gap-3">
//               <SearchOutlined className="text-lg hover:text-gray-700 cursor-pointer transition" />
//               <button className="font-semibold text-base hover:underline transition">
//                 Donate Now
//               </button>
//             </div>
//           </div>
//         </div>

//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-[#F7C6C7] border-t-2 border-black px-6 py-4 space-y-5">
//           <div className="flex justify-center gap-6">
//             <FacebookOutlined className="text-xl" />
//             <InstagramOutlined className="text-xl" />
//             <YoutubeOutlined className="text-xl" />
//           </div>

//           <ul className="flex flex-col items-center gap-4">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   to={link.url}
//                   onClick={() => setMenuOpen(false)}
//                   className={`font-semibold text-lg ${
//                     link.isActive && "border-b-2 border-black"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="flex justify-center gap-4 pt-3">
//             <SearchOutlined className="text-xl cursor-pointer" />
//             <button className="font-semibold text-lg underline">
//               Donate Now
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Search, Facebook, Instagram, Youtube, Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setCurrentPage(
      window.location.pathname === '/'
        ? 'home'
        : window.location.pathname.slice(1)
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigate = useNavigate();
  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Event', url: '/event' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-animated-gradient bg-[length:200%_200%] animate-gradient-x text-gray-900 transition-all duration-300 ${scrolled ? 'border-b-2' : 'border-b-4'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-4 logoFix">
            <img
              src="/images/logo-removebg-preview.png"
              alt="Logo"
              className="h-21 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="hidden lg:flex items-center gap-12 flex-1 justify-end">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {/* <a
                    href={link.url}
                    className={`relative font-bold text-base tracking-wide transition-all duration-300 group ${link.isActive ? 'text-black' : 'text-gray-700 hover:text-black'
                      }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform transition-all duration-300 ${link.isActive
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                    />
                  </a> */}
                  <a
                    href={link.url}
                    className={`font-semibold text-base transition-colors duration-300
                      ${currentPage === link.url.slice(1) || (link.url === '/' && currentPage === 'home')
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 rounded bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out
                    ${currentPage === link.url.slice(1) || (link.url === '/' && currentPage === 'home') ? 'scale-x-100' : ''}`}
                    />
                  </a>

                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-black/10 rounded-full transition-all duration-300">
                  <Search className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/communitycall1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-black/10 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/communitycall1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-black/10 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCRXzUll1dWVObdJg106Dixw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-black/10 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>


              <button className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-md"
                onClick={() => navigate("/donate")}
              >
                <Heart className="w-4 h-4 fill-current" />
                Donate Now
              </button>
            </div>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-black/10 rounded-lg transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white/50 backdrop-blur-sm border-t-2 border-black px-6 py-6 space-y-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  onClick={() => setMenuOpen(false)}
                  className={`block font-bold text-lg py-2 px-4 rounded-lg transition-all duration-300 ${link.isActive
                    ? 'bg-black text-white'
                    : 'hover:bg-black/10 text-gray-700'
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 pt-4 border-t-2 border-black/20">
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/communitycall1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/10 hover:bg-black/20 rounded-full transition-all duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/communitycall1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/10 hover:bg-black/20 rounded-full transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCRXzUll1dWVObdJg106Dixw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/10 hover:bg-black/20 rounded-full transition-all duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-all duration-300 shadow-md mx-auto w-full max-w-xs">
              <Heart className="w-5 h-5 fill-current" />
              Donate Now
            </button>

            <button className="flex items-center justify-center gap-2 border-2 border-black px-6 py-3 rounded-full font-bold text-base hover:bg-black/10 transition-all duration-300 mx-auto w-full max-w-xs">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
