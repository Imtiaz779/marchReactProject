import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav  className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}

        <div  className="flex items-center gap-1 cursor-pointer">

          <div  className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div  className="w-4 h-4 bg-red-500 rounded-full -ml-2 hover:opacity-75 transition-opacity"></div>

        </div>

        
         {/* mobile menu  */}
        <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {
                isMenuOpen ?  <IoClose  className="size-6"/> :  
                <IoMdMenu className="size-6" />
            }
          </button>
        

        {/* desktop navigation */}

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* get in touch */}

        <div>
          <button className="hidden md:block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
            <a href="#newsletter">Get in touch</a>
          </button>
        </div>

       

        
      </div>

      {/* mobile menu items  */}
      {
        isMenuOpen && (
            <div className="md:hidden border-t bg-white border-rose-100 py-4">
                  <div className=" container mx-auto px-4 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => {setActiveLink(link.href);
                setIsMenuOpen(false);
              }}
              className={`block text-sm py-2 font-medium ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
           <button className="w-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
            <a href="#newsletter">Get in touch</a>
          </button>
        </div>
            </div>
        )
      }

    </nav>
  );
};

export default Navbar;
