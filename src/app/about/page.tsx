"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Johnathan Carter</span>
          </h2>
          <div className="prose max-w-none text-gray-600 mb-8">
            <p>
              With a Juris Doctor from Harvard Law School and over 15 years of
              experience in corporate law, I bring a wealth of knowledge and
              practical expertise to every case I handle.
            </p>
            <p>
              My practice focuses on providing strategic legal counsel to
              businesses of all sizes, from startups to Fortune 500 companies. I
              specialize in mergers and acquisitions, corporate governance, and
              complex commercial litigation.
            </p>
            <p>
              What sets me apart is my commitment to understanding each
              client&apos;s unique needs and delivering tailored solutions that
              align with their business objectives.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/profile.png"
            alt="Johnathan Carter"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Education and Experience */}
      <div className="mt-24 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
          <div className="space-y-6">
            {[
              {
                institution: "Harvard Law School",
                degree: "Juris Doctor",
                year: "2005",
              },
              {
                institution: "Yale University",
                degree: "Bachelor of Arts, Political Science",
                year: "2002",
              },
            ].map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h4 className="font-bold text-lg text-gray-900">
                  {edu.institution}
                </h4>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-gray-400 text-sm mt-2">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
          <div className="space-y-6">
            {[
              {
                position: "Senior Partner",
                firm: "Carter & Associates LLP",
                years: "2015 - Present",
              },
              {
                position: "Associate Attorney",
                firm: "Wellington & Stone",
                years: "2008 - 2015",
              },
              {
                position: "Law Clerk",
                firm: "New York Supreme Court",
                years: "2006 - 2008",
              },
            ].map((exp, index) => (
              <motion.div
                key={exp.firm}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h4 className="font-bold text-lg text-gray-900">
                  {exp.position}
                </h4>
                <p className="text-gray-600">{exp.firm}</p>
                <p className="text-gray-400 text-sm mt-2">{exp.years}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
