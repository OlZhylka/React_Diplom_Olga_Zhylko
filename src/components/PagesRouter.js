import React from 'react';
import {Route, Routes} from 'react-router-dom';

import HomePage from "../pages/HomePage";
import BookPage from "../pages/BookPage";
import ReadingFrame from "../elements/ReadingFrame";
import AuthorPage from "../pages/AuthorPage";
import GenrePage from "../pages/GenrePage";
import PageMyList from "../pages/PageMyList";

class PagesRouter extends React.Component {

    render() {

        return (
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/book/:slug" element={<BookPage/>}/>
                <Route path="/book/readingFrame" element={<ReadingFrame/>}/>
                <Route path="/author" element={<AuthorPage/>}/>
                <Route path="/author/:page" element={<AuthorPage/>}/>
                <Route path="/genre" element={<GenrePage/>}/>
                <Route path="/genre/:page" element={<GenrePage/>}/>
                <Route path="/mylist" element={<PageMyList/>}/>
                <Route path="/:page" element={<HomePage/>}/>
            </Routes>

        );

    }

}

export default PagesRouter;
    