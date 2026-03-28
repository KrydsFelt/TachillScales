import { useState, useEffect } from 'react';
import './ChatAnimation.css';

const chatMessages = [
  { type: 'customer', text: 'Hej! Jeg hører fra mit netværk i kan hjælpe?' },
  { type: 'me', text: 'Så du landet det rigtige sted.' },
  { type: 'me', text: 'Hvad skal du have hjælp til?' },
    { type: 'customer', text: 'Marketing! 🚀' },
  { type: 'me', text: ' Teamet og jeg står klar!' },
  { type: 'me', text: 'Du kan bare surfe lidt rundt på hjemmesiden, så opsætter jeg et møde, når det lige passer dig!;)' },
];

export function ChatAnimation() {
  const [visibleMessages, setVisibleMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev.length < chatMessages.length) {
          return [...prev, chatMessages[prev.length]];
        }
        return prev;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chat-animation">
      <div className="chat-container">
        {visibleMessages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.type}`}>
            <div className="message-bubble">
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
