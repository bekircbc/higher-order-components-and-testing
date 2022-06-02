export const withQuoteOfTheDay = (Component) => (props) => {
  const quotes = [
    "Happiness is lowering your expectations and raising your appreciation.",
    "Always smile so people don't ask question.",
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return <Component {...props} quote={quote} />;
};
