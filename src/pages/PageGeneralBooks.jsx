export const PageGeneralBooks = ({ generalBooks, subtitle }) => {
  return (
    <div className="page_generalBooks">
      <h2>General Books</h2>
      <h3>{subtitle}</h3>
      <p>There are {generalBooks.length} the general books</p>
    </div>
  );
};
