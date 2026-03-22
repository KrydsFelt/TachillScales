import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">Ai Pulse</span>
            </div>
            <p className="text-zinc-600 max-w-sm leading-relaxed">
              Intelligent customer service that works for your business 24/7.
              Convert more leads and deliver better service.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-black font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-black font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 Ai Pulse. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-black transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-500 hover:text-black transition-colors text-sm">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}