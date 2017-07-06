export const BOOK_SELECTED = 'BOOK_SELECTED'
export const BOOK_SEARCH = 'BOOK_SEARCH';

export function selectBook(book) {
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}

export function searchBooks(term) {
  return {
    type: BOOK_SEARCH,
    payload: term
  };
}
