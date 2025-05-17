"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          Privacy Policy
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose prose-lg text-gray-700"
        >
          <p className="mb-4">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Introduction</h2>
          <p className="mb-4">
            At Johnathan Carter&apos;s Law Office, we are committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Contact us through our website forms</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a consultation</li>
            <li>Provide feedback or participate in surveys</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            We may use the information we collect for various purposes,
            including to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Disclosure of Your Information
          </h2>
          <p className="mb-4">
            We may share information we have collected about you in certain
            situations, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights and property</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Security of Your Information
          </h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to
            help protect your personal information. However, please remember
            that no method of transmission over the Internet or method of
            electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the 12-12-2024 date.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <p>
            Johnathan Carter&apos;s Law Office
            <br />
            123 Legal Street
            <br />
            City, State 12345
            <br />
            Email:{" "}
            <a href="mailto:omondielvin@gmail.com">omondielvin@gamil.com</a>
            <br />
            Phone: <a href="tel:254792156094">+254792156094</a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
