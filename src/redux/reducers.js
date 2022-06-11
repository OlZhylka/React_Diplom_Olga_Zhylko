import { combineReducers } from 'redux';

import booksReducer from "./booksReducer";
import bookReducer from "./bookReducer";
import slugReducer from "./slugReducer";
import authorReducer from "./authorReducer";
import genreReducer from "./genreReducer";
import countReducer from "./countReducer";
import sectionReducer from "./sectionReducer";

let combinedReducer=combineReducers({

    books: booksReducer, // редьюсер booksReducer отвечает за раздел state под именем books
    book: bookReducer,
    slug: slugReducer,
    author: authorReducer,
    genre: genreReducer,
    count: countReducer,
    section: sectionReducer,
    // + другие редьюсеры
});

export default combinedReducer;
