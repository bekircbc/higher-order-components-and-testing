import { useEffect, useState } from "react";
import axios from "axios";

const techBookUrl = "https://edwardtanguay.netlify.app/share/techBooks.json";
const generalBookUrl = "https://edwardtanguay.netlify.app/share/books.json";

export const withLoadedBooks = (Component, subtitle) => {
  return (props) => {
    const [techBooks, setTechBooks] = useState([]);
    const [generalBooks, setGeneralBooks] = useState([]);
    const [subtitle, setSubtitle] = useState([]);
    useEffect(() => {
      (async () => {
        setTechBooks((await axios.get(techBookUrl)).data);
      })();
      setSubtitle(subtitle);
    }, []);
    useEffect(() => {
      (async () => {
        setGeneralBooks((await axios.get(generalBookUrl)).data);
      })();
      setSubtitle(subtitle);
    }, []);

    return (
      <Component
        {...props}
        subtitle={subtitle}
        techBooks={techBooks}
        generalBooks={generalBooks}
      />
    );
  };
};
