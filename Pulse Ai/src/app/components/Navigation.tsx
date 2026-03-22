import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-4 rounded-full bg-white/80 border border-black/10 backdrop-blur-xl shadow-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-black">Ai Pulse</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-zinc-700 hover:text-black transition-colors text-sm font-medium">
              Solutions
            </a>
            <a href="#use-cases" className="text-zinc-700 hover:text-black transition-colors text-sm font-medium">
              Cases
            </a>
            <a href="#pricing" className="text-zinc-700 hover:text-black transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#resources" className="text-zinc-700 hover:text-black transition-colors text-sm font-medium">
              Resources
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-zinc-700 hover:text-black transition-colors text-sm font-medium">
              Log in
            </button>
            <button className="px-6 py-2.5 rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition-colors text-sm">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}