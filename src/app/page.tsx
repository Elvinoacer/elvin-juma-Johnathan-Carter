"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]" />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
            Expert <span className="text-blue-600">Legal</span> Representation
            You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            With over 15 years of experience in corporate law, I provide
            strategic counsel to businesses and individuals navigating complex
            legal challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/cases">View Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "200+", label: "Cases Handled" },
              { value: "98%", label: "Success Rate" },
              { value: "24/7", label: "Client Support" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
