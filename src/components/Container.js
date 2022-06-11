import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Header from "./Header";
import NavBar from "./NawBar";
import PagesRouter from "./PagesRouter";
import Footer from "./Footer";
import {dataLoad} from "../redux/dispatchFunctions";
import {CONFIG_API_BOOKS} from "../redux/fetchConfig";
import {CONFIG_TYPE_BOOKS} from "../redux/typesConfig";

const Container = (props) => {
    useEffect(()=> {
            props.actionChangeBooks()
    })

    return (
        <BrowserRouter>
            <Header/>
            <NavBar/>
            <div className={"content"}><PagesRouter/></div>
            <Footer/>
        </BrowserRouter>
    )
}

// Записываю данные в хранилищу store
const mapDispatchToProps = function (dispatch) {
    return {
        actionChangeBooks:  dataLoad(CONFIG_API_BOOKS, CONFIG_TYPE_BOOKS, dispatch)
    };
};

export default connect(null, mapDispatchToProps)(Container);