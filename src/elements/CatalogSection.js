import React from 'react';
import {NavLink} from "react-router-dom";
import {checkMyBook} from "../redux/dispatchFunctions";
import {connect} from "react-redux";


class CatalogSection extends React.PureComponent {

    state = {
        title: this.props.book.title,
        slug: this.props.book.slug,
        url: this.props.book.url,
        author: this.props.book.author,
        coverThumb: this.props.book.cover_thumb,
        genre: this.props.book.genre,
        star: 'img/star.svg',

    }

    componentDidMount() {
        if (this.props.section) {
            this.setState({
                star: 'img/starColored.svg',
            })
        }
    }
    componentDidUpdate() {
        console.log(`componentDidUpdate() в секции ${this.props.book.title}`);
    }


    addToListOfMyBooks = () => {
        this.setState({
            star: 'img/starColored.svg',
        })
        let section = {
            'slug': this.props.book.slug,
            'title': this.props.book.title,
            'author': this.props.book.author
        }
        this.props.actionCheckMyBook(section);
    }

    render() {
        console.log(`render в секции ${this.props.book.title}`)
        return (
            <div className={'book__section'}>
                <NavLink title={this.state.title} to={'/book/' + this.state.slug} data-slug={this.state.slug}>
                    <img alt={this.state.title} className={"cover"}
                         src={'https://wolnelektury.pl/media/' + this.state.coverThumb}
                    />
                </NavLink>
                <div className={""}>
                    <div onClick={this.addToListOfMyBooks}><img alt={"Add to list"} className={"star"} id={"star"}
                                                                src={this.state.star}
                    />
                    </div>
                    <h4><NavLink to={'/book/' + this.state.slug}
                                 data-slug={this.state.slug}>{this.state.title}</NavLink></h4>
                    <h5>{this.state.author} </h5>
                    <h6>{this.state.kind} </h6>
                    <h6>{this.state.genre}</h6>
                    }
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        actionCheckMyBook: checkMyBook(dispatch)
    };
};

export default connect(null, mapDispatchToProps)(CatalogSection);
