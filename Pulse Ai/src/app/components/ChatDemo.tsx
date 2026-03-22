import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Bot, User } from "lucide-react";

export function ChatDemo() {
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai'; text: string }>>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const conversation = [
    { type: 'user' as const, text: 'Hi, I need help with...', delay: 1000 },
    { type: 'ai' as const, text: 'Of course, how can I help you?', delay: 1500 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < conversation.length) {
        setMessages(prev => [...prev, conversation[currentStep]]);
        setCurrentStep(prev => prev + 1);
      } else {
        // Reset animation after completion
        setTimeout(() => {
          setMessages([]);
          setCurrentStep(0);
        }, 3000);
      }
    }, conversation[currentStep]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Chat window */}
      <div className="rounded-3xl border border-black/10 bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-black text-white px-6 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold">Ai Pulse Support</div>
            <div className="text-xs text-zinc-400 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              Online
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-6 space-y-4 bg-zinc-50 min-h-[300px]">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' ? 'bg-zinc-300' : 'bg-black'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-zinc-700" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>

                  {/* Message bubble */}
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.type === 'user' 
                      ? 'bg-black text-white rounded-tr-sm' 
                      : 'bg-white text-black border border-black/10 rounded-tl-sm'
                  }`}>
                    <TypewriterText text={message.text} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {currentStep > 0 && currentStep < conversation.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex gap-3 items-end">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white border border-black/10 rounded-tl-sm">
                  <div className="flex gap-1">
                    <motion.div
                      className="w-2 h-2 bg-zinc-400 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-zinc-400 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-zinc-400 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input area */}
        <div className="bg-white border-t border-black/10 px-6 py-4">
          <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-zinc-50 border border-black/10">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow bg-transparent outline-none text-sm text-zinc-400"
              disabled
            />
            <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-green-500 text-white text-xs font-semibold shadow-lg"
      >
        Response in &lt; 2 sec
      </motion.div>
    </div>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return <span>{displayedText}</span>;
}
