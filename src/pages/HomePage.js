import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from "./withRouter";
import CatalogList from "../elements/CatalogList";

class HomePage extends React.PureComponent {

    static propTypes = {
        books: PropTypes.shape(),
        params: PropTypes.shape(),
    };

    render() {
        return (
<CatalogList books={this.props.books.data} title={'Библиотека'} params={this.props.params}/>
        );
    }
}

//Данные запрашиваю и записываю в store на уровне Container
// Получаю данные из store
const mapStateToProps = function (state) {
    return {
        books: state.books
    };
};
// Подключаюсь к store
let connectHomePage = connect(mapStateToProps)(HomePage);
export default withRouter(connectHomePage);