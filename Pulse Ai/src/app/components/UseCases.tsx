import { motion } from "motion/react";
import { Building2, ShoppingBag, Briefcase, GraduationCap } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    industry: "Real Estate",
    title: "Real Estate Agents",
    description: "Book viewings and qualify buyers automatically, even outside business hours.",
    stats: "+65% more bookings",
  },
  {
    icon: ShoppingBag,
    industry: "E-commerce",
    title: "Online Stores",
    description: "Help customers with product choices and answer questions instantly.",
    stats: "+42% conversion rate",
  },
  {
    icon: Briefcase,
    industry: "B2B Services",
    title: "B2B Companies",
    description: "Qualify leads and book demos with potential customers around the clock.",
    stats: "+50% more qualified leads",
  },
  {
    icon: GraduationCap,
    industry: "Education",
    title: "Educational Institutions",
    description: "Answer applicant questions and book info sessions automatically.",
    stats: "+38% faster response",
  },
];

export function UseCases() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Perfect for your industry
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Ai Pulse adapts to your unique needs and works across all industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-black/10 hover:border-black/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <useCase.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-grow">
                  <div className="text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wider">
                    {useCase.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-zinc-600 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                    <span className="text-sm font-semibold text-green-700">
                      {useCase.stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
