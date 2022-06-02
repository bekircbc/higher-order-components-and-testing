import "./App.scss";
import { PageWelcome } from "./pages/PageWelcome";
import { PageTechBooks } from "./pages/PageTechBooks";
import { PageGeneralBooks } from "./pages/PageGeneralBooks";
import { PageAbout } from "./pages/PageAbout";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { withLoadedBooks } from "./hocs/withLoadedBooks";

const PageTechBooksWithLoadedBooks = withLoadedBooks(
  PageTechBooks,
  "The best web dev books of our time"
);
const PageGeneralBooksWithLoadedBooks = withLoadedBooks(
  PageGeneralBooks,
  "Deep reading "
);
const PageAboutWithLoadedBooks = withLoadedBooks(PageAbout);

function App() {
  return (
    <div className="App">
      <h1>Personal Site</h1>
      <hr />
      <NavLink to="/welcome">Welcome</NavLink> |{" "}
      <NavLink to="/tech-books">Tech Books</NavLink> |{" "}
      <NavLink to="/general-books">General Books</NavLink> |{" "}
      <NavLink to="/about">About</NavLink>
      <hr />
      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/tech-books" element={<PageTechBooksWithLoadedBooks />} />
        <Route
          path="/general-books"
          element={<PageGeneralBooksWithLoadedBooks />}
        />
        <Route path="/about" element={<PageAboutWithLoadedBooks />} />
        <Route path="/" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </div>
  );
}

export default App;
