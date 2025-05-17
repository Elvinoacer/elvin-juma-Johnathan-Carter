"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const generalText =
  "Hello Elvin, I came across your contact and I'm interested in discussing a potential project. Are you available for a brief chat sometime?";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const encodedText = encodeURIComponent(generalText);
  const router = useRouter();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Cases", path: "/cases" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">Carter</span> Law
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Button
          onClick={() =>
            router.push(`https://wa.me/254790670542?text=${encodedText}`)
          }
          className="hidden md:flex cursor-pointer"
          variant="default"
        >
          Free Consultation
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="w-full">
              Free Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
