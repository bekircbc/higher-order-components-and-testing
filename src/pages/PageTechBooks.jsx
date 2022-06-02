export const PageTechBooks = ({ techBooks, subtitle }) => {
  return (
    <div className="page_techBooks">
      <h2>Tech Books</h2>
      <h3>{subtitle}</h3>
      <p>There are {techBooks.length} tech books.</p>
    </div>
  );
};
