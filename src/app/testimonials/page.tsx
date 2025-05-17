"use client";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content:
        "Johnathan guided us through our Series B funding and subsequent acquisition with incredible expertise. His attention to detail and strategic thinking saved us millions in the long run.",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      position: "General Counsel, Global Motors",
      content:
        "Working with Johnathan on our international joint venture was a game-changer. He navigated complex regulatory environments across three jurisdictions seamlessly.",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, Verde Organics",
      content:
        "As a first-time entrepreneur, I needed legal counsel I could trust. Johnathan explained everything in plain terms and helped me avoid costly mistakes in our early stages.",
      initials: "ER",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Client <span className="text-blue-600">Testimonials</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hear what my clients have to say about working with me.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <Avatar className="mr-4">
                <AvatarImage
                  src={`/images/avatar-${testimonial.initials.toLowerCase()}.jpg`}
                />
                <AvatarFallback>{testimonial.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &quot;{testimonial.content}&quot;
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
