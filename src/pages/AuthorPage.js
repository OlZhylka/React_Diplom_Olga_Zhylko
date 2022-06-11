import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from "./withRouter";

import CatalogList from "../elements/CatalogList";

class AuthorPage extends React.PureComponent {

    static propTypes = {
        author: PropTypes.shape(),
        books: PropTypes.shape(),
        params: PropTypes.shape(),
    };

    state = {
        books: null,
    }

    componentDidMount() {
        this.searchBooksOfAuthor()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.author!=this.props.author) {
            this.searchBooksOfAuthor()
        }
    }

    searchBooksOfAuthor = () => {
        let newBooks = this.props.books.data.filter(b=>b.author == this.props.author.data)
        this.setState({
            books:newBooks
        })
    }

    render() {
                return (
                    <CatalogList books={this.state.books} title={'Автор: '+this.props.author.data} params={this.props.params}
                                 typeList={'author'}/>
                )

    }

}
//Данные запрашиваю и записываю в store на уровне Container
// Получаю данные из store
const mapStateToProps = function (state) {
    return {
        books: state.books,
        author: state.author

    };
};

// Подключаюсь к store
let connectAuthorPage = connect(mapStateToProps)(AuthorPage);
export default withRouter(connectAuthorPage);