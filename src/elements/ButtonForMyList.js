import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const ButtonForMyList =(props)=>{
    const [countList, setCountList]=useState();
    useEffect(()=>{
        console.log('useEffect in button')
        if(Object.keys(props.section).length != countList) {
            setCountList(Object.keys(props.section).length)
        }
    })
    return(<NavLink to="/mylist">
    <button className={"button__enter"}>Список литературы <span className={"listLiterature"}>{countList}</span></button>
</NavLink>
)}

const mapStateToProps = function (state) {
        return {
            section: state.section.data,
        };
};
export default connect(mapStateToProps)(ButtonForMyList);
