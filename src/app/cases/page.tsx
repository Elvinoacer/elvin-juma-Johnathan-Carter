"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function CasesPage() {
  const caseStudies = [
    {
      title: "Tech Startup Acquisition",
      description:
        "Successfully negotiated the $120M acquisition of a promising tech startup by a Fortune 500 company.",
      outcome: "Client received favorable terms and transition support.",
      category: "Mergers & Acquisitions",
    },
    {
      title: "Corporate Governance Restructuring",
      description:
        "Overhauled governance structure for a family-owned business transitioning to professional management.",
      outcome:
        "Established clear leadership pathways while preserving family interests.",
      category: "Corporate Law",
    },
    {
      title: "High-Stakes Commercial Litigation",
      description:
        "Represented a manufacturing firm in a breach of contract dispute with a supplier.",
      outcome: "Secured $8.2M settlement for client.",
      category: "Litigation",
    },
    {
      title: "International Joint Venture",
      description:
        "Facilitated a cross-border joint venture between US and German automotive companies.",
      outcome: "Created framework for successful long-term collaboration.",
      category: "International Business",
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
          Selected <span className="text-blue-600">Case Studies</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Representative examples of complex legal matters I&apos;ve
          successfully handled for clients.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader>
                <span className="text-sm font-medium text-blue-600">
                  {caseStudy.category}
                </span>
                <CardTitle>{caseStudy.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {caseStudy.description}
                </CardDescription>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">Outcome:</p>
                  <p className="text-gray-600">{caseStudy.outcome}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
