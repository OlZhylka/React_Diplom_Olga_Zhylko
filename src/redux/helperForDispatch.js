const BOOKS_LOADING = 'BOOKS_LOADING';
const BOOKS_SET = 'BOOKS_SET';
const BOOKS_ERROR = 'BOOKS_ERROR';
const BOOK_LOADING = 'BOOK_LOADING';
const BOOK_SET = 'BOOK_SET';
const BOOK_ERROR = 'BOOK_ERROR';
const SLUG_SET = 'SLUG_SET';
const AUTHOR_SET = 'AUTHOR_SET';
const GENRE_SET = 'GENRE_SET';
const COUNT_SET = 'COUNT_SET';
const SECTION_SET = 'SECTION_SET';
const SECTION_DELETE = 'SECTION_DELETE';

const DEFAULT_COUNT = 12;

const loadingAC = (typeLoading) => {
    return {
        type: typeLoading,
    };
}
const setAC = function (typeSet, data) {
    return {
        type: typeSet,
        dataAct: data,
    };
}

export {
    loadingAC, setAC,
    BOOKS_LOADING, BOOKS_SET, BOOKS_ERROR,
    BOOK_LOADING, BOOK_SET, BOOK_ERROR,
    SLUG_SET,
    AUTHOR_SET,
    GENRE_SET,
    COUNT_SET,
    DEFAULT_COUNT,
    SECTION_SET, SECTION_DELETE
};