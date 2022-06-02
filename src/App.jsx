import "./App.scss";
import { PageWelcome } from "./pages/PageWelcome";
import { PageTechBooks } from "./pages/PageTechBooks";
import { PageGeneralBooks } from "./pages/PageGeneralBooks";
import { PageAbout } from "./pages/PageAbout";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";

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
        <Route path="/tech-books" element={<PageTechBooks />} />
        <Route path="/general-books" element={<PageGeneralBooks />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </div>
  );
}

export default App;
