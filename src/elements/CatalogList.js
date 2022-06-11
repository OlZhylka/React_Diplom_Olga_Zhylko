import React from 'react';
import PropTypes from 'prop-types';
import './CatalogList.scss';
import CatalogSection from "../elements/CatalogSection";
import Paginator from "../elements/Paginator";
import Preloader from "../elements/Preloader";
import {connect} from "react-redux";
import {DEFAULT_COUNT} from "../redux/helperForDispatch"


class CatalogList extends React.PureComponent {

    static propTypes = {
        // books: PropTypes.arrayOf(),
        title: PropTypes.string,
        typeList: PropTypes.string,
        params: PropTypes.shape(),


    };

    state = {
        count:DEFAULT_COUNT,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.count!=prevProps.count){
            this.setState({count:this.props.count})
        }
    }

    render() {
        let data = this.props.books;
        let booksList = '';
        let quantityOfPages=this.state.count;
        let startForSlice = ((this.props.params.page)&&(this.props.params.page - 1)|| 0 ) * quantityOfPages;
        if(data) {
            booksList = data.slice(startForSlice, +quantityOfPages+startForSlice).map(book => {
                    return <CatalogSection
                        key={book.slug}
                        book={book}
                    section={this.props.section[book.slug]}/>;
                }
            );
        }

        return (

        <section className={"default-page"}>
            <h1 className={"title_library"}>{this.props.title}</h1>
            {data ?
                <div>
                    <div><Paginator books={this.props.books} typeList={this.props.typeList}/></div>
                    <div className={"catalog__section"} id={"catalogSection"}>
                        {booksList}
                    </div>
                </div>
                : <Preloader/>}
                   </section>

        );

    }

}

const mapStateToProps = function (state) {
    return {
        count: state.count.data,
        section: state.section.data,
    };
};

export default connect(mapStateToProps)(CatalogList);