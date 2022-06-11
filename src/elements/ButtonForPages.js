import React from 'react';
import {NavLink} from "react-router-dom";

const ButtonForPages =(props)=><NavLink to={"/" + props.url + props.elem}><button className={"button__pages"} >{props.elem}</button></NavLink>

export default ButtonForPages;

// кнопки с номерами страниц