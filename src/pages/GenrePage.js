import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from "./withRouter";

import CatalogList from "../elements/CatalogList";

class GenrePage extends React.PureComponent {

    static propTypes = {
        genre: PropTypes.shape(),
        books: PropTypes.shape(),
        params: PropTypes.shape(),
    };

    state = {
        books: null,
    }

    componentDidMount() {
        this.searchBooksOfAuthor();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genre!=this.props.genre) {
            this.searchBooksOfAuthor()
        }
    }

    searchBooksOfAuthor = () => {
        let newBooks = this.props.books.data.filter(b=>b.genre == this.props.genre.data)
        this.setState({
            books:newBooks
        })
    }

    render() {
                return (
                    <CatalogList books={this.state.books} title={'Жанр: '+this.props.genre.data} params={this.props.params}
                    typeList={'genre'}/>
                )

    }

}
//Данные запрашиваю и записываю в store на уровне Container
// Получаю данные из store
const mapStateToProps = function (state) {
    return {
        books: state.books,
        genre: state.genre

    };
};

// Подключаюсь к store
let connectAuthorPage = connect(mapStateToProps)(GenrePage);
export default withRouter(connectAuthorPage);