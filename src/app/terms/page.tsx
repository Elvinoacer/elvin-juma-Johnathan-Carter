"use client";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          Terms of Service
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

          <h2 className="text-xl font-semibold mt-6 mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing and using this website, you accept and agree to be
            bound by the terms and provisions of this agreement. If you do not
            agree to these terms, please do not use this website.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            2. No Attorney-Client Relationship
          </h2>
          <p className="mb-4">
            The information provided on this website does not constitute legal
            advice and does not create an attorney-client relationship.
            Contacting Johnathan Carter through this website does not establish
            an attorney-client relationship.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">3. Use of Website</h2>
          <p className="mb-4">
            You agree to use this website only for lawful purposes and in a way
            that does not infringe the rights of, restrict, or inhibit anyone
            else&apos;s use and enjoyment of the website.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            4. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on this website, including text, graphics, logos, and
            images, is the property of Johnathan Carter&apos;s Law Office and is
            protected by copyright and other intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            5. Limitation of Liability
          </h2>
          <p className="mb-4">
            Johnathan Carter&apos;s Law Office will not be liable for any
            damages arising out of or in connection with the use of this
            website. This is a comprehensive limitation of liability that
            applies to all damages of any kind.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">6. Governing Law</h2>
          <p className="mb-4">
            These terms shall be governed by and construed in accordance with
            the laws of the Republic of Kenya, without regard to its conflict of
            law provisions.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            7. Changes to Terms
          </h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Your
            continued use of the website following any changes constitutes your
            acceptance of the new terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            8. Contact Information
          </h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please
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
            <a href="mailto:omondielvin@gmail.com">omondielvin@gmail.com</a>
            <br />
            Phone: <a href="tel:254792156094">+254792156094</a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
