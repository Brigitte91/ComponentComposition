export const Book = ({ book, borrowBook, returnBook }) => {
  return (
    <>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      {book.available ? (
        <button onClick={() => borrowBook(book.id)}> Borrow Book </button>
      ) : (
        <button onClick={() => returnBook(book.id)}>Return Book</button>
      )}
    </>
  );
};
