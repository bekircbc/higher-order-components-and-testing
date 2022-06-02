import { useEffect, useState } from "react";
import axios from "axios";

const techBookUrl = "https://edwardtanguay.netlify.app/share/techBooks.json";
const generalBookUrl = "https://edwardtanguay.netlify.app/share/books.json";

export const withLoadedBooks = (Component) => {
  return (props) => {
    const [techBooks, setTechBooks] = useState([]);
    const [generalBooks, setGeneralBooks] = useState([]);

    useEffect(() => {
      (async () => {
        setTechBooks((await axios.get(techBookUrl)).data);
      })();
    }, []);
    useEffect(() => {
      (async () => {
        setGeneralBooks((await axios.get(generalBookUrl)).data);
      })();
    }, []);

    return (
      <Component {...props} techBooks={techBooks} generalBooks={generalBooks} />
    );
  };
};
