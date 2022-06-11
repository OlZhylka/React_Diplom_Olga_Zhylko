import React from 'react';
import "./BookInMyList.scss"
import {deleteMyBook} from "../redux/dispatchFunctions";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const BookInMyList = (props) => {
    const deleteBookFromMyList = () => {
        props.actionDeleteMyBook(props.slug);
    }
    return(<div className={"myBook"}>
        <img src={'../img/book.svg'}/>
        <NavLink to={"/book/"+props.slug} className={"title"}>  {props.bookTitle}. </NavLink>
        <span className={"author"}> {props.bookAuthor}</span>
        <span><button onClick={deleteBookFromMyList}>Delete</button></span></div>);
}

const mapDispatchToProps = function (dispatch) {
    return {
        actionDeleteMyBook:  deleteMyBook(dispatch)
    };
};

export default connect(null, mapDispatchToProps)(BookInMyList);
