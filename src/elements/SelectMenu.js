import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import {useNavigate, useHistory, NavLink} from 'react-router-dom';
import {setAuthor, setGenre} from "../redux/dispatchFunctions";
import {connect} from "react-redux";

function SelectMenu(props) {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(()=> {
        if(!value) {
            setValue(props.optionsForSelect[0])
        } else if (loading != false){
            setLoading(false)
        }
    })
    const changeValue = (v)=>{
        // Дочерний элемент зависит от пропсов, это нехорошо, но пока вот так.
        if(props.selectName == 'Авторы') {
            navigate('/author', {replace: false});
            props.actionSetAuthor(v.value)
        }else if(props.selectName == 'Жанры'){
            navigate('/genre', {replace: false});
            props.actionSetGenre(v.value)
        }
    }
    return (<div>
            <h3>{props.selectName}</h3>
            <Select className={"select"}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 20,
                        colors: {
                            ...theme.colors,
                            primary: 'lightblue',
                        },
                    })}

                name={props.selectName} options={props.optionsForSelect} isLoading={loading} onChange = {changeValue}/>
        </div>
    );
}

// Записываю данные в хранилищу store
const mapDispatchToProps = function (dispatch) {
    return {
        actionSetAuthor: setAuthor(dispatch),
        actionSetGenre: setGenre(dispatch)
    };
};

export default connect(null, mapDispatchToProps)(SelectMenu);
