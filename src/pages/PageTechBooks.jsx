export const PageTechBooks = ({ techBooks, subtitle, quote }) => {
  return (
    <div className="page_techBooks">
      <h2>Tech Books</h2>
      <h3>{subtitle}</h3>

      <p>
        <i>"{quote}"</i>
      </p>
      <p>Here are the {techBooks.length} general books:</p>
      <ul>
        {techBooks.map((book, index) => {
          return <li key={index}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};
