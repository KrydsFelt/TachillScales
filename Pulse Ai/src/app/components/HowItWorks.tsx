import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    title: "Install on your website",
    description: "Add our simple code snippet to your website — it only takes 2 minutes.",
  },
  {
    step: "02",
    title: "Train your AI assistant",
    description: "Upload your company info, products, and FAQs. The AI learns your tone and style.",
  },
  {
    step: "03",
    title: "Customize and optimize",
    description: "Adjust the conversation flow, integrate with your calendar and CRM, and define your goals.",
  },
  {
    step: "04",
    title: "Go live and feel the difference",
    description: "Your AI assistant is ready to serve customers and generate leads 24/7.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How to get started
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Four simple steps to better customer service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-black/10 -z-10" />
              )}
              
              <div className="relative">
                <div className="text-6xl font-bold text-black/5 mb-4">
                  {step.step}
                </div>
                <div className="absolute top-0 left-0">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 mt-8">
                  {step.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
