import React from 'react';
// Не использую <Nawlink/>, здесь нужно уйти на сторонний ресурс
// const ButtonForLinks =(props)=><button className={'_epub'}><a href={props.href} target={"_blank"}>{props.children}</a></button>;
const ButtonForLinks =(props)=><a href={props.href} target={"_blank"}><button className={'_epub'}>{props.children}</button></a>;
export default ButtonForLinks;
