 "use client";

import { useState } from "react";
import { PrismicNextLink } from '@prismicio/next';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function MobileNav({ items }: { items: any[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 text-gray-600 focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? (<FaTimes className="w-6 h-6" />) : (<FaBars className="w-6 h-6" />)} 
        
      </button>

      
      {isOpen && (
        <div className="absolute top-30 left-0 right-0 z-50 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-8 flex flex-col space-y-4 text-gray-400 font-semibold tracking-wide text-sm">
          {items.map((item, index) => (
            <div key={index} onClick={() => setIsOpen(false)}>
              <PrismicNextLink
                field={item.link[0]}
                className="block py-2 hover:text-gray-800 transition-colors"
              >
                {item.label?.toUpperCase()}
              </PrismicNextLink>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}