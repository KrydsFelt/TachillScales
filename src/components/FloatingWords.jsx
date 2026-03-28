import './FloatingWords.css';

const words = [
  { text: 'Samarbejde', delay: 0 },
  { text: 'Salg', delay: 2.5 },
  { text: 'Marketing', delay: 5 },
  { text: 'Hjemmesider', delay: 7.5 },
  { text: 'Produkter', delay: 10 },
  { text: 'Fremtiden', delay: 12.5 },
];

export function FloatingWords() {
  return (
    <div className="floating-words-container">
      {words.map((word, index) => (
        <div
          key={index}
          className="floating-word"
          style={{ '--delay': `${word.delay}s` }}
        >
          {word.text}
        </div>
      ))}
    </div>
  );
}
