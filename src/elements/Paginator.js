import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import './Paginator.scss'
import ButtonForPages from "./ButtonForPages";
import {NavLink, useParams} from "react-router-dom";
import {setCount} from "../redux/dispatchFunctions";
import {connect} from "react-redux";
import {DEFAULT_COUNT} from "../redux/helperForDispatch";

//  логика в render, но уже нет сил переписывать

const Paginator = props => {
    const [count, setCount] = useState(0);
    const [option, setOption] = useState({value: DEFAULT_COUNT, label: 'по '+ DEFAULT_COUNT + ' книг'});
    useEffect(() => {
        if(props.count != count) {
            setCount(props.count)
        }
    })
    const options = [
        {value: '6', label: 'по 6 книг'},
        {value: '12', label: 'по 12 книг'},
        {value: '20', label: 'по 20 книг'},
        {value: '50', label: 'по 50 книг'},
        {value: '100', label: 'по 100 книг'},
    ]
    const params = useParams(); //дает инфу с url
    const data = props.books;
    let url = '';
    let buttonsForPages = [];
    let quantityOfPages = count;
    let quantityOfButtons = 1;
    let page = params.page || 1;
    switch (props.typeList){
        case 'author':
            url = 'author/';
            break;
        case 'genre':
            url = 'genre/';
            break;
    }

    if (data) {
        quantityOfButtons = Math.round(data.length / quantityOfPages);

        let number = page == 1 ? page : (page - 1);
        if (page == quantityOfButtons) {
            number = page - 3;
        }
        for (let i = number; i < +number + 3; i++) {
            if(i != 1 && i != (quantityOfButtons) ) {
                buttonsForPages.push(<ButtonForPages key={i} elem={i} url={url}/>);
            }
        }

    }

    const setCountOfBooksOnPage = (v) => {
        setOption(v)
        props.actionSetCount(v.value);
    }

    return <div className={"Pagination"}>
            {quantityOfButtons<=1&&
            <div><ButtonForPages key={1} elem={1} url={url}/></div>||
                <div>
            {page!=1&&<NavLink to={"/" +url+ (page-1)}><button className={"button__pages"} >prev</button></NavLink>}
            <ButtonForPages key={1} elem={1} url={url}/>
            {(page > 3)&&<span> ... </span>}
            {buttonsForPages}
            {(quantityOfButtons != page )&&<span> ... </span>}
            <ButtonForPages key={quantityOfButtons} elem={quantityOfButtons} url={url}/>
            {page!=quantityOfButtons&&
            <NavLink to={"/" +url+ (+page+1)}><button className={"button__pages"} >next</button></NavLink>}
                </div>}

        <Select className={"selectPagination"} name={"selectPagination"}
                options={options} value={option} onChange={setCountOfBooksOnPage}/>
    </div>

}

const mapDispatchToProps = function (dispatch) {
    return {
        actionSetCount: setCount(dispatch),
    };
};

const mapStateToProps = function (state) {
    return {
        count: state.count.data,

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);



