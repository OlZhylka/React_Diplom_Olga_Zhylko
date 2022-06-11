import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import ButtonForMyList from "../elements/ButtonForMyList";


    class Header extends React.PureComponent {

        showMenu=()=>{
            let navBar = document.getElementById('navBar');
                navBar.classList.toggle('show');
        }
        render() {
console.log('render header')

            return (<div id={"spaHeader"}>
                <header className={"header"} id={"header"}>
                    <div id={"accordion"} onClick={this.showMenu}>
                        <img src={'img/accordion.svg'}/>

                    </div>
                    <NavLink to={"/"} id={"logo"}>
                        <img id={"logoBig"} src={'img/logo.svg'}/>
                        <img id={"logoSmall"} src={'img/logo-mini.svg'}/>
                    </NavLink>

                    <div className={"title_project"}>Прочиталочка</div>
                    <ButtonForMyList/>
                </header>
            </div>);
        }
    }

export default Header;
