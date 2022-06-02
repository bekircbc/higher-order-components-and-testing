export const PageAbout = ({ generalBooks, techBooks }) => {
  return (
    <div className="page_about">
      <h2>About</h2>
      <p>
        This site now has a total of {generalBooks.length + techBooks.length}{" "}
        books.
      </p>
    </div>
  );
};
