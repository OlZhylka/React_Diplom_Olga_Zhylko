import React from 'react';
import PropTypes from 'prop-types';
import ButtonForLinks from "../elements/ButtonForLinks";
import Preloader from "../elements/Preloader";
import "./BookPage.scss";
import {checkMyBook, dataLoad, setSlug} from "../redux/dispatchFunctions";
import {connect} from "react-redux";
import {withRouter} from "./withRouter";
import {CONFIG_API_BOOK} from "../redux/fetchConfig";
import {CONFIG_TYPE_BOOK} from "../redux/typesConfig";
import {NavLink} from "react-router-dom";

class BookPage extends React.PureComponent {
    static  propTypes = {
        book: PropTypes.shape({
            status: PropTypes.number.isRequired, //здесь не использую, но для наглядности структуры пусть будет
            data: PropTypes.shape({
                cover_thumb: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                authors: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                    })
                ),
                genres: PropTypes.arrayOf(PropTypes.shape({
                    name: PropTypes.string,
                })),
                fragment_data: PropTypes.shape({
                    html: PropTypes.string,
                }),
                epub: PropTypes.string,
                fb2: PropTypes.string,
                pdf: PropTypes.string,
            })
        })
    }

    state = {
        star: 'img/star.svg',
    }

    componentDidMount() {
        if(this.props.section[this.props.params.slug]){
            this.setState({
                star: 'img/starColored.svg',
            })
        }

        CONFIG_API_BOOK.URL = `https://wolnelektury.pl/api/books/${this.props.params.slug}?format=json`;

        this.props.actionChangeBook();
        this.props.actionSetSlug(this.props.params.slug)
    }

    addToListOfMyBooks = () => {
        this.setState({
            star: 'img/starColored.svg',
        })
        let section= {
            'slug': this.props.params.slug,
            'title': this.props.book.data.title,
            'author': this.props.book.data.authors[0].name
        }
        this.props.actionCheckMyBook(section);
    }

    render() {
        console.log(909, this.props);
        let data = this.props.book.data;
        return (
            <section className={""}>
                {data ?
                    <div className={'book__details_raw'}>
                        <div className={"book_cover"}>
                            <img src={data.cover_thumb}/>
                            <button id={'buttonRead'} className={'button__readOnline'}>
                                <NavLink to={'/book/readingFrame'}>Читать</NavLink>
                            </button>
                        </div>
                        <div className={"addingBook"}>
                            <img alt={"Add to list"} className={"star"} src={this.state.star}
                                 onClick={this.addToListOfMyBooks}/>
                        </div>
                        <div className={"book_box"}>
                            <h3>{data.authors[0].name}</h3>
                            <h2>{data.title}</h2>
                            <div className={'genre'}>
                                <span>Жанр литературы: </span>
                                {data.genres[0] && <span>{data.genres[0].name}</span>
                                || <span> не определен </span>
                                }
                            </div>
                            <div className={"book_files"}>
                                {data.epub && <ButtonForLinks href={data.fb2}> epub </ButtonForLinks>}
                                {data.fb2 && <ButtonForLinks href={data.fb2}> fb2 </ButtonForLinks>}
                                {data.pdf && <ButtonForLinks href={data.pdf}> pdf </ButtonForLinks>}
                                {data.txt && <ButtonForLinks href={data.txt}> txt </ButtonForLinks>}
                            </div>
                            {data.fragment_data && <div className={"description"} dangerouslySetInnerHTML={{__html: data.fragment_data.html}}/>}


                        </div>
                    </div>

                    : <Preloader/>
                                }
            </section>
        );
    }

}

// Записываю данные в хранилищу store
const mapDispatchToProps = function (dispatch) {
    return {
        actionChangeBook: dataLoad(CONFIG_API_BOOK, CONFIG_TYPE_BOOK, dispatch),
        actionSetSlug: setSlug(dispatch),
        actionCheckMyBook:  checkMyBook(dispatch)
    };
};
// Получаю данные из store
const mapStateToProps = function (state) {
        return {
            book: state.book,
            section: state.section.data,
        };
};

// Подключаюсь к store
let connectHomePage = connect(mapStateToProps, mapDispatchToProps)(BookPage);
export default withRouter(connectHomePage);
    