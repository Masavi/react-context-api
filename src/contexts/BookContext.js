import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {  
  const [books, setBooks] = useState([
    { 
      id: 1,
      author: 'Gabriel García Márquez',
      title: 'One Hundred Years of Solitude',
    },
  ]);

  const addBooks = (title, author) => {
    const id = "a";
    setBooks([...books, { title, author, id }]);
  };

  const removeBook = (id) => {
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks);
  };
  
  return (
    <BookContext.Provider value={{
      books, addBooks, removeBook,
    }}>
      { props.children }
    </BookContext.Provider>
  )
};

export default BookContextProvider;