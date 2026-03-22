import { motion } from "motion/react";
import { MessageCircle, TrendingUp, Calendar, Zap, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Intelligent conversation flow",
    description:
      "Advanced AI understands customer needs and delivers precise, contextual responses in natural language.",
  },
  {
    icon: TrendingUp,
    title: "Lead qualification",
    description:
      "Automatically identify and prioritize the most promising leads so your team focuses on the right tasks.",
  },
  {
    icon: Calendar,
    title: "Automatic booking",
    description:
      "Integrates with your calendar and books meetings directly — no manual intervention needed.",
  },
  {
    icon: Zap,
    title: "Lightning-fast integration",
    description:
      "Deploy in minutes with our plug-and-play solution. No technical expertise required.",
  },
  {
    icon: BarChart3,
    title: "Deep analytics",
    description:
      "Get insights into customer behavior, popular questions, and conversion data in real time.",
  },
  {
    icon: Shield,
    title: "Security & GDPR",
    description:
      "Full GDPR compliance and enterprise-grade security. Your data is protected.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Everything you need in one solution
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Powerful features that help your business grow and serve customers better
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-black/10 hover:border-black/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}