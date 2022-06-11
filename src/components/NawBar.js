import React, {useState, useEffect} from 'react';
import './NavBar.scss';
import {NavLink} from "react-router-dom";
import SelectMenu from "../elements/SelectMenu";
import {connect} from "react-redux";


// useEffect(()=>{
//     // props.books.data.forEach(el=>{
//     //     if( !arrAuthors.includes(el.author)) {
//     //         arrAuthors.push(el.author);
//     //     }
//     setArrAuthors()
//     }
// )
const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
]

// let arrAuthors=[];


function NavBar(props) {
    const [arrAuthors, setArrAuthors] = useState([]);
    const [arrGenres, setArrGenres] = useState([]);
    useEffect(() => {
        if (arrAuthors.length === 0) {
            (props.books.data) && props.books.data.forEach(el => {
                if (!arrAuthors.includes(el.author)) {
                    arrAuthors.push(el.author);
                }
                setArrAuthors(arrAuthors.map(el => ({value: el, label: el})))
            });
        }
        if (arrGenres.length === 0) {
            (props.books.data) && props.books.data.forEach(el => {
                if (!arrGenres.includes(el.genre)) {
                    arrGenres.push(el.genre);
                }
                setArrGenres(arrGenres.map(el => ({value: el, label: el})))
            });
        }
    })
    return (
        <nav className={"navBar"} id={"navBar"}>

            <div className={"navBar__fix"}>
                <div id={"navBar"}>
                    <SelectMenu selectName={"Авторы"} optionsForSelect={arrAuthors}/>
                    <SelectMenu selectName={"Жанры"} optionsForSelect={arrGenres}/>
                </div>

            </div>
        </nav>
    )
}

const mapStateToProps = function (state) {
    return {
        books: state.books,
    };
};

export default connect(mapStateToProps)(NavBar);



