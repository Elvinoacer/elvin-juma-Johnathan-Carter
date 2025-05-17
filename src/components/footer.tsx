"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Cases", path: "/cases" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="w-5 h-5" />,
      url: "https://www.facebook.com/profile.php?id=100092661322616",
    },
    {
      icon: <FaXTwitter className="w-5 h-5" />,
      url: "https://x.com/Elvinoace",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      url: "https://ke.linkedin.com/",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-300 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">Carter</span> Law
            </h3>
            <p className="mb-4">
              Providing expert legal counsel for businesses and individuals
              since 2008.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.slice(5).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <address className="not-italic">
              <p className="mb-2">123 Legal Avenue, Suite 500</p>
              <p className="mb-2">Eldoret, UG 3596</p>
              <p className="mb-2">
                Phone: <a href="tel:254792156094">+254792156094</a>
              </p>
              <p>
                Email:{" "}
                <a target="_blank" href="mailto:omondielvin@gmail.com">
                  omondielvin@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Carter Law. All rights reserved.
          </p>
          <p>Designed by LvnTechies</p>
        </div>
      </div>
    </motion.footer>
  );
}
