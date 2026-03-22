import { motion } from "motion/react";

export function TrustBar() {
  return (
    <section className="py-20 bg-zinc-50 border-y border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-sm font-semibold text-zinc-500 mb-10 uppercase tracking-wider">
            Trusted by leading companies across the Nordics
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20">
            {/* Placeholder for company logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-10 w-36 bg-zinc-300 rounded opacity-50"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}