import {
    BOOKS_LOADING,
    BOOKS_SET,
    BOOKS_ERROR,
    BOOK_LOADING,
    BOOK_SET,
    BOOK_ERROR,
} from './helperForDispatch';

const CONFIG_TYPE_BOOKS={
    loading: BOOKS_LOADING,
    set: BOOKS_SET,
    error: BOOKS_ERROR
};

const CONFIG_TYPE_BOOK={
    loading: BOOK_LOADING,
    set: BOOK_SET,
    error: BOOK_ERROR
};

export {CONFIG_TYPE_BOOKS, CONFIG_TYPE_BOOK};